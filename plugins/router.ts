import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";

Vue.use(VueRouter);
NProgress.configure({
  easing: "ease-out-in", // 动画方式
  speed: 700, // 递增进度条的速度
  showSpinner: false, // 是否显示加载
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});
export default (context: any) => {
  context.app.router.afterEach((to: any, from: any, next: any) => {
    NProgress.start();
    next;
  });
  context.app.router.afterEach((to: any, form: any) => {
    NProgress.done();
  });
};
