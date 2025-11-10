<script setup lang="ts">
const props = defineProps({ rating: { type: Number, required: true }, showScore: { type: Boolean, required: true } });
</script>

<template>
  <div class="flex gap-1.5">
    <HomeStarIcon v-bind:filled="props.rating >= 1.0"></HomeStarIcon>
    <HomeStarIcon v-if="props.rating > 1.0" v-bind:filled="props.rating >= 2.0"></HomeStarIcon>
    <HomeStarIcon v-if="props.rating > 2.0" v-bind:filled="props.rating >= 3.0"></HomeStarIcon>
    <HomeStarIcon v-if="props.rating > 3.0" v-bind:filled="props.rating >= 4.0"></HomeStarIcon>
    <HomeStarIcon v-if="props.rating > 4.0" v-bind:filled="props.rating >= 5.0"></HomeStarIcon>
    <div v-if="props.showScore" class="pl-2 text-[16px] font-[Satoshi-Variable]">{{ `${props.rating} /` }}</div>
    <div v-if="props.showScore" class="text-[16px] font-[Satoshi-Variable] text-blk-op-60">5</div>
  </div>
</template>
