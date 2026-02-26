<!--
* @description  参数1
* @fileName  tableView
* @author userName
* @date 2024-09-19 15:07:20
* @version V3.0.0
!-->
<template>
  <div class="flex h-full">
    <div id="pageForm" class="pageForm flex-1 px-20 py-10" style="min-width: 0; max-width: 50%">
      <span>发票录入</span>
      <br />
      <br />
      <!-- 干扰dom -->
      <k-form
        v-if="formData.enableInterference"
        style="display: none"
        ref="myForm"
        :model="formData"
        :rules="rules"
        label-position="left"
        label-width="auto"
        class="w-full"
        showColon
        :key="key"
      >
        <k-form-item label="发票代码">
          <k-input></k-input>
        </k-form-item>
      </k-form>

    <k-form
      ref="myForm"
      :model="formData"
      :rules="rules"
      label-position="left"
      label-width="auto"
      class="w-full"
      showColon
      :key="key"
    >
      <template v-for="(item, index) in contentList" :key="index">
        <k-form-item v-if="item.type === 'input'" :label="item.label" :prop="item.prop">
          <k-input v-model="formData[item.prop]"></k-input>
        </k-form-item>
        <div class="flex gap-4">
        <template v-if="item.type === 'input-img'">
          <k-form-item :label="item.label" :prop="item.prop">
            <k-input v-model="formData[item.prop]"></k-input>
          </k-form-item>
          <img src="../assets/verification.png" alt="code" class="h-8" />
        </template>
        <template v-if="item.type === 'input-slide'">
          <k-form-item :label="item.label" :prop="item.prop">
            <Slide :key="slideKey" />
          </k-form-item>
        </template>
      </div>
      </template>

        <k-form-item>
          <div
            class="flex w-full border-t pt-4 flex items-center"
            :style="{ paddingTop: moveButton ? '1000px' : undefined }"
          >
            <k-button main @click="submit(myForm)">提交</k-button>
            <k-button secondary @click="resetForm(myForm)">重置</k-button>
          </div>
        </k-form-item>
      </k-form>
    </div>
    <div class="border-t pt-4 flex flex-col gap-4">
      <span class="pb-4">干扰项配置</span>
      <k-switch v-model="formData.enableInterference" active-text="添加干扰项" />
      <k-switch v-model="moveButton" active-text="移动提交按钮至屏幕外" />
      <div class="flex">
        <k-button pain @click="rearrangement">打乱顺序</k-button>
        <k-button pain @click="dialogVisible = true">全屏遮罩</k-button>
      </div>
    </div>
  </div>
  <k-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
    :close-on-click-modal="false"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <k-button @click="dialogVisible = false">Cancel</k-button>
        <k-button type="primary" main @click="dialogVisible = false">Confirm</k-button>
      </div>
    </template>
  </k-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { KMessageBox } from '@ksware/ksw-ux';

const key = ref(0);
import Slide from './components/Slide.vue'

const moveButton = ref(false);

type FormKey = 'code' | 'number' | 'date' | 'verification' | 'total' | 'tax' | 'slide';

interface ContentItem {
  label: string;
  prop: FormKey;
  type: 'input' | 'input-img' | 'input-slide';
}

const contentList = ref<ContentItem[]>([
  {
    label: '发票代码',
    prop: 'code',
    type: 'input',
  },
  {
    label: '发票号码',
    prop: 'number',
    type: 'input',
  },
  {
    label: '开票日期',
    prop: 'date',
    type: 'input',
  },
  {
    label: '字母校验码',
    prop: 'verification',
    type: 'input-img',
  },
  {
    label: '合计金额',
    prop: 'total',
    type: 'input',
  },
  {
    label: '合计税额',
    prop: 'tax',
    type: 'input',
  },
  {
    label: '滑动校验码',
    prop: 'slide',
    type: 'input-slide'
  }
])

const myForm = ref<FormInstance>();
const formData = ref({
  code: '',
  number: '',
  date: '',
  verification: '',
  total: '',
  tax: '',
  enableInterference: false,
  slide: true
});

const rules = {
  code: [{ required: true, message: '请输入发票代码', trigger: 'blur' }],
  number: [{ required: true, message: '请输入发票号码', trigger: 'blur' }],
  date: [{ required: true, message: '请输入开票日期', trigger: 'blur' }],
  verification: [{ required: true, message: '请输入字母校验码', trigger: 'blur' }],
  total: [{ required: true, message: '请输入合计金额', trigger: 'blur' }],
  tax: [{ required: true, message: '请输入合计税额', trigger: 'blur' }],
  slide: [{ required: true, message: '请输入滑动校验码', trigger: 'blur' }],
};

const slideKey = ref(0)
const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      slideKey.value++
      formData.value = {
        code: '',
        number: '',
        date: '',
        verification: '',
        total: '',
        tax: '',
        enableInterference: false,
        slide: true
      }
    } else {
      console.log('error submit!', fields);
    }
  });
};

function rearrangement() {
  contentList.value.sort(() => Math.random() - 0.5);
  key.value++;
}

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  KMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>
<style lang="less" scoped>
.el-button.k-button + .el-button.k-button {
  // margin-left: 0;
}

.k-tree-table .k-tree-table__header {
  margin-bottom: 0.75rem;
}

.k-tree-table .k-tree-table__header .k-table-func .el-button--text {
  padding: 0 0 !important;
}

.filtr-items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 33%);
  grid-column-gap: 1rem;
  grid-auto-rows: 1fr;
  overflow: hidden;
  height: 2rem;
  transition: all 0.3s ease-in-out;
  &.is-expand {
    height: auto;
    transition: all 0.3s ease-in-out;
  }
}

.filtr-btns {
  // width: 30%;
  grid-column: -1;
  grid-row: -1;
  justify-self: end;
  &.is-expand {
    grid-row: unset;
  }
}
.el-form-item__label {
  display: inline-block;
  min-width: 4rem;
  text-align: right;
}
</style>
