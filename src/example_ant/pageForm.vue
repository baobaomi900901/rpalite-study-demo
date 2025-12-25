<!--
* @description  参数1
* @fileName  tableView
* @author userName
* @date 2024-09-19 15:07:20
* @version V3.0.0
!-->
<template>
  <div id="pageForm" class="pageForm flex-1 px-20 py-10" style="min-width: 0; max-width: 50%">
    <span>发票录入</span>
    <br />
    <br />
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
      </div>
      </template>

      <k-form-item>
        <div class="flex gap-4 w-full border-t pt-4 flex items-center">
          <k-button main @click="submit(myForm)">提交</k-button>
          <k-button secondary @click="resetForm(myForm)">重置</k-button>
          <k-button class="!ml-auto" main @click="rearrangement">重排</k-button>
        </div>
      </k-form-item>
    </k-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';

const key = ref(0)

type FormKey = 'code' | 'number' | 'date' | 'verification' | 'total' | 'tax';

interface ContentItem {
  label: string;
  prop: FormKey;
  type: 'input' | 'input-img';
}

const contentList = ref<ContentItem[]>([
  {
    label: '发票代码',
    prop: 'code',
    type: 'input'
  },
  {
    label: '发票号码',
    prop: 'number',
    type: 'input'
  },
  {
    label: '开票日期',
    prop: 'date',
    type: 'input'
  },
  {
    label: '校验码',
    prop: 'verification',
    type: 'input-img'
  },
  {
    label: '合计金额',
    prop: 'total',
    type: 'input'
  },
  {
    label: '合计税额',
    prop: 'tax',
    type: 'input'
  },
])

const myForm = ref<FormInstance>();
const formData = ref({
  code: '',
  number: '',
  date: '',
  verification: '',
  total: '',
  tax: '',
});

const rules = {
  code: [{ required: true, message: '请输入发票代码', trigger: 'blur' }],
  number: [{ required: true, message: '请输入发票号码', trigger: 'blur' }],
  date: [{ required: true, message: '请输入开票日期', trigger: 'blur' }],
  verification: [{ required: true, message: '请输入校验码', trigger: 'blur' }],
  total: [{ required: true, message: '请输入合计金额', trigger: 'blur' }],
  tax: [{ required: true, message: '请输入合计税额', trigger: 'blur' }],
};

const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

function rearrangement() {
  contentList.value.sort(() => Math.random() - 0.5);
  key.value++;
}
</script>
<style lang="less" scoped>
.el-button.k-button + .el-button.k-button {
  margin-left: 0;
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
