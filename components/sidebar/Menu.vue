<script setup lang='ts'>
const items = ref([
  { title: 'Overview', path: '/overview' },
  { title: 'Transactions', path: '/transactions' },
  { title: 'Account', path: '/account' },
  { title: 'Contacts', path: '/contacts' },
  { title: 'Settings', path: '/settings' },
]);
</script>

<template>
  <div>
    <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
      <MoneyLogo />
      <p class="font-bold ">
        Nuxt-Finance
      </p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
