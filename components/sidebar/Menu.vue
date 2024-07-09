<script setup lang='ts'>
const items = ref([
  { title: 'Overview', path: '/overview', icon: 'ri:dashboard-line' },
  { title: 'Transactions', path: '/transactions', icon: 'ri:bank-line' },
  { title: 'Account', path: '/account', icon: 'ri:account-circle-line' },
  { title: 'Contacts', path: '/contacts', icon: 'ri:contacts-line' },
  { title: 'Settings', path: '/settings', icon: 'ri:settings-3-line' },
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
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :href="item.path"
          class="flex items-center px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <Icon
            size="20"
            :name="item.icon ?? ''"
            class="mr-2"
          />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
