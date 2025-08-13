import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import install from '@ksware/ksw-ux';
import '@ksware/ksw-ux/kingsware-ui/style.css';

// 图标
import { KswIcon } from 'ksw-vue-icon';

// // 完整导入 UI 组件库
// import VxeUI from 'vxe-pc-ui';
// import 'vxe-pc-ui/lib/style.css';

// // 完整导入 表格库
// import VxeUITable from 'vxe-table';
// import 'vxe-table/lib/style.css';

// app.use(install, { styleModule: 'AOM' }); // 全局注册组件 GFAOM, AOM, KingAutometa

const app = createApp(App);
app.use(router);
// app.use(VxeUI);
// app.use(VxeUITable);
app.use(createPinia());
app.use(KswIcon, { projectName: 'KingAutometa' }); // 图标引入添加项目名称
app.use(install, { styleModule: 'AOM' });
app.mount('#app');
