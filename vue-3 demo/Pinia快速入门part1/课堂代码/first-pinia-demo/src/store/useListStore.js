import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useCounterStore } from "./useCounterStore";

export const useListStore = defineStore("lsit", () => {
  const counterStore = useCounterStore();
  const list = reactive({
    items: [
      {
        text: "学习 Pinia",
        isCompleted: true,
      },
      {
        text: "打羽毛球",
        isCompleted: false,
      },
      {
        text: "玩游戏",
        isCompleted: true,
      },
    ],
    counter: 100,
  });

  const doubleCounter = computed(() => {
    return list.counter * 2;
  });

  const othercounter = computed(() => {
    return counterStore.doubleCount * 3;
  });

  const addItem = function (newVlaue) {
    this.list.items.push({
      text: newVlaue,
      isCompleted: false,
    });
  };

  //切换完成状态
  const completeHandle = function (index) {
    this.list.items[index].isCompleted = !this.list.items[index].isCompleted;
  };

  //删除项目
  const deleteItem = function (index) {
    this.list.items.splice(index, 1);
  };

  return {
    list,
    addItem,
    completeHandle,
    deleteItem,
    doubleCounter,
    othercounter,
  };
},
{
  persist: true
}
);
