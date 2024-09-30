<script setup lang="ts">
import { computed } from 'vue';
import { useModuleStore } from '@/stores/module.store';

const moduleStore = useModuleStore();
const modulePick = computed(() => moduleStore.modulePick);

</script>

<template>
  <nav>
    <ol class="breadcrumb">
      <li v-if="modulePick.moduleName" class="breadcrumb-item" :class="{active: modulePick.section}">
        <a v-if="modulePick.section" href="#" @click="moduleStore.setModulePick('', 'moduleName')">{{ modulePick.moduleName }}</a>
        <span v-else>{{ modulePick.moduleName }}</span>
      </li>
      <li v-if="modulePick.section" class="breadcrumb-item" :class="{active: modulePick.subSection}">
        <a v-if="modulePick.subSection" href="#" @click="moduleStore.setModulePick('', 'section')">{{ modulePick.section }}</a>
        <span v-else>{{ modulePick.section }}</span>
      </li>
      <li v-if="modulePick.subSection" class="breadcrumb-item" :class="{active: modulePick.subSection}">
        <a v-if="modulePick.questionGroup" href="#"@click="moduleStore.setModulePick('', 'subSection')">{{ modulePick.subSection }}</a>
        <span v-else>{{ modulePick.subSection }}</span>
      </li>
      <li v-if="modulePick.questionGroup" class="breadcrumb-item active">
        <a href="#" @click="moduleStore.setModulePick('', 'questionGroup')">{{ modulePick.questionGroup }}</a>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
nav {
  margin-top: 1rem;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: 4px;
}

.breadcrumb-item+.breadcrumb-item::before {
  float: left;
  padding-right: 4px;
  color: #888;
  content: "/";
}

.breadcrumb-item.active {
  color: #888;
}
</style>