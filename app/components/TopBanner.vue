<script setup lang="ts">
function close() {}
</script>

<template>
  <div class="h-[38px] bg-black flex items-center justify-between">
    <div class="w-[120px]"></div>
    <div class="text-sm text-white font-[Satoshi-Variable]">
      <span>Sign up and get 20% off to your first order.</span>
      <NuxtLink class="underline pl-2" to="/">Sign Up Now</NuxtLink>
    </div>
    <div class="w-[120px]">
      <button type="button" class="cursor-pointer" v-on:click="close()"><Icon name="ri:close-large-line" style="color: white" /></button>
    </div>
  </div>
</template>

<style scoped></style>
