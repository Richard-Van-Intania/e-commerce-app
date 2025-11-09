<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
});

const emit = defineEmits<{
    (e: "handle-click"): void;
}>();
</script>

<template>
    <button type="button" class="cursor-pointer" v-on:click="emit('handle-click')">
        <Icon v-bind:name="props.label" size="32px" class="align-middle" />
    </button>
</template>
