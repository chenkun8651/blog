# WebSocket落地在框架

>由于需要做即时通讯的功能，那必不可少的用到WebSocket，在学习了关于WebSocket的基础知识之后，在我用到的两种框架上使用了起来，也踩过几个坑，还有没填上的坑（欢迎评论指导一下）。

## WebSocket是什么？使用WebSocket的原因？

WebSocket是网络通讯协议的一种。提到网络通讯协议，我第一个就想到了HTTP协议，但是HTTP协议的一些特性我想不用多说，大家也都是了解的，像无法保持长连接（由于功能需要，已有大佬整出保持长连接的方式）；发起端只能是客户端；这些特性让我们在实际开发某些功能遇到了极大的麻烦，所以在HTML5推出WebSocket标准，让浏览器和服务器建立了无限制的双全工通信，双方可以互发消息。

## WebSocket框架上使用

angular（7.2.2）+ ionic（4.0.0）

这是一个移动端应用程序，在angular框架中，我惯用服务（service）来处理业务，因此直接在服务管理的文件夹创建一个WebSocket的服务（ng generate service WebSocket）。WebSocket服务里包含创建连接，重连机制，心跳检测，计算运行时间等基础功能（详细写法可见代码）。

接下来可以在app全局新增一个WebSocket组件，ngOnInit生命钩子去建立连接，往组件中写入收发消息代码。解决网页刷新导致WebSocket实例被清除，WebSocket组件在生命周期再次连接。

问题1：我在ionic中创建了WebSocket组件，用于刷新重连（app没有刷新，实际操作只会在浏览器调试中出现），在浏览器上调试可以正常使用并且不会断开连接。但是当我将代码打包编译成apk后，打开程序会出现白屏？

问题2：因为我脱离了组件使用WebSocket，单纯的调用服务。我实际组件中需要使用的数据也保存在服务之中，导致消息返回数据不会更新视图？

```ts
import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    public webSocket: WebSocket;                        // websocket通讯对象
    url: string = null;                                 // websocket连接地址
    isConnectSuccess: boolean = false;                  // 当前连接状态
    isReconnect: boolean = false;                       // 是否正在重连
    reconnectSubscription: any = null;                  // 定时重新连接对象
    reconnectPeriod: number = 20 * 1000;                // 重连失败，定时重新连接的时间刻度，20s
    heartCheckSubscription: any = null;                 // 定时心跳检查对象
    heartCheckPeriod: number = 10 * 60 * 1000;          // 定时心跳检测的时间刻度，10min
    runTimeSubscription: any = null;                    // 记录运行时间对象
    runTimePeriod: number = 10 * 60 * 1000;             // 记录运行时间的时间刻度，10min

    constructor(
        private messageService: MessageService,
    ) { }

    /**
     * @description 更新连接地址，创建WebSocket实例，添加连接打开，连接关闭，连接异常，接收消息事件
     * @method Connect
     * @author chenkun
     */
    Connect(url?: string) {
        const ip = localStorage.getItem('ipAddress');
        if (ip) {
            this.url = "ws://" + ip + ":40100";
        } else {
            this.messageService.ErrorToast('当前设备没有服务器地址');
        }
        if (!!url) {
            this.url = url;
        }
        if (this.url) {
            this.webSocket = new WebSocket(this.url);
        }
        this.webSocket.onopen = (event) => {
            this.OnOpen(event);
        }
        this.webSocket.onclose = (event) => {
            this.OnClose(event);
        }
        this.webSocket.onerror = (event) => {
            this.OnError(event);
        }
        this.webSocket.onmessage = (event) => {
            this.OnMessage(event);
        }
    }

    /**
     * @description 检测当前websocket服务状态
     * @method CheckWebSocket
     * @author chenkun
     */
    CheckWebSocket() {
        const webSocket = this.webSocket;
        if (webSocket) {
            switch (webSocket.readyState) {
                case 0:
                    // 没有连接
                    break;
                case 1:
                    // 连接成功
                    break;
                case 2:
                    // 连接正在关闭
                    break;
                case 3:
                    // 连接关闭
                    break;
            }
        } else {
            // WebSocket实例对象没有，刷新浏览器会导致这种情况
        }
    }

    /**
     * @description WebSocket连接成功时触发事件，当前连接状态改为成功，如果当前正在重连则停止重新连接，开启心跳检测和计算连接运行时间
     * @param event 连接成功时，服务端发回的事件对象
     * @method OnOpen
     * @author chenkun
     */
    OnOpen(event: any) {
        // 连接成功
        this.isConnectSuccess = true;
        if (this.isReconnect) {
            this.StopReconnect();
            this.StartHeartCheck();
            this.StartCalcRunTime();
        }
    }

    /**
     * @description WebSocket连接关闭时触发事件，当前连接状态改为失败，开始尝试重新连接，停止计算运行时间
     * @param event 连接失败时，服务端发回的事件对象
     * @method OnClose
     * @author chenkun
     */
    OnClose(event: any) {
        // 连接关闭
        this.isConnectSuccess = false;
        this.webSocket.close();
        this.StartReconnect();
        this.StopRunTime();
    }

    /**
     * @description WebSocket连接异常时触发事件，出现异常会同时触发连接关闭事件
     * @param event 连接异常时，服务端发回的事件对象
     * @method OnError
     * @author chenkun
     */
    OnError(event: any) {
        // 连接异常
        this.isConnectSuccess = false;
    }

    /**
     * @description WebSocket服务端发回消息接收事件
     * @param event 服务端发回消息的事件对象
     * @method OnMessage
     * @author chenkun
     */
    OnMessage(event: any) {
        // 服务器返回的消息
        console.log(event);
    }

    /**
     * @description WebSocket客户端发送消息给服务端，发送消息前先检查打印服务是否连接
     * @param message 客户端发送的消息
     * @method SendMessage
     * @author chenkun
     */
    SendMessage(message: any) {
        // 检查WebSocket的状态，连接存在时才能发送消息
        this.CheckWebSocket();
        if (this.webSocket) {
            if (this.webSocket.readyState === 1) {
                this.webSocket.send(message);
            }
        }
    }

    /**
     * @description 开始定时重连WebSocket服务端，如果连接成功，停止重连并且退出，如果正在重连直接退出
     * 如果都没有，改为正在重连状态，订阅计时器循环发送调用连接
     * @method StartReconnect
     * @author chenkun
     */
    StartReconnect() {
        if (this.isConnectSuccess) {
            this.StopReconnect();
            return;
        }
        if (this.isReconnect) {
            return;
        }
        this.isReconnect = true;
        this.reconnectSubscription = interval(this.reconnectPeriod).subscribe(async (value) => {
            console.log(`重连:${value}次`);
            const url = this.url;
            this.Connect(url);
        });
    }

    /**
     * @description 更改不再重连状态，取消订阅计时器循环发送重复连接
     * @method StopReconnect
     * @author chenkun
     */
    StopReconnect() {
        this.isReconnect = false;
        // 取消订阅定时重新连接事件
        if (typeof this.reconnectSubscription !== 'undefined' && this.reconnectSubscription != null) {
            this.reconnectSubscription.unsubscribe();
        }
    }

    /**
     * @description 订阅计时器查询心跳检测，如果当前处于连接成功状态不做处理。如果没有连接，就停止心跳检测，开始重新连接
     * @method StartHeartCheck
     * @author chenkun
     */
    StartHeartCheck() {
        this.heartCheckSubscription = interval(this.heartCheckPeriod).subscribe((value) => {
            if (this.webSocket != null && this.webSocket.readyState === 1) {
                console.log(value, '连接状态成功，发送消息保持连接');
            } else {
                this.StopHeartCheck();
                this.StartReconnect();
            }
        });
    }

    /**
     * @description 取消订阅计时器查询心跳检测
     * @method StopHeartCheck
     * @author chenkun
     */
    StopHeartCheck() {
        if (typeof this.heartCheckSubscription !== 'undefined' && this.heartCheckSubscription != null) {
            this.heartCheckSubscription.unsubscribe();
        }
    }

    /**
     * @description 订阅计时器计算连接运行时间
     * @method StartCalcRunTime
     * @author chenkun
     */
    StartCalcRunTime() {
        this.runTimeSubscription = interval(this.runTimePeriod).subscribe(value => {
            console.log('运行时间', `${value}分钟`);
        });
    }

    /**
     * @description 取消订阅计时器计算连接运行时间
     * @method StopRunTime
     * @author chenkun
     */
    StopRunTime() {
        if (typeof this.runTimeSubscription !== 'undefined' && this.runTimeSubscription !== null) {
            this.runTimeSubscription.unsubscribe();
        }
    }
}
```

