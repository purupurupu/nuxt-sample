<script setup lang="ts">
import type { Todo } from "~/types/todo.interface";

defineProps<{
  todo: Todo;
}>();

defineEmits<{
  (e: "toggle-todo" | "delete-todo"): void;
}>();

const newTodo = useState<string>("new-todo");

console.log("todoItem", newTodo);

const addTodo = () => {
  if (newTodo.value) {
    newTodo.value = newTodo.value + "!";
  }
};
</script>

<template>
  <li>
    {{ newTodo }}
    <button @click="addTodo">
      add
    </button>
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="$emit('toggle-todo')"
    >
    <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
    <button @click="$emit('delete-todo')">
      削除
    </button>
  </li>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
