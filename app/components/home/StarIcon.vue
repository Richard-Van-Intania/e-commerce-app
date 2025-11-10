<script setup lang="ts">
const props = defineProps({ filled: { type: Boolean, required: true } });
</script>
<template>
  <Icon v-bind:name="props.filled ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" size="20px" class="align-middle" />
</template>
