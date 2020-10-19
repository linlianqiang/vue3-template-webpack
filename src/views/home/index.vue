<template>
    <div class="topic_wrap">
      <div class="">
        <span class="t-tit">热门话题</span>
        <ul class="t-list">
          <li v-for="(item,idx) in topicList" :key="idx">{{item}}</li>
        </ul>
      </div>
      <div class="mine">
        <div class="mine-box">
          <span @click="toRealease">发布</span>
          <span @click="toMine">个人中心</span>
        </div>
      </div>
      <div class="div-line ignore-vw"></div>
      <div class="blog-wrap">
        <div class="blog-header">
          <span class="active tit">热点</span>
          <span class="tit">关注</span>
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
      topicList:[
        '话题发送到发送到发送到......',
        '话题发送到发送到发送到......',
        '话题发送到发送到发送到......',
        '话题发送到发送到发送到......',
        '话题发送到发送到发送到......',
        '话题发送到发送到发发送到发送到发发送到发送到发送到......',
        '话题发送到发送到发送到......',
        '话题发送到发送到发送到......',
        '话题发送到发送到发送到......'
      ],
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
<style scoped lang='scss'>
.bl-top {
  display: flex;
  flex-direction: row;
  .picture {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .bl-user {
    flex-grow: 1;
    padding: 0 10px;
    .nickname {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .createtime {
      color: #999;
    }
  }
  .focus {
    width: 60px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    text-align: center;
    color: rgb(241,142,0);
    border: 1px solid rgb(241,142,0);
  }
}
 .blog-header {
  display: flex;
  justify-content: center;
  color: #999;
  padding: 18px 0;
  .tit {
    font-size: 14px;
    margin: 0 4px;
    padding: 0 2px 4px;
  }
  .active {
    font-size: 16px;
    border-bottom: 2px solid rgb(241,142,0);
    color: #000;
  }
}
.mine {

  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}
.t-list {
  height: 72px;
  overflow: hidden;
  padding: 10px 10px;
  li {
    font-size: 12px;
    padding: '2px 2px';
    height: 20px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: '#333';
  }
}
.mine-box {
  display: flex;
  justify-content: center;
  span {
    text-align: center;
    flex-grow: 1;
  }
} 
</style>
