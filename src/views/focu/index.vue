<template>
  <div class="focu-wrap">
    <div class="header" @click="tabFun">
      <span data-id="tab1" :class=" (nowActive === 'tab1' ? 'active' : '') + ' focu-type'" >我的关注</span>
      <span data-id="tab2" :class=" (nowActive === 'tab2' ? 'active' : '') + ' focu-type'" >关注我的</span>
    </div>
    <div>
      <div class="focu-item" v-for="item in userList" :key="item.id">
        <span class="name">{{item.name}}</span>
        <span v-show="nowActive === 'tab1'" class="cancle-focu">取消关注</span>
      </div>
    </div>
  </div>
</template>
<script>
import {blogList} from '../../api/blog'
export default {
  components: {
    
  },
  data() {
    const type = this.$route.params.type
    return {
      hide: false,
      nowActive: type,
      userList: [
        {name: 'llq',id: 1},
        {name: 'llq2',id: 12},
      ]
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  mounted() {
    console.log('mounted')
  },
  async created() {
    console.log('created')
    this.userList = await blogList({
      isadmin: 1
    })
  },
  methods: {
    tabFun: function(e) {
      this.nowActive = e.target.dataset.id
    }
  },
}
</script>
<style lang="scss">
  @import '../../assets/style/focu.scss';
</style>
