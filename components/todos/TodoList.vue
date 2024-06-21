<script setup lang="ts">
const todos = [
  { id: 1, text: "Learn Vue 3" },
  { id: 2, text: "Learn TypeScript" },
  { id: 3, text: "Learn Vite" },
];
</script>

<template>
  <div>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
