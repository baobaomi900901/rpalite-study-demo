<script setup lang='ts'>
import { pageTableCapture, pageFormPass } from '../example_ant/index';
</script>

<template>
  <div class="flex flex-col">
    <pageFormPass show-main class="page-form-pass"/>
    <pageTableCapture/>
  </div>
</template>

<style lang="less" scoped>
.page-form-pass {
  margin: 20px 0;
  padding: 0 40px;
}
</style>