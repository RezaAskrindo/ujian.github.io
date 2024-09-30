import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { DataQuestion, ModuleInterface } from '@/interfaces/module.interface'

import mockDataQuestions from '../json/mockDataQuestions.json'
import mockDataOptions from '../json/mockDataOptions.json'


const groupAlgorithms = (data: any[], groupBy: string) => {
  return data.reduce((acc, obj) => {
    (acc[obj[groupBy]] = acc[obj[groupBy]] || []).push(obj);
    return acc;
  }, {});
}

export const useModuleStore = defineStore('module', () => {
  const modulePick: ModuleInterface = reactive({
    moduleName: "",
    section: "",
    subSection: "",
    questionGroup: "",
  });
  const moduleDataQuestions= ref<DataQuestion[]>([]);
  const moduleListData = reactive({
    moduleNameList: computed(() => Object.keys(groupAlgorithms(moduleDataQuestions.value, "moduleName"))),
    sectionList: computed(() => {
      const filterByMoudule = moduleDataQuestions.value.filter(el => el.moduleName === modulePick.moduleName);
      const result = filterByMoudule.length > 0 ? filterByMoudule : moduleDataQuestions.value;
      return Object.keys(groupAlgorithms(result, "section"));
    }),
    subSectionList: computed(() => {
      const filterByMouduleSection = moduleDataQuestions.value.filter(el => el.moduleName === modulePick.moduleName && el.section === modulePick.section);
      const result = filterByMouduleSection.length > 0 ? filterByMouduleSection : moduleDataQuestions.value;
      return Object.keys(groupAlgorithms(result, "subSection"));
    }),
    questionGroupList: computed(() => {
      const filterByMouduleSectionQuestion = moduleDataQuestions.value.filter(el => el.moduleName === modulePick.moduleName && el.section === modulePick.section && el.questionGroup === modulePick.questionGroup);
      const result = filterByMouduleSectionQuestion.length > 0 ? filterByMouduleSectionQuestion : moduleDataQuestions.value;
      return Object.keys(groupAlgorithms(result, "questionGroup"));
    }),
  });
  // const modulePickData = computed(() => ));
  
  const initModuleDataStore = () => {
    if (moduleDataQuestions.value.length === 0) {
      mockDataQuestions.map((el) => {
        if (el.typeQuestion === "multiple") {
          const findOptions = mockDataOptions.filter(elem => elem.optionId === el.optionId);
          if (findOptions.length) {
            el.options = findOptions;
          }
          return el;
        } else return el;
      })
      moduleDataQuestions.value = mockDataQuestions;
    }
  }

  const setModulePick = (set:string, type: string) => {
    if (type === "questionGroup") {
      modulePick.questionGroup = set;
    } else if (type === "subSection") {
      modulePick.subSection = set;
    } else if (type === "section") {
      modulePick.section = set;
    } else {
      modulePick.moduleName = set;
    }
  }

  return { 
    modulePick, setModulePick,
    moduleDataQuestions, initModuleDataStore,
    moduleListData
    // modulePickData
  }
})
