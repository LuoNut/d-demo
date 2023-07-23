import { ref } from "vue";
import { generateid } from "../utils/todoStorage";
/**
 * 新增任务
 */


export function useNewTodo(todosRef) {
  const newTodoRef = ref('')
  const addTodo = () => {
    const value = newTodoRef.value && newTodoRef.value.trim()
    if (!value) return

    const todo = {
      id: generateid(),
      title: value,
      completed: false,
    }

    todosRef.value.push(todo)
    newTodoRef.value = ''
  }
  return {
    newTodoRef,
    addTodo
  }
}