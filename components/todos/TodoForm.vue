<script setup lang="ts">

</script>

<template>
  <div>
    <input
      v-model="newTodo"
      class="todo-input"
      type="text"
      placeholder="Add a new todo"
      @keyup.enter="addTodo"
    >
  </div>
</template>

<style scoped>
.todo-input {
  color:black;
  padding: 1px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
