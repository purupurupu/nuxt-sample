<script setup lang="ts">
const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
</script>

<template>
  <div class="wrapper">
    <!-- <h1>Todo</h1> -->
    <TodosTodoForm @add-todo="addTodo" />
    <TodosTodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;
  text-align: center;
}

.wrapper > * {
  margin-bottom: 20px;
}
</style>
