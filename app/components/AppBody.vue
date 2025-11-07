<script setup lang="ts">
import { useBanner } from "~/composables";
const banner = useBanner();
</script>

<template>
    <div v-if="banner" class="h-[38px]"></div>
    <div class="h-24"></div>
    <div class="h-0.5"></div>
    <slot></slot>
</template>
