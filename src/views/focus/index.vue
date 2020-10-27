<template>
  <div class="main">
    <div @click="tabFun">
      <span class="active focu-type">我的关注</span>
      <span class="focu-type">关注我的</span>
    </div>
    <div>
      <div class="focu-item" v-for="item in userList" :key="item.id">
        <span class="name">{{item.name}}</span>
        <span class="cancle-focu">取消关注</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {blogList} from '../../api/blog'
export default {
  data() {
    return {
      userList: [
        {name: 'llq',id: 1},
        {name: 'llq2',id: 12},
      ]
    }
  },
  async created() {
    this.userList = await blogList({
      isadmin: 1
    })
  },
  methods: {
  },
}
</script>
<style>
  .focu-item {
    display: flex;
    flex-direction: row;
  }
  .name {
    flex-grow: 1;
  }
  .cancle-focu {
    color: red;
  }
</style>
