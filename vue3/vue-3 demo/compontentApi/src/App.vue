<template>
  <h1>2019 GDP Top 5</h1>
  <div class="container">
    <bar-1 :gdp="gdpRef" />
    <bar-2 :gdp="gdpRef" />
  </div>
  <div class="controls">
    <div class="item" v-for="item in gdpRef" :key="item.country" >
      <label>{{item.country}}</label>
      <input type="number" step="0.001" min="0" v-model="item.value" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Bar1 from "./components/Bar1.vue";
import Bar2 from "./components/Bar2.vue";
export default {
  components: {
    Bar1,
    Bar2
  },
  setup() {
    const gdpRef = ref([]);
    async function fetchGdp() {
      gdpRef.value = await fetch("/api/gdp.json").then((res) => res.json());
    }

    fetchGdp();

    return {
      gdpRef,
    };
  },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .controls {
    margin: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .item {
    margin: 1em;
  }
  .item label {
    margin: 0 1em;
  }
  .item input {
    height: 26px;
    font-size: 14px;
  }
  h1 {
    text-align: center;
  }
</style>