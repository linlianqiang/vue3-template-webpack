<template>
    <div class="weibo">
      <div class="user-info">
        <span class="edit"  @click="toRealease">
          <svg-icon icon-class="edit"></svg-icon>
        </span>
        <img src="" class="user-bg" alt="">
        <span class="header">
          <img src="" class="user-h" alt="">
          <span class="name">老王</span>
        </span>
         <svg-icon icon-class="edit" class-name="card-panel-icon"></svg-icon>
        <temp></temp>
        <div>
          <div>
            <span>关注</span>
            <span>100人</span>
          </div>
          <div>
            <span>被关注</span>
            <span>100人</span>
          </div>
        </div>
      </div>
      <div class="div-line ignore-vw"></div>
      <div class="blog-wrap">
        <div @click="tabActive" class="blog-header">
            <span data-id="tab1" :class=" nowActive === 'tab1' ? 'active' : '' + ' tit'">热点</span>
            <span data-id="tab2" :class=" nowActive === 'tab2' ? 'active' : '' + ' tit'">关注</span>
        </div>
        <ul class="blog-list">
          <li class="" v-for="item in blogList" :key="item.blogId">
            <div class="bl-top">
              <span class="picture"><img src="../../assets/images/user.jpg" alt=""></span>
              <div class="bl-user">
                <div class="nickname">{{item.nickname}}</div>
                <div class="createtime">{{item.createTime}}</div>
              </div>
              <span class="focus">关注</span>
            </div>
            <div class="bl-con">
              <span v-if="item.topic_title" class="topic">#{{item.topic_title}}#</span>
              <span class="con">{{item.content}}</span>
              <!-- <span v-if="item.aite" class="aite">@{{item.aite}}</span> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {  blogList, getTopic } from '../../api/blog'
import { getUserInfo } from '../../api/user'
import { setStorage } from '../../utils/storage'
export default {
  data() {
    return {
      nowActive:'tab1',
      blogList: [
        {
          img: '',
          topic_title: '孩子易过敏',
          nickname:'小王',
          content:'小孩皮肤易过敏，建议还是垫子还是经常保持清洁，当妈妈的太累了，，哎哎哎哎哎',
          createTime: '2020-02-03'
        },
        {
          img: '',
          topic_title: '孩子易过敏',
          nickname:'小王',
          content:'小孩皮肤易过敏，建议还是垫子还是经常保持清洁，当妈妈的太累了，，哎哎哎哎哎',
          createTime: '2020-02-03'
        },
      ],
      list: []
    }
  },
  async created() {
    setStorage('name','lsj')
    // 获取博客列表
    // this.list =  await blogList()
    // // 获取话题列表
    // getTopic().then(res => {
    // })
    // // 获取用户信息
    // const userInfo = await getUserInfo()
    // setStorage('userinfo',userInfo)
  },
  methods: {

    tabActive(e) {
      this.nowActive = e.target.dataset.id
      // console.log(e)
    },
    // 去个人中心
    toMine() {
      this.$router.push({name: 'mine'})
    },
    // 去发布
    toRealease() {
      this.$router.push({name: 'release'})
    }
  },
}
</script>
<style scoped lang="scss">
@import '../../assets/style/home/index.scss';
</style>
