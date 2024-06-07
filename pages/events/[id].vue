<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    event id :{{ id }}
  </div>
</template>
