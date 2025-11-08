<script setup lang="ts"></script>

<template>
    <div class="my-background-div">
        <div class="grid grid-cols-2 h-[663px]">
            <div class="bg-amber-400 flex flex-col pl-20 pt-20">
                <div class="text-[64px] font-[integralcf-bold] leading-none">
                    <div>FIND CLOTHES</div>
                    <div>THAT MATCHES</div>
                    <div>YOUR STYLE</div>
                </div>
                <div class="pt-10 pb-10 text-[16px] font-[Satoshi-Variable] text-blk-op-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                <div><button type="button" class="h-[52px] w-[210px] rounded-full bg-black text-[16px] font-[Satoshi-Variable] font-medium text-white cursor-pointer" v-on:click="onClick()">Shop Now</button></div>
            </div>
            <div>2</div>
        </div>
    </div>
    <div class="h-[122px] bg-black">v</div>
</template>

<style scoped>
.my-background-div {
    background-image: url("~/assets/images/Rectangle 2.png");
    background-size: cover;
    background-position: center;
}
</style>
