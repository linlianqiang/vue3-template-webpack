<template>
  <div class="about">
    <div class="header-set">
      <span>取消</span>
      <span class="tit">发趣事</span>
      <span>发布</span>
    </div>
    <textarea name="" id="" cols="30" rows="10" placeholder="分享新鲜事"></textarea>
    <div>
      <span>图片</span>
      <span>@</span>
      <span>#</span>
    </div>
    
  </div>
</template>
<script>
import { setStorage } from '../utils/storage'
export default {
  created() {
    setStorage('name','llq')
  },
};
</script>
<style lang="scss" scoped>
  .header-set {
    display: flex;
    .tit {
      flex-grow: 1;
    }
  }
</style>