import { ref, reactive, watch } from "vue";

const state = reactive({a: 1, b: 2})
const count = ref(0)

//watch监测proxy数据
// watch(() => state.a, (newValue, oldValue) => {
//   console.log('新', newValue, '旧', oldValue);
// } )

//watch监测ref object数据
// watch(count, (newValue, oldValue) => {
//     console.log('新', newValue, '旧', oldValue);
//   } )

//watch监测多个数据
watch([() => state.a, count], ([newValue1, newValue2], [oldValue1, oldValue2]) => {
    console.log('新', newValue1, newValue2, '旧', oldValue1, oldValue2);
  } )

state.a++
count.value++
