// 定义 pinia
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
// 导出 pinia 实例
export const useMainStore = defineStore('main', () => {
  // state: () => {
  //   const styleModule = ref('AOM');
  //   return {
  //     showMenuType: false,
  //     webMode: 'light',
  //     leftMenuShow: true,
  //     styleModule,
  //   };
  // },

  // 定义 state
  const leftMenuShow = ref(false);

  // 定义 getters
  const getLeftMenuShow = computed(() => leftMenuShow.value);

  // 定义 actions
  function toggleLeftMenuShow() {
    leftMenuShow.value = !leftMenuShow.value;
  }

  return {
    leftMenuShow,
    getLeftMenuShow,
    toggleLeftMenuShow,
  };
});
