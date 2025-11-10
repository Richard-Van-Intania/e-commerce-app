<script setup lang="ts">
const props = defineProps({ label: { type: String, required: true } });
</script>

<template>
  <div class="text-[16px] font-[Satoshi-Variable] font-medium tracking-widest pb-7">{{ props.label }}</div>
</template>
