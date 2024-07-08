<script setup lang='ts'>
const open = ref(false);
</script>

<template>
  <div class="relative">
    <div class="z-50 flex items-center justify-between w-full h-full p-4 lg:hidden ">
      <MoneyLogo />
      <Icon
        class="z-50 cursor-pointer left-2"
        size="30"
        name="iconamoon:menu-burger-horizontal"
        @click="open = true"
      />
      <div
        v-if="open"
        class="absolute top-0 left-0 z-[999] w-full h-full bg-white "
      >
        <Icon
          class="absolute z-50 cursor-pointer right-4 top-4"
          size="30"
          name="material-symbols:close"
          @click="open = false"
        />
        <SidebarMenu />
      </div>
    </div>
    <div class="hidden lg:flex w-[250px] h-screen flex-col justify-between border-r">
      <SidebarMenu />
      <div>UserItem</div>
    </div>
  </div>
</template>

<style>

</style>
