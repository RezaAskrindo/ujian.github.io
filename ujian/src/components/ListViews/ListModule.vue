<script setup lang="ts">
import { computed } from 'vue';
import { useModuleStore } from '../../stores/module.store';

import CardItem from '../CardItem.vue';

const moduleStore = useModuleStore();
const moduleListData = computed(() => moduleStore.moduleListData);

</script>

<template>
  <ol>
    <li v-for="item in moduleListData.moduleNameList" :key="item">
      <a href="#/section" @click="moduleStore.setModulePick(item, 'moduleName')">
        <CardItem :title="item" />
      </a>
    </li>
  </ol>
</template>