vue（2.5.2）+ element-ui（2.4.11）

Vue项目中，直接创建一个SocketHelper.vue的子组件，并且直接在App.vue引入组件。借助Vuex来传递数据，借助eventBus收发消息事件。

```html
<template>
  <div id="app" class="app">
    <socket />
    <router-view />
  </div>
</template>

<script>
import socket from "./public-components/SocketHelper.vue";
export default {
  name: "App",
  components: {
    socket
  },
};
</script>
```

```html
<template>
  <div></div>
</template>

<script>
import store from "../vuex/store";

export default {
  data() {
    return {
      webSocket: null,
      eventBus: this.store.state.eventBus
    };
  },

  created() {
    this.initWebSocket();
  },

  destroyed() {
    this.webSocketClose();
  },

  methods: {
    // 初始化webSocket
    initWebSocket() {
      const url = "ws:" + this.configs.ServiceAddress + ":40100"; //ws地址
      this.webSocket = new WebSocket(url);
      this.webSocket.onopen = this.webSocketOnopen;
      this.webSocket.onerror = this.webSocketOnerror;
      this.webSocket.onclose = this.webSocketClose;
      this.webSocket.onmessage = this.webSocketOnmessage;
      this.eventBus.$off("WebSocketSendContent");
      this.eventBus.$on("WebSocketSendContent", res => {
        this.webSocketSend(res);
      });
    },

    webSocketOnopen() {
      // 连接成功
    },

    webSocketOnerror(e) {
      // 连接异常
    },

    webSocketClose(e) {
      // 连接关闭
      this.initWebSocket();
    },

    webSocketOnmessage(e) {
      // 接收消息
    },

    webSocketSend(agentData) {
      // 发送消息
      if (this.webSocket.readyState === 1) {
        this.webSocket.send(agentData);
      }
    },
  }
};
</script>
```

>参考来自
**angular整合websocket：**<https://www.jianshu.com/p/b04c34df128d>
