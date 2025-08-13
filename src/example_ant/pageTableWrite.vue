<template>
  <div class="flex-1 p-4 bg-gray-100 flex flex-col gap-4">
    <div class="bg-white rounded-md shadow-md w-full p-4" style="height: 80%">
      <k-tree-table
        :data="tableData"
        :column="column1"
        border
        use
        :pagination-config="{
          layout: ' jumper, sizes, ->, prev, pager, next, total',
          pageSizes: [10, 20, 30, 40, 50],
        }"
      >
        <template #name="{ row }">
          <k-input v-model="row.name" />
        </template>
        <template #role="{ row }">
          <k-input v-model="row.role" />
        </template>
        <template #sex="{ row }">
          <k-select v-model="row.sex">
            <k-option label="" value="0" />
            <k-option label="" value="1" />
          </k-select>
        </template>
        <template #age="{ row }">
          <k-input v-model="row.age" />
        </template>
      </k-tree-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const column1 = ref([
  {
    title: 'Id',
    field: 'id',
    width: '100',
    dataType: 'number',
  },
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Role',
    field: 'role',
  },
  {
    title: 'Sex',
    field: 'sex',
  },
  {
    title: 'Age',
    field: 'age',
    dataType: 'number',
  },
]);
const tableData = reactive([
  {
    id: 1,
    name: '',
    role: '',
    sex: '',
    age: '',
    address: 'test abc',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 20,
    },
  },
  {
    id: 2,
    name: '',
    role: '',
    sex: '',
    age: '',
    address: 'Guangzhou',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 16,
    },
  },
  {
    id: 3,
    name: '',
    role: '',
    sex: '',
    age: '',
    address: 'Shanghai',
    icon: 'IconFolderOpen',
    iconStyle: {
      empty: false,
      color: '#f60',
      size: 16,
    },
  },
  { id: 4, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 5, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 6, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 7, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 8, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 9, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 10, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 11, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 12, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 13, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 14, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 15, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 16, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 17, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 18, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 19, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 20, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 21, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 22, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 23, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 24, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 25, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 26, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 27, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 28, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 29, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 30, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 31, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 32, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
  { id: 33, name: '', role: '', sex: '', age: '', address: 'test abc' },
  { id: 34, name: '', role: '', sex: '', age: '', address: 'Guangzhou' },
  { id: 35, name: '', role: '', sex: '', age: '', address: 'Shanghai' },
]);

const items = ref([
  {
    label: 'name',
    type: 'input',
    prop: 'name',
    value: '',
    'label-width': '100px',
  },
  {
    label: 'role',
    type: 'input',
    prop: 'role',
    value: '',
    'label-width': '100px',
  },
  {
    label: 'sex',
    type: 'select',
    prop: 'sex',
    value: '',
    'label-width': '100px',
    options: [
      { label: '', value: '0' },
      { label: '', value: '1' },
    ],
  },
]);
</script>
<style scoped></style>
