const LOCAL_KEY = "todomvc";

/**
 * 生成一个随机编号 时间戳 + 4为随机数
 */
export function generateid() {
  return Date.now() + Math.random().toString(16).substr(2, 4);
}

/**
 * 获取目前所有任务
 */
export function feach() {
  const result = localStorage.getItem(LOCAL_KEY);
  if (result) {
    return JSON.parse(result);
  }

  return [];
}

export function save(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function filter(todos, visibility = "all") {
  if (visibility === "all") {
    return todos
  } else if (visibility === 'active') {
    return todos.filter(item => !item.completed)
  } else if (visibility === 'completed') {
    return todos.filter(item => item.completed)
  }
  throw new Error('invalid visibility valuex')
}
