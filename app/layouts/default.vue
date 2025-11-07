<script setup lang="ts">
import { useBanner } from "~/composables";
const banner = useBanner();
</script>

<template>
    <div class="z-10 fixed top-0 left-0 right-0 w-full"><TopBanner v-if="banner"></TopBanner> <AppHeader></AppHeader></div>
    <AppBody><slot></slot></AppBody>
    <AppFooter></AppFooter>
</template>

<style scoped></style>
