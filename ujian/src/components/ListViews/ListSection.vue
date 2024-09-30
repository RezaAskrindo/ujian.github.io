<script setup lang="ts">
import { computed } from 'vue';
import { useModuleStore } from '../../stores/module.store';

import CardItem from '../CardItem.vue';

const moduleStore = useModuleStore();
const moduleListData = computed(() => moduleStore.moduleListData);

</script>

<template>
  <ol>
    <li v-for="item in moduleListData.sectionList" :key="item">
      <a href="#/sub-section" @click="moduleStore.setModulePick(item, 'section')">
        <CardItem :title="item" />
      </a>
    </li>
  </ol>
</template>

<style scoped>
</style>