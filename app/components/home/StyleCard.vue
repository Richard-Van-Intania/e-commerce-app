<script setup lang="ts"></script>

<template>
  <div class="bg-search-grey rounded-3xl">
    <div>
      <div class="text-[48px] font-[integralcf-bold] text-center pt-12 pb-10">BROWSE BY DRESS STYLE</div>
      <div class="flex flex-wrap justify-center px-10 pb-10 gap-4">
        <HomeDressCard source="/dress/Frame 61.png" v-on:handle-click="onClick('sss')"></HomeDressCard>
        <HomeDressCard source="/dress/Frame 62.png" v-on:handle-click="onClick('sss')"></HomeDressCard>
        <HomeDressCard source="/dress/Frame 64.png" v-on:handle-click="onClick('sss')"></HomeDressCard>
        <HomeDressCard source="/dress/Frame 63.png" v-on:handle-click="onClick('sss')"></HomeDressCard>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
