import { reactive, readonly, ref, computed } from "vue";

const state = reactive({
  firstName: "Xu Ming",
  lastName: "Deng",
});
const fullName = computed(() => {
  console.log("changed");
  return `${state.lastName}, ${state.firstName}`;
});
console.log("state ready"); // state ready
console.log("fullname is", fullName.value); // changed fullname is Deng,Xu Ming
console.log("fullname is", fullName.value); // fullname is Deng,Xu Ming
const imState = readonly(state);
console.log(imState === state); //false

const stateRef = ref(state); 
console.log(stateRef.value === state); //true

state.firstName = "Cheng";
state.lastName = "Ji";

console.log(imState.firstName, imState.lastName); //Cheng Ji
console.log("fullname is", fullName.value); // changed  fullname is Ji,Cheng
console.log("fullname is", fullName.value); //fullname is Ji,Cheng

const imState2 = readonly(stateRef);
console.log(imState2.value === stateRef.value); //false