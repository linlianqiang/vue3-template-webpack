<!-- 
    @description  博客列表：广场，个人主页
    @author  林连强
    @version 2020-10-02
-->
<template>
    <ul class="blog-list">
        <li class="" v-for="item in blogList" :key="item.blogId">
            <div class="bl-top">
                <router-link class="picture" to="/user">
                    <span>
                        <img src="../assets/images/user.jpg" alt="" />
                    </span>
                </router-link>
                <div class="bl-user">
                    <div class="nickname">{{ item.user.nickName }}</div>
                    <div class="createtime">{{ item.user.createdAt }}</div>
                </div>
                <span class="focus">关注</span>
            </div>
            <div class="bl-con">
                <span v-if="item.topic_title" class="topic"
                    >#{{ item.topic_title }}#</span
                >
                <span class="con">{{ item.content }}</span>
                <!-- <span v-if="item.aite" class="aite">@{{item.aite}}</span> -->
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        blogList: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style scoped lang="scss">
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
        color: rgb(241, 142, 0);
        border: 1px solid rgb(241, 142, 0);
    }
}
</style>