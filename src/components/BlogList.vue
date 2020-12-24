<!-- 
    @description  组件：博客列表（全部 或者 用户）
    @author  林连强
    @version 2020-10-02
-->
<template>
    <ul class="blog-list">
        <li class="blog-item" v-for="item in blogList" :key="item.blogId">
            <div class="bl-top">
                <router-link
                    class="picture"
                    :to="{ path: '/user', query: { userId: item.userId } }"
                >
                    <span>
                        <img src="../assets/images/head.png" alt="" />
                    </span>
                </router-link>
                <div class="bl-user">
                    <div class="nickname">{{ item.user.nickName }}</div>
                    <div class="createtime">{{ item.user.createdAt }}</div>
                </div>
                <span v-if="!userId" @click="testB" class="focus-btn"
                    >关注</span
                >
            </div>
            <div class="bl-con">
                <span v-if="item.topic_title" class="topic"
                    >#{{ item.topic_title }}#</span
                >
                <span class="con">{{ item.content }}</span>
                <div class="img-wrap">
                    <span>
                        <img src="../assets/images/product/1.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/2.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/3.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/4.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/5.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/6.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/1.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/2.jpg" alt="" />
                    </span>
                    <span>
                        <img src="../assets/images/product/3.jpg" alt="" />
                    </span>
                </div>
                <!-- <span v-if="item.aite" class="aite">@{{item.aite}}</span> -->
            </div>
        </li>
    </ul>
</template>
<script>
import { getBlogList } from "../api/blog";
import BlogList from "@/components/BlogList.vue";
export default {
    props: {},
    data() {
        return {
            blogList: [],
            userId: "",
        };
    },
    async mounted() {
        this.userId = this.$route.query.userId;
        // 获取博客列表
        this.blogList = await getBlogList();
    },
    methods: {},
};
</script>
<style scoped lang="scss">
.blog-list {
    padding: 0 10px;
    .blog-item {
        margin-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
    }
}
.img-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 10px;
    span {
        width: 28.5vw;
        height: 28.5vw;
        margin-bottom: 8px;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
        }
    }
}
.bl-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    .picture {
        width: 40px;
        height: 40px;
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
}
.bl-con {
    text-indent: 5px;
}
</style>