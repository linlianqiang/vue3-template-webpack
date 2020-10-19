<template>
  <div class="main">
    <span class="" @click="toFocus">我的关注</span>
    <div v-for="item in userList" :key="item.id">{{item.name}}</div>
    
  </div>
</template>
<script lang="ts">
import {blogList} from '../../api/blog'
export default {
  data() {
    return {
      userList: []
    }
  },
  async created() {
    this.userList = await blogList({
      isadmin: 1
    })
  },
  methods: {
    toFocus() {
      this.$router.push({name: 'focus'})
    }
  },
}
</script>
