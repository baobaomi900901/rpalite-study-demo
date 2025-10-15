<!--
* @description  参数1
* @fileName  pageForm
* @author userName
* @date 2025-02-23 20:25:37
* @version V3.0.0
!-->
<template>
  <div ref="pageForm" class="pageForm flex-1 px-20 py-10 text-base flex flex-col gap-8">
    <div class="flex items-center gap-4 text-base">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <label title="责任人" class="w-32">姓名:</label>
          <k-input v-model="inputValue3" placeholder="请输入" name="责任人" />
        </div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <label title="复选框" class="w-24">主食(复选框):</label>
      <k-checkbox-group v-model="checkboxValue">
        <k-checkbox
          v-for="item in checkboxOptions"
          :key="item"
          :label="item.value"
          :value="item.value"
        >
          {{ item.label }}
        </k-checkbox>
      </k-checkbox-group>
    </div>
    <div class="flex items-center gap-4 text-base">
      <label title="单选框" class="w-24">饮品(单选框):</label>
      <k-radio-group v-model="radioValue">
        <k-radio v-for="item in radioOptions" :key="item" :label="item.value" :value="item.value">
          {{ item.label }}
        </k-radio>
      </k-radio-group>
    </div>
    <div class="flex items-center gap-4 text-base">
      <label title="下拉框" class="w-24">用餐(下拉框):</label>
      <div class="select-box">
        <select class="select-item" v-model="selectValue">
          <option :value="0">请选择</option>
          <option v-for="item in selectOptions" :key="item.value" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </div>
    </div>
    <!-- <div class="flex items-center gap-4 text-base">
      <span class="w-24">上传文件:</span>
      <k-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="#"
        accept=".jpg,.jpeg,.png"
        multiple
        :auto-upload="false"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
        @before-upload="beforeAvatarUpload"
        @http-request="httpRequest"
      >
        <template #trigger>
          <k-button type="primary" main>选择文件</k-button>
        </template>
        <template #tip>
          <div class="k-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
      </k-upload>
    </div> -->
    <!-- <div class="flex items-center gap-4 text-base">
      <span class="w-24">日期选择:</span>
      <k-date-picker v-model="dateValue" type="date" />
    </div>
    <div class="flex items-center gap-4 text-base">
      <span class="w-24">时间范围选择:</span>
      <k-date-picker v-model="dateValue2" type="daterange" />
    </div> -->
    <div class="flex items-center gap-4 text-base">
      <span class="w-24">备注(文本域):</span>
      <!-- 点击复制下面的文字 -->
      <div class="flex flex-col gap-4">
        <div>
          <k-input type="textarea" v-model="textareaValue" />
        </div>
        <!-- <div class="flex items-center gap-4">
          <k-button
            @click="handleCopy('在一个阳光明媚的早晨，小镇上的咖啡馆里弥漫着新鲜烘焙咖啡的香气')"
          >
            复制右边的文本
          </k-button>
          <span>在一个阳光明媚的早晨，小镇上的咖啡馆里弥漫着新鲜烘焙咖啡的香气</span>
        </div> -->
      </div>
    </div>
    <div class="btn-box flex justify-start items-center gap-4 ml-28">
      <k-button type="primary" @click="submit">保存</k-button>
      <span>提交记录: {{ res }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { UploadProps, UploadUserFile } from 'element-plus';
import { KMessage } from '@ksware/ksw-ux';

const res = ref(0);

const checkboxValue = ref([]);
const checkboxOptions = [
  { label: '肠粉', value: 1 },
  { label: '包子', value: 2 },
  { label: '牛肉面', value: 3 },
  { label: '热干面', value: 4 },
];

const radioValue = ref(0);
const radioOptions = [
  { label: '豆浆', value: 1 },
  { label: '咖啡', value: 2 },
  { label: '牛奶', value: 3 },
  { label: '豆奶', value: 4 },
];

const selectValue = ref(0);
const selectOptions = [
  { label: '堂食', value: 1 },
  { label: '打包自提', value: 2 },
  { label: '送到工位', value: 3 },
  { label: '送到宿舍', value: 4 },
];

const inputValue = ref('');
const inputValue2 = ref('');
const inputValue3 = ref('');

const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`,
  );
};

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false,
  );
};

const beforeAvatarUpload = (rawFile: any) => {
  const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!validImageTypes.includes(rawFile.type)) {
    KMessage.error('只能上传指定格式!');
    return false;
  } else if (rawFile.size / 1024 > 500) {
    KMessage.error('超过500KB了');
    return false;
  }
  return true;
};

const httpRequest = (file: any) => {
  //
  console.log('file--->', file);
};

const dateValue = ref(new Date());
const dateValue2 = ref([new Date(), new Date()]);
const textareaValue = ref('');

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log('文本已复制到剪切板');
    },
    function (err) {
      console.error('复制失败: ', err);
    },
  );
};

function submit() {
  // console.log('fileList.value--->', fileList.value);
  // if (fileList.value.length === 0) {
  //   //
  //   KMessage.warning('缺少图片');
  //   return;
  // }

  const checkboxLabel = checkboxValue.value.map((item) => {
    return checkboxOptions.find((option) => option.value === item)?.label || '""';
  });
  const radioLabel = radioOptions.find((item) => item.value === radioValue.value)?.label || '""';
  const selectLabel = selectOptions.find((item) => item.value === selectValue.value)?.label || '""';

  const message =
    '提交成功!' +
    '__(' +
    (inputValue3.value || '""') +
    ',[' +
    checkboxLabel +
    '],' +
    radioLabel +
    ',' +
    selectLabel +
    ',' +
    (textareaValue.value || '""') +
    ')';

  KMessage.success(message);

  inputValue3.value = '';
  checkboxValue.value = [];
  radioValue.value = 0;
  selectValue.value = 0;
  textareaValue.value = '';
  res.value++;
}
</script>
<style scoped lang="less">
.select-box {
  width: 256px;
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
