<script setup lang="ts">
const props = defineProps({
  source: { type: String, required: true },
});
</script>

<template><NuxtImg v-bind:src="props.source" height="48" /></template>
