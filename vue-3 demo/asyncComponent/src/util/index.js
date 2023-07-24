import { defineAsyncComponent, h } from "vue";
import Loading from "../components/Loading.vue";
import CError from "../components/Error.vue";
import "nprogress/nprogress.css"
import NProgress from "nprogress";

export function delay(duration) {
  if (!duration) duration = random(1000, 5000)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

//得到一个异步页面
export function getAsyncPage(path) {
  return defineAsyncComponent({
    loader: async () => {
      NProgress.start();
      await delay();
      const res = await import(path);
      NProgress.done();
      return res
    },
    loadingComponent: Loading
  });
}

//得到一个异步组件
export function getAsyncComponent(path) {
  return defineAsyncComponent({
    loader: async () => {
      await delay();
      if (Math.random() > 0.5){
        throw new Error()
      }
      const res = await import(path);
      return res;
    },
    loadingComponent: Loading,
    errorComponent: {
      render() {
        return h(CError, '出错了！！！')
      }
    }
  });
}