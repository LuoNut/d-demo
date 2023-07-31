import { reactive, watchEffect, watch, ref, computed } from "vue";
const state = reactive({
  count: 0,
});
watchEffect(() => {
  console.log("watchEffect", state.count); // watchEffect 0
});
watch(
  () => state.count,
  (count, oldCount) => {
    console.log("watch", count, oldCount);
  }
);
console.log("start"); //start
setTimeout(() => {
  console.log("time out"); // time out
  state.count++;
  state.count++;
});
state.count++;   
state.count++; // watchEffect 2 watch 0 2

console.log("end");  //end

// watchEffect 0
// start
// end
// watchEffect 2 watch 2 0
// time out
// watchEffect 4 watch 4 2
