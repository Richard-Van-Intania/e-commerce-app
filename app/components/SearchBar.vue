<script setup lang="ts">
const model = defineModel<string>();

function handleEnterKey() {
    alert(model.value);
}
</script>

<template>
    <div class="flex items-center">
        <div class="relative w-full">
            <Icon name="ri:search-line" size="24px" class="absolute left-5 h-12 bg-blk-op-40" />
            <input
                v-model="model"
                type="text"
                placeholder="Search for products..."
                class="w-full bg-search-grey h-12 rounded-full pl-14 pr-8 focus:outline-none placeholder:text-blk-op-40 placeholder:text-[16px] placeholder:font-[Satoshi-Variable] text-[18px] font-[Satoshi-Variable]"
                v-on:keyup.enter="handleEnterKey()"
            />
        </div>
    </div>
</template>

<style scoped></style>
