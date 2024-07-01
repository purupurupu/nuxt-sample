<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import type { Todo } from '~/types/todo.interface';

defineProps<{
  todos: Todo[];
}>();

defineEmits<{
  (e: 'toggle-todo' | 'delete-todo', id: number): void;
}>();
</script>

<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="$emit('toggle-todo', todo.id)"
        @delete-todo="$emit('delete-todo', todo.id)"
      />
    </ul>
  </div>
</template>
