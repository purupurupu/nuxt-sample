<!-- pages/index.vue -->
<script setup lang="ts">
const { color, setColor } = useColor();

const colorChange = () => {
  setColor("red");
};
</script>

<template>
  <div>
    <span class="state-color"> state color: {{ color }}</span>
    <button @click="colorChange">
      change to red
    </button>
  </div>
</template>

<style scoped>
.state-color {
  color: v-bind(color)
}
</style>
