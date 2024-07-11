<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
          <TabsTrigger value="account">
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
      <!-- <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="w-[120px] h-[36px] bg-neutral-200"
        />
      </div>
      <section>
        <div class="w-full h-[360px] bg-neutral-200" />
      </section> -->
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
