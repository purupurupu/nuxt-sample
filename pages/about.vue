<!-- pages/about.vue -->
<script setup lang="ts">
// const { color } = useColor();
const color = useState('color');
</script>

<template>
  <div>
    <h2>About</h2>
    <p class="state-color">
      about page! state color: {{ color }}
    </p>
  </div>
</template>

<style scoped>
h2 {
  color: blue;
}
.state-color {
  color: v-bind(color)
}
</style>
