<script></script>

<template>
  <div>
    <input
      v-model="newTodo"
      type="text"
      placeholder="Add a new todo"
      @keyup.enter="addTodo"
    >
  </div>
</template>
