<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useModuleStore } from './stores/module.store';

import HelloWorld from './components/HelloWorld.vue';
import NavItem from './components/NavItem.vue';

import ListModule from './components/ListViews/ListModule.vue';
import ListSection from './components/ListViews/ListSection.vue';
import ListSubSection from './components/ListViews/ListSubSection.vue';
import ListQuestionGroupSubSection from './components/ListViews/ListQuestionGroup.vue';

import NotFound from './components/NotFound.vue';

const moduleStore = useModuleStore();
const modulePick = computed(() => moduleStore.modulePick);

const routes: any = {
  '/': ListModule,
  '/section': ListSection,
  '/sub-section': ListSubSection,
  '/question-group': ListQuestionGroupSubSection,
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

onMounted(() =>{
  moduleStore.initModuleDataStore();
  if (!modulePick.value.moduleName) {
    window.location.hash = '';
    currentPath.value = '/';
  }

  const w = window as any;
  const google = w?.google;
  if (google) {
    google?.accounts?.oauth2.initTokenClient({
      client_id: '312134406993-gohg72bsuqlinaghh7d2gsv234pdi2d8.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
      callback: '',
      hd: 'askrindo.co.id'
    })
  }
  console.log(google)
  const gapi = w?.gapi;
  console.log(gapi)
})
</script>

<template>
  <header>
    <div v-if="currentPath === '#/' || currentPath === '/' || currentPath === ''" class="wrapper">
      <HelloWorld title="IELTS Test" sub-title="Prepare yourself" />
    </div>
    <NavItem v-else :current-path="currentPath" />
  </header>

  <main>
    <component :is="currentView" />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
