<script setup lang="ts">
// import TodoList from "~/components/todos/TodoList.vue";

const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
</script>

<template>
  <div>
    <h1>Todo</h1>
    <!-- <TodoForm @add-todo="addTodo" /> -->
    <TodosTodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>
