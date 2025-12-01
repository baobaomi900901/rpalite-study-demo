import { createRouter, createWebHashHistory } from 'vue-router';

// 引入页面
// import { home, pageComponents, pageTemplate, pageIDE, pageExample } from '../pages';

// 引入仿 ant pro 的页面
import { pageElement, pageForm, pageTableCapture, pageTableWrite, pageFromPass } from '../example_ant/index';

const routes = [
  // ant pro
  {
    path: '/element',
    component: pageElement,
    name: 'element',
  },
  {
    path: '/form',
    component: pageForm,
    name: 'form',
  },
  {
    path: '/table-capture',
    component: pageTableCapture,
    name: 'tableCapture',
  },
  {
    path: '/table-write',
    component: pageTableWrite,
    name: 'tableWrite',
  },
  {
    path: '/from-pass',
    component: pageFromPass,
    name: 'fromPass',
  },
];

// createWebHistory, 无哈希值 #
// createWebHashHistory, 带哈希值 #
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
