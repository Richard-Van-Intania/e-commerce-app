<script setup lang="ts">
const props = defineProps({ rating: { type: Number, required: true }, showScore: { type: Boolean, required: true } });
</script>

<template>
    <div class="flex gap-1.5">
        <Icon v-bind:name="props.rating >= 1.0 ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" size="24px" class="align-middle" />
        <Icon v-if="props.rating > 1.0" v-bind:name="props.rating >= 2.0 ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" size="24px" class="align-middle" />
        <Icon v-if="props.rating > 2.0" v-bind:name="props.rating >= 3.0 ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" size="24px" class="align-middle" />
        <Icon v-if="props.rating > 3.0" v-bind:name="props.rating >= 4.0 ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" size="24px" class="align-middle" />
        <Icon v-if="props.rating > 4.0" v-bind:name="props.rating >= 5.0 ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" size="24px" class="align-middle" />
        <div v-if="props.showScore" class="ps-2 text-[16px] font-[Satoshi-Variable]">{{ `${props.rating} /` }}</div>
        <div v-if="props.showScore" class="text-[16px] font-[Satoshi-Variable] text-blk-op-60">5</div>
    </div>
</template>
