//深拷贝
function deepClone(obj) {
  // 如果传入的参数不是对象，则直接返回该参数
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 根据传入的参数是数组还是对象来初始化新的变量
  const newObj = Array.isArray(obj) ? [] : {};
  // 递归遍历原始对象并复制属性和值到新对象中
  for (const key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  // 返回新对象
  return newObj;
}


export function myPiniaFlugin1() {
  return { secret: "the cake in lie" };
}


export function myPiniaFlugin2(count) {
  const { store } = count;
  
    store.text = 'this is text'
}

//为特定仓库添加属性
export function myPiniaFlugin3({store}) {
  if (store.$id === 'counter') {
    return {
      name: 'my name is pinia'
    }
  }
}

export function myPiniaFlugin4({store}) {
  const state = deepClone(store.$state)
  
  store.reset = () => {
    store.$patch(deepClone(state))
  }
}
