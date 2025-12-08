<script setup lang='ts'>
import { KMessage, type FormRules } from '@ksware/ksw-ux';
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { cascadeOptions, treeSelectData } from './const'

const props = defineProps<{
  showMain?: boolean
}>()

const pass = ref('')
const showMain = ref(Boolean(props.showMain))
function confirm() {
  if (pass.value === 'dfdd') {
    showMain.value = true
  } else {
    KMessage.error('密码错误')
  }
}

const formData = reactive({
  select: 0,
  cascadeSelect: '',
  treeSelect: ''
})

const rules = reactive<FormRules<typeof formData>>({
  select: [{ required: true, trigger: 'blur', validator: (rule, value, callback) => {
    if (value === 0) {
      callback('请选择组件下拉框')
    } else {
      callback()
    }
  } }],
  cascadeSelect: [{ required: true, trigger: 'blur', validator: (rule, value, callback) => {
    if (value === '') {
      callback('请选择级联选择框')
    } else {
      callback()
    }
  } }],
  treeSelect: [{ required: true, trigger: 'blur', validator: (rule, value, callback) => {
    if (value === '') {
      callback('请选择树结构下拉框')
    } else {
      callback()
    }
  } }],
})

const selectOptions = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 },
  { label: '选项3', value: 3 },
  { label: '选项4', value: 4 },
];

const fromRef = ref<FormInstance>()
async function submit() {  
  await fromRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
}
function resetForm() {
  Object.assign(formData, {
    select: 0,
    cascadeSelect: '',
    treeSelect: ''
  })
}
</script>

<template>
  <div v-if="showMain" id="pageForm" class="pageForm flex-1 px-20 py-10" style="min-width: 0; max-width: 50%">
    <k-form
      ref="fromRef"
      :model="formData"
      :rules="rules"
      label-position="left"
      label-width="auto"
      class="w-full"
    >
      <k-form-item label="组件下拉框" prop="select">
        <div class="select-box">
          <select class="select-item" v-model="formData.select">
            <option :value="0">请选择</option>
            <option
              v-for="item in selectOptions"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>
        </div>
      </k-form-item>
      <k-form-item label="级联选择框" prop="cascadeSelect">
        <k-cascader v-model="formData.cascadeSelect" :options="cascadeOptions" />
      </k-form-item>
      <k-form-item label="树结构下拉框" prop="treeSelect">
        <k-tree-select
          v-model="formData.treeSelect"
          :data="treeSelectData"
          :render-after-expand="false"
          :check-strictly="true"
          style="width: 200px"
          icon=""
          expand-icon=""
          collapse-icon=""
        />
      </k-form-item>
      <k-from-item>
        <div class="flex gap-4 w-full border-t pt-4 items-center">
          <k-button main @click="submit()">提交</k-button>
          <k-button secondary @click="resetForm()">重置</k-button>
        </div>
      </k-from-item>
    </k-form>
  </div>
  <div v-else class="flex-1 flex w-full h-full justify-center items-center">
    <div class="flex">
      <k-input class="!mr-2" v-model="pass" @keydown.enter="confirm" />
      <k-button main @click="confirm">确认</k-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.select-box {
  width: 199px;
  height: 32px;
  padding: 0 10px;
  border: 1px #e5e7eb solid;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .select-item {
    width: 100%;
    &:focus-visible {
      outline: 0;
    }
  }

  &:hover {
    border: 1px #60a5fa solid;
  }
}
</style>