<template>
  <div id="app">
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus=""
        autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodoRef"
        @keyup.enter="addTodo"
      />
    </header>
    <section class="main" v-show="todosRef.length !== 0">
      <input 
        :checked="allDoneRef"
        @input="$event => setAllCompleted($event.target.checked)"
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox" 
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li class="todo" :class="{
          completed: todo.completed,
          editing: todo === editingTodoRef
          }" v-for="todo in filteredTodosRef" :key="todo.id">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)" >{{ todo.title }}</label>
            <button @click="remove(todo)" class="destroy"></button>
          </div>
          <input 
            v-model="todo.title" 
            class="edit" 
            type="text" 
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todosRef.length !== 0" >
      <span class="todo-count">
        <strong>{{ remainingRef }}</strong>
        <span>item{{ remainingRef === 1 ? '' : 's'}} left</span>
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{selected: visibilityRef == 'all'}">All</a></li>
        <li><a href="#/active" :class="{selected: visibilityRef == 'active'}">Active</a></li>
        <li><a href="#/completed" :class="{selected: visibilityRef == 'completed'}">Completed</a></li>
      </ul>
      <button @click="removeCompleted" class="clear-completed" v-show="compeltedRef.length > 0" style="display: none">
        Clear completed
      </button>
    </footer>
  </section>
</div>
</template>

<script>
import useTodoList from "./composition/useToList";
import { useNewTodo } from "./composition/useNewTodo";
import useFliter from "./composition/useFliter";
import  userEditTodo  from "./composition/useEditTodo";
import useRemoveTodo from "./composition/useRemoveTodo";

export default {
  setup() {
    const {todosRef} = useTodoList()
    return {
      todosRef,
      ...useNewTodo(todosRef),
      ...useFliter(todosRef),
      ...userEditTodo(todosRef),
      ...useRemoveTodo(todosRef) 
    }
  }
}
</script>
