<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  source: { type: String, required: true },
});
const { data, error, status } = await useFetch<ItemData[]>(props.source);
const viewAll = useState<boolean>(uuidv4(), () => false);
const filteredItemData = computed<ItemData[]>(() => {
  if (data.value) {
    if (!viewAll.value) {
      const list: ItemData[] = [];
      for (let i = 0; i < data.value.length; i++) {
        if (i < 4) {
          list.push(data.value[i]!);
        }
      }
      return list;
    } else {
      return data.value;
    }
  } else {
    return [];
  }
});
</script>

<template>
  <HomeBigBanner v-bind:label="props.label"></HomeBigBanner>
  <div v-if="status === 'success'">
    <div class="flex gap-x-5 gap-y-14 flex-wrap"><HomeItemCard v-for="(item, index) in filteredItemData" v-bind:item="item" v-bind:key="index" v-on:handle-click="onClick(item.label)"></HomeItemCard></div>
  </div>
  <div v-else-if="status === 'pending' || status === 'idle'">
    <div class="h-40 flex justify-center items-center"><Icon name="ri:loader-line" size="48px" class="align-middle" /></div>
  </div>
  <div v-else-if="status === 'error' || error">
    <div class="h-40 flex justify-center items-center"><Icon name="ri:error-warning-line" size="48px" class="align-middle" /></div>
  </div>
  <div class="h-10"></div>
  <div v-if="!viewAll" class="flex justify-center items-center">
    <button type="button" class="w-[218px] bg-white h-[52px] rounded-full text-[16px] font-[Satoshi-Variable] font-medium cursor-pointer border border-blk-op-10" v-on:click="viewAll = true">View All</button>
  </div>
</template>

<style scoped></style>
