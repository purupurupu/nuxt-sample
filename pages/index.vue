<!-- if cancel theme default -->
<script setup lang="ts">
// definePageMeta({
//   layout: "false",
// });
const { sayGoodbye } = userUtils();
const { $sayHello } = useNuxtApp();
sayGoodbye();
$sayHello("plugin test");
</script>

<template>
  <div>
    <AlertBlock />
    <span />
  </div>
</template>
