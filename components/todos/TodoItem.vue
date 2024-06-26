<script setup lang="ts">
import type { Todo } from "~/types/todo.interface";

defineProps<{
  todo: Todo;
}>();

defineEmits<{
  (e: "toggle-todo" | "delete-todo"): void;
}>();
</script>

<template>
  <li class="todo-item">
    <input
      class="todo-checkbox"
      type="checkbox"
      :checked="todo.completed"
      @change="$emit('toggle-todo')"
    >
    <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
    <button
      class="delete-button"
      @click="$emit('delete-todo')"
    >
      削除
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin: 10px;
}

.todo-checkbox {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
  color: #999;
}

span {
  margin-right: 10px;
}

.delete-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
