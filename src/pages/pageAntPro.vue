<!--
* @description  参数1
* @fileName  pageAntPro
* @author userName
* @date 2024-09-19 15:38:54
* @version V3.0.0
!-->
<template>
  <div id="pageAntPro" class="pageAntPro w-screen h-screen flex">
    <antMenu :menuData="data">
      <template #app-logo>
        <div
          class="ant-pro-sider-logo text-white text-xl flex gap-1 items-center"
          style="transition: all 0.3s ease-in-out"
        >
          <img
            src="../../public/KLogo.svg"
            alt=""
            class="h-7"
            style="transition: all 0.3s ease-in-out"
          />
          <!-- <span
            class="text-nowrap"
            :class="{ hidden: store.leftMenuShow }"
            style="transition: all 0.3s ease-in-out"
          >
            Kingsware
          </span> -->
        </div>
      </template>
    </antMenu>
    <div class="right flex-1 h-screen flex flex-col" style="min-width: 0">
      <div
        class="status-bar h-12 flex items-center justify-between px-10 border-b border-gray-200 shrink-0 shadow-sm z-10"
      >
        <KButton text @click="store.toggleLeftMenuShow">
          <IconLeftMenuDisplay
            :class="{ 'rotate-180': store.leftMenuShow }"
            color="black"
            size="20"
          />
        </KButton>
        <div class="btn-bar flex gap-4 items-center">
          <KTag size="sm" color="#FFB273">测试环境</KTag>
          <KButton text size="lg">
            <IconSearch color="black" />
          </KButton>
          <KButton text size="lg">
            <IconQuestion color="black" />
          </KButton>
          <span class="text-base text-gray-700 ml-4">MobyTang</span>
        </div>
      </div>
      <div class="w-full h-full overflow-auto scrollbar-hide flex flex-col">
        <router-view />
        <div
          class="page-foot py-4 text-center text-gray-400 text-sm"
          style="background-color: #f5f5f5; min-width: 0"
        >
          <div class="flex gap-4 items-center justify-center mb-1">
            <KButton color="gray" text>企业门户</KButton>
            <KButton color="gray" text>Wiki</KButton>
            <KButton color="gray" text>配置管理系统</KButton>
            <KButton color="gray" text>持续部署</KButton>
          </div>
          <span>Copyright © 2025金智维科技有限公司</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import antMenu from '../components/antMenu.vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '../store/index.js';

const store = useMainStore();
const router = useRouter();

const data = [
  {
    name: '网页元素',
    path: '/element',
    icon: 'IconListSearch',
  },
  {
    name: '表单',
    path: '/form',
    icon: 'IconFile',
  },
  {
    name: '表格-数据抓取',
    path: '/table-capture',
    icon: 'IconViewToggleTable',
  },
  {
    name: '表格-数据写入',
    path: '/table-write',
    icon: 'IconViewToggleTable',
  },
  {
    name: '内部测试表单',
    path: '/from-pass',
    icon: 'IconFile',
  },
  {
    name: '内嵌框架',
    path: '/iframe',
    icon: 'IconViewToggleTable',
  },

  //   // detailsView
  //   {
  //     name: '详情视页',
  //     path: '/ant-pro/details-view',
  //     icon: 'IconFile'
  //   },
  //   {
  //     name: '工具市场',
  //     path: '/ant-pro/tool-market',
  //     icon: 'IconFile'
  //   }
];
</script>
<style scoped></style>
