<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
});
</script>

<template>
  <div class="text-[48px] font-[integralcf-bold] text-center pt-12 pb-10">{{ props.label }}</div>
</template>
