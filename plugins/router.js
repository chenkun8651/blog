import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";

Vue.use(VueRouter);
NProgress.configure({
  easing: "ease-out-in", // 动画方式
  speed: 700, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});
export default ({ app }) => {
  app.router.afterEach((to, from, next) => {
    NProgress.start();
    next;
  });
  app.router.afterEach((to, form) => {
    NProgress.done();
  });
};
