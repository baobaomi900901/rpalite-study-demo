import { createApp } from 'vue'
import merge from './merge.vue'
import install from '@ksware/ksw-ux';
import '@ksware/ksw-ux/kingsware-ui/style.css';

// 图标
import { KswIcon } from 'ksw-vue-icon';
createApp(merge).use(KswIcon, { projectName: 'KingAutometa' }).use(install, { styleModule: 'AOM' }).mount('#app');