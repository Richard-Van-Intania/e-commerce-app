<script setup lang="ts"></script>

<template>
    <div class="z-10 fixed top-0 w-full"><TopBanner></TopBanner> <AppHeader></AppHeader></div>
    <AppBody><slot></slot></AppBody>
    <AppFooter></AppFooter>
</template>

<style scoped></style>
