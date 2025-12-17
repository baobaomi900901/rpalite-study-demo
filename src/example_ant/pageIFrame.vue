<script setup lang='ts'>
const src = process.env.NODE_ENV === 'production'
  ? 'https://www.kingsware.cn/krpalite/tutorial-demo/iframe.html'
  : '/iframe.html';
</script>

<template>
  <iframe class="w-full h-full" :src="src"></iframe>
</template>

<style lang="less" scoped>

</style>