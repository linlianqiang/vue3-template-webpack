<template>
  <div class="about">
    <textarea name="" id="" cols="30" rows="10" placeholder="分享新鲜事"></textarea>
    <div>
      <span>图片</span>
      <span>@</span>
      <span>#</span>
    </div>
  </div>
</template>
<script>
  console.log('按需加载2')
import { setStorage } from '../utils/storage'
export default {
  created() {
    setStorage('name','llq')
  },
};
</script>