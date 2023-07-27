import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      num: 0,
      obj: {
        a: 1,
        b: 2
      }
    }
  },
  getters: {
    doubleCount: (state) => state.num * 2 
  },
  actions: {
    //同步方法
    increment() {
      this.num ++
    },
    decrement() {
      this.num --
    },
    //异步方法
    async asyncIncrement() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.increment()
    },
    async asyncDecrement() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.decrement()
    }
  },
  persist: true
})