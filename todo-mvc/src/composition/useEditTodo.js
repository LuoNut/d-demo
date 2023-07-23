import { ref, computed } from "vue";

export default function userEditTodo(todosRef) {
  const editingTodoRef = ref(null)  //当前修改的是哪一个tudo
  let originTitle = ''
  const editTodo = (todo) => {
    originTitle = todo.title
    editingTodoRef.value = todo
  }
  const doneEdit = (todo) => {
    editingTodoRef.value = ''
    const title = todo.title.trim()
    if (title) {
      todo.title = title
    } else {
      //删除
      
      // todosRef.value.splice(todosRef.value.indexOf(todo), 1)

      const index = todosRef.value.indexOf(todo)
      if (index >= 0) {
        todosRef.value.splice(index, 1)
      }
    }
  }
  const cancelEdit = (todo) => {
    editingTodoRef.value = ''
    todo.title = originTitle
  }
  const setAllCompleted = (completed) => {
    todosRef.value.forEach(item => {
      item.completed = completed
  });
  }

  const allDoneRef = computed(() => {
    let val = todosRef.value.filter(item => !item.computed).length === 0
    return val
  })


  return {
    editingTodoRef,
    editTodo,
    doneEdit,
    cancelEdit,
    allDoneRef,
    setAllCompleted
  }
}