<script setup lang="ts">
const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
</script>

<template>
  <div>
    <h1>Todo</h1>
    <TodosTodoForm @add-todo="addTodo" />
    <TodosTodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>
