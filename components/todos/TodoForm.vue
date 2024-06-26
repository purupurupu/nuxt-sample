<script setup lang="ts">
const emit = defineEmits<{
  (e: "add-todo", title: string): void;
}>();

const newTodo = useState<string>("new-todo", () => "");

console.log("todoForm", newTodo);

const submitTodo = () => {
  if (newTodo.value) {
    emit("add-todo", newTodo.value.trim());
    newTodo.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="submitTodo">
    <input
      v-model="newTodo"
      class="todo-input"
      placeholder="please input todo"
    >
    <button type="submit">
      add
    </button>
  </form>
</template>

<style scoped>
.todo-input {
  color:black;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button{
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

button:hover{
  background-color: #6366c3;
}
</style>
