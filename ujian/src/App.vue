<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useModuleStore } from './stores/module.store';

import HelloWorld from './components/HelloWorld.vue';
import ModuleItem from './components/ModuleItem.vue';
import NavItem from './components/NavItem.vue';

const moduleStore = useModuleStore();
const modulePick = computed(() => moduleStore.modulePick);
const moduleListData = computed(() => moduleStore.moduleListData);

onMounted(() =>{
  moduleStore.initModuleDataStore();
})
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld title="IELTS Test" sub-title="Prepare yourself" />
    </div>
    <NavItem />
  </header>

  <main v-if="modulePick.questionGroup">
    <ModuleItem v-for="item in moduleListData.moduleNameList" :title="item" @on-click="moduleStore.setModulePick(item, 'moduleName')" />
  </main>
  <main v-else-if="modulePick.subSection">
    <ModuleItem v-for="item in moduleListData.questionGroupList" :title="item" @on-click="moduleStore.setModulePick(item, 'questionGroup')" />
  </main>
  <main v-else-if="modulePick.section">
    <ModuleItem v-for="item in moduleListData.subSectionList" :title="item" @on-click="moduleStore.setModulePick(item, 'subSection')" />
  </main>
  <main v-else-if="modulePick.moduleName">
    <ModuleItem v-for="item in moduleListData.sectionList" :title="item" @on-click="moduleStore.setModulePick(item, 'section')" />
  </main>
  <main v-else>
    <ModuleItem v-for="item in moduleListData.moduleNameList" :title="item" @on-click="moduleStore.setModulePick(item, 'moduleName')" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
