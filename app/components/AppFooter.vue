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
        <div class="bg-search-grey pt-36 pb-12 px-20">
            <div class="flex justify-between">
                <div class="flex flex-col max-w-[320px]">
                    <div class="text-[32px] font-[integralcf-bold] leading-none">SHOP.CO</div>
                    <div class="text-[14px] font-[Satoshi-Variable] text-blk-op-60 py-10">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
                    <div class="flex gap-8">
                        <FootersIconButton label="ri:twitter-fill" v-on:handle-click="onClick()"></FootersIconButton>
                        <FootersIconButton label="ri:facebook-circle-fill" v-on:handle-click="onClick()"></FootersIconButton>
                        <FootersIconButton label="ri:instagram-fill" v-on:handle-click="onClick()"></FootersIconButton>
                        <FootersIconButton label="ri:github-fill" v-on:handle-click="onClick()"></FootersIconButton>
                    </div>
                </div>
                <div class="flex flex-col">
                    <FootersSectionBanner label="COMPANY"></FootersSectionBanner>
                    <FootersTextButton label="About" destination="/"></FootersTextButton>
                    <FootersTextButton label="Features" destination="/"></FootersTextButton>
                    <FootersTextButton label="Works" destination="/"></FootersTextButton>
                    <FootersTextButton label="Career" destination="/"></FootersTextButton>
                </div>
                <div class="flex flex-col">
                    <FootersSectionBanner label="HELP"></FootersSectionBanner>
                    <FootersTextButton label="Customer Support" destination="/"></FootersTextButton>
                    <FootersTextButton label="Delivery Details" destination="/"></FootersTextButton>
                    <FootersTextButton label="Terms & Conditions" destination="/"></FootersTextButton>
                    <FootersTextButton label="Privacy Policy" destination="/"></FootersTextButton>
                </div>
                <div class="flex flex-col">
                    <FootersSectionBanner label="FAQ"></FootersSectionBanner>
                    <FootersTextButton label="Account" destination="/"></FootersTextButton>
                    <FootersTextButton label="Manage Deliveries" destination="/"></FootersTextButton>
                    <FootersTextButton label="Orders" destination="/"></FootersTextButton>
                    <FootersTextButton label="Payments" destination="/"></FootersTextButton>
                </div>
                <div class="flex flex-col">
                    <FootersSectionBanner label="RESOURCES"></FootersSectionBanner>
                    <FootersTextButton label="Free eBooks" destination="/"></FootersTextButton>
                    <FootersTextButton label="Development Tutorial" destination="/"></FootersTextButton>
                    <FootersTextButton label="How to - Blog" destination="/"></FootersTextButton>
                    <FootersTextButton label="Youtube Playlist" destination="/"></FootersTextButton>
                </div>
            </div>
            <div class="h-px bg-blk-op-10 my-8"></div>
            <div class="flex">
                <div class="flex-1 text-[14px] font-[Satoshi-Variable] text-blk-op-60">Shop.co © 2000-2023, All Rights Reserved</div>
                <FootersPayment source="/payments/visa.png"></FootersPayment>
                <FootersPayment source="/payments/maset.png"></FootersPayment>
                <FootersPayment source="/payments/payp.png"></FootersPayment>
                <FootersPayment source="/payments/apple.png"></FootersPayment>
                <FootersPayment source="/payments/gplay.png"></FootersPayment>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
