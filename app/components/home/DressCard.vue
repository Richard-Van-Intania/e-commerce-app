<script setup lang="ts">
const props = defineProps({
  source: { type: String, required: true },
});
const emit = defineEmits<{
  (e: "handle-click"): void;
}>();
</script>

<template>
  <NuxtImg v-bind:src="props.source" class="rounded-1xl h-[298px] object-cover cursor-pointer" v-on:click="emit('handle-click')" />
</template>

<style scoped></style>
