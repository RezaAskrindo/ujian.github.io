<script setup lang="ts">
import { computed } from 'vue';
import { useModuleStore } from '@/stores/module.store';

const props = defineProps<{
  currentPath: string
}>()

const moduleStore = useModuleStore();
const modulePick = computed(() => moduleStore.modulePick);

const listBreadcrumb = computed(() => {
  const currentPath = props.currentPath.replace("#", "");
  if (currentPath === "/section") {
    return [
      { path: "/", label: modulePick.value.moduleName },
      { path: null, label: "Section" }
    ];
  } else if (currentPath === "/sub-section") {
    return [
      { path: "/", label: modulePick.value.moduleName },
      { path: "/section", label: modulePick.value.section },
      { path: null, label: "Sub Section" }
    ];
  } else if (currentPath === "/question-group") {
    return [
      { path: "/", label: modulePick.value.moduleName },
      { path: "/section", label: modulePick.value.section },
      { path: "/sub-section", label: modulePick.value.subSection },
      { path: null, label: "Question Group" }
    ];
  } else {
    return []
  }

})
</script>

<template>
  <nav>
    <ol class="breadcrumb">
      <li v-for="list in listBreadcrumb" :key="list.label" class="breadcrumb-item">
        <a v-if="list.path" :href="`#${list.path}`">{{ list.label }}</a>
        <span v-else>{{ list.label }}</span>
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