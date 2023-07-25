import { readonly, reactive } from "vue";

function useDeBounce(obj, duration) {
  const valueOrigin = reactive(obj)
  const Value = readonly(valueOrigin)

  let timer = null
  const setValue = (newValue) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      console.log('开始改变');
      Object.entries(newValue).forEach(([k, v]) => {
        valueOrigin[k] = v
      })
    }, duration);
  }

  return {
    Value,
    setValue
  }
}

let {Value, setValue} = useDeBounce({a: 1, b: 2}, 5000)
window.Value = Value
window.setValue = setValue