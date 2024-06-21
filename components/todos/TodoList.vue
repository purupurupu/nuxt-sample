<script setup lang="ts">
import TodoItem from "./TodoItem.vue";

const todos = [
  { id: 1, title: "Learn Vue 3", completed: false },
  { id: 2, title: "Learn TypeScript", completed: false },
  { id: 3, title: "Learn Vite", completed: false },
];
</script>

<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>
