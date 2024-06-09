<!-- if cancel theme default -->
<script setup lang="ts">
// definePageMeta({
//   layout: "false",
// });
const {sayGoodbye} = userUtils()
sayGoodbye()
</script>

<template>
  <div>
    <AlertBlock />
  </div>
</template>
