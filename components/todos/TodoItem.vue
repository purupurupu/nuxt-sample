<script setup lang="ts">
import type { Todo } from "@/types/todo.interface";

const props = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <div>
    <li>
      <input type="checkbox">
      <span> {{ props.todo.title }}</span>
    </li>
  </div>
</template>
