<script setup lang="ts">
const model = defineModel<string>();

function handleEnterKey() {
    alert(model.value);
}
</script>

<template>
    <div class="h-[100px]"></div>
    <div class="relative">
        <div class="absolute left-0 -top-[98px] right-0 px-20">
            <div class="h-[200px] bg-black rounded-3xl px-12 py-10 flex items-center">
                <div class="text-white text-[40px] font-[integralcf-bold] flex-1">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
                <div class="flex flex-col w-[480px]">
                    <div class="relative">
                        <Icon name="ri:mail-add-line" size="24px" class="absolute left-5 h-12 bg-blk-op-40" />
                        <input
                            type="text"
                            v-model="model"
                            placeholder="Enter your email address"
                            class="w-full bg-white h-12 rounded-full pl-14 pr-8 focus:outline-none placeholder:text-blk-op-40 placeholder:text-[16px] placeholder:font-[Satoshi-Variable] text-[18px] font-[Satoshi-Variable]"
                            v-on:keyup.enter="handleEnterKey()"
                        />
                    </div>
                    <div class="h-4"></div>
                    <div>
                        <button type="button" class="w-full bg-white h-12 rounded-full text-[16px] font-[Satoshi-Variable] font-medium cursor-pointer" v-on:click="handleEnterKey()">Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[504px] bg-search-grey pt-36 pb-32 px-20">foot bot</div>
    </div>
</template>

<style scoped></style>
