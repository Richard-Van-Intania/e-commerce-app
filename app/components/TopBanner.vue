<script setup lang="ts">
import { useBanner } from "~/composables";
const banner = useBanner();
</script>

<template>
  <div class="h-[38px] max-sm:h-14 bg-black flex items-center justify-between">
    <div class="w-[120px]"></div>
    <div class="text-sm text-white font-[Satoshi-Variable] text-center">
      <span>Sign up and get 20% off to your first order.</span>
      <NuxtLink class="underline pl-2" to="/">Sign Up Now</NuxtLink>
    </div>
    <div class="w-[120px]">
      <button type="button" class="cursor-pointer max-sm:hidden" v-on:click="banner = false">
        <Icon name="ri:close-large-line" style="color: white" class="align-middle" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
