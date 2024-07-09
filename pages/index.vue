<script setup lang="ts">

</script>

<template>
  <div class="grid h-screen gap-8">
    <header class="flex items-start justify-between">
      <div>
        <p>Hi, Welcome!</p>
        <h1>Dashboard</h1>
      </div>
      <div class=" w-[120px] h-[36px] bg-neutral-200">
        aa
      </div>
    </header>
    <main class="grid gap-4">
      <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="w-[120px] h-[36px] bg-neutral-200"
        />
      </div>
      <section>
        <div class="w-full h-[360px] bg-neutral-200" />
      </section>
    </main>
    <footer>
      <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="w-full h-[260px] bg-neutral-200"
        />
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
