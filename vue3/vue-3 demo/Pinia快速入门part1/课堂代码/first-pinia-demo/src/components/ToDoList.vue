<template>
  <div class="container">
    <div class="input-container">
        <p class="numInput">自己仓库的Getter数据：{{ list.counter }}</p>
        <button class="ten" @click="list.counter++">+</button>
    </div>
    <div class="input-container">
        <p class="numInput">其它仓库的Getter数据：{{ othercounter }}</p>
    </div>
    <!-- 添加代办事项 -->
    <div class="input-Container">
      <input type="text" class="numInput" v-model="newItemRef" />
      <button class="btn" @click="addHandle">添加</button>
    </div>
    <!-- 代办事项列表 -->
    <div class="list">
      <div class="item" v-for="(item, index) in list.items" :key="item.text">
        <div :class="{ del: item.isCompleted }" @click="completeHandle(index)">
          {{ item.text }}
        </div>
        <div class="close" @click="deleteHandle(index)">X</div>
      </div>
    </div>
    <div class="input-Container">
      <button class="btn" @click="store.reset()">还原</button>
    </div>
  </div>
</template>

<script setup>
import { useListStore } from "../store/useListStore.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useListStore();
//检测插件添加上去的全局属性是否已经添加上去了
console.log('todoList',store.secret);
console.log('todoList',store.text);
console.log('todoList',store.name);
const { list, doubleCounter, othercounter } = storeToRefs(store);
const { addItem, completeHandle, deleteItem } = store;

const newItemRef = ref("");
const addHandle = function () {
  if (newItemRef.value) {
    addItem(newItemRef.value);
    newItemRef.value = "";
  } else {
    window.alert("请输入内容");
  }
};

const deleteHandle = function(index) {
    if (window.confirm(`
        是否要删除代办事项：\n
        ${list.value.items[index].text} \n
        完成状态： ${list.value.items[index].isCompleted ? "以完成" : "未完成"}
    `)) {
        deleteItem(index)
    }
}
</script>

<style scoped>
.container {
  width: 300px;
  /* outline: 1px solid blue; */
  margin: 20px auto;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* outline: 1px solid; */
}
.numInput {
  width: 75%;
  height: 30px;
}
.btn {
  width: 20%;
  cursor: pointer;
}
.list {
  margin-top: 20px;
}
.item {
  /* outline: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.close {
  width: 20px;
  height: 20px;
  /* border: 1px solid; */
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  background-color: rgb(243, 83, 83);
  color: #fff;
  font-weight: 400;
  cursor: pointer;
}

.del {
  text-decoration: line-through;
}
</style>
