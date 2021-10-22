# 关于typeScript的基础介绍

## 什么是typeScript，它是否一门语言？

>下述文章中typeScript简称ts，javaScript简称js。

在学习ts之前，难免要提到js，js由于最初使用量很少，所以起初的设计者将这门语言设计的十分简单，其特性之一就是动态语言。而随着时间的推移，js变的越来越受欢迎，而Web浏览器也是快速的迭代发展。我们发现js能做到事情越来越多，而js代码量就开始急剧上升。这个时候动态语言的弊端就开始体现，大量js代码能够编译通过，但运行时就开始一直报错。基于这样的一种情侣，ts作为js超集就为我们处理这些问题。

尽管ts手册上说明ts是一门语言，但是我学习以后对这样的看法不尽认同，可以说ts是js的超集，ts是js的静态类型检查工具。

举一个简单的列子：

```javascript
const obj = { width: 10, height: 15 };
// 你可以在js里面访问一个对象不存在的属性，在编写代码时这个没有问题的
// 但是运行时会报错，因为obj.heigth返回的是undefined
const area = obj.width * obj.heigth;
```

```typescript
const obj = { width: 10, height: 15 };
// 在ts这里会直接报错，因为obj会生成默认的类型，类型里面没有heigth属性，所以编译就无法通过，ts会提示你以下在错误
// Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
const area = obj.width * obj.heigth;
```

## 静态类型检查

在js中，每一个变量背后代表的值都是未知，在编写的时候，你可以使用一个已声明的变量做任何操作，一直到你运行到它为止才开始报错。下面是一个message变量的例子。

```javascript
    message = message + 1;
    message.toLowerCase();
    message();
```

对于上面的变量message，如果没看到它的实际定义以前，我们对它一无所知。它可能是一个数字类型，作用于数字的算法。它可能是一个对象类型，里面有一个toLowerCase的方法被调用。它也可能本身就是一个方法，可以直接调用。如果我们要知道这个message变量究竟是啥，可以console一下变量，或者去查看代码上下文message的定义。而在ts中，变量message的类型是会被定义的好，在我们使用message时我们能了解到它的基本信息。

## 非运行时遇见的错误

上面只讲到了运行时发生的错误，但是对比一下本身具有静态类型检查的语言，你就会发现，有些问题在变量初始化的时候就可把错误暴露出来。ts也将这方面的检查做出了补充。

```typescript
    // 1.调用不存的属性
    const user = {
        name: "Daniel",
        age: 26,
    };
    // Property 'location' does not exist on type '{ name: string; age: number; }'.
    // user里面并没有location属性，调用不存在属性直接报错
    user.location;
    // 2.拼写错误
    const announcement = "Hello World!";
    announcement.toLocaleLowerCase();
    // string对象没有toLocalLowerCase和toLocaleLowercase的方法
    announcement.toLocalLowerCase();
    announcement.toLocaleLowercase();
    // 3.基本的逻辑错误
    const value = Math.random() < 0.5 ? "a" : "b";
    if (value !== "a") {
        value = "b";
    } else if (value === "b") {
        // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
        // 条件不成立，上面value的值只能是"a"或者"b"，第一个条件不是"a"的话就一定是"b"了，到第二个条件只能是"a"，所以这个条件分支没有什么意义
    }
```

## 类型的工具用法

使用ts还有一个非常好用的好处，类型检查器可以检查变量和其它属性上可以访问正确的属性。一旦知道了这些信息，在使用时就可以建议可能想要使用的属性。如果我们键入时超出了定义的范围，支持ts的编辑器可以提供“快速修复”来自动修复。

```typescript
    const user = {
        name: "Daniel",
        age: 26,
    };
    // 这里输入点以后就可以联想到name和age属性
    user.;
```
