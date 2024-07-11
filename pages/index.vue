<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const list = [{ title: 'today', component: '<div>today</div>' },
  { title: 'week', component: '<div>week</div>' },
  { title: 'month', component: '<div>month</div>' },
  { title: 'year', component: '<div>year</div>' }];
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, Welcome!</p>
        <h1>Dashboard</h1>
      </div>
      <div class=" w-[120px] h-[36px] bg-neutral-200" />
    </header>
    <main class="grid gap-4">
      <Tabs
        default-value="account"
        class="w-[400px]"
      >
        <TabsList>
          <TabsTrigger
            v-for="item, index in list"
            :key="index"
            :value="item.title"
          >
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="item, index in list"
          :key="index"
          :value="item.title"
        >
          {{ item.component }}
        </TabsContent>
      </Tabs>
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
