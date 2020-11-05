<!-- 
    @description  博客列表：广场，个人主页
    @author  林连强
    @version 2020-10-02
-->
<template>
    <ul class="blog-list">
        <li class="blog-item" v-for="item in blogList" :key="item.blogId">
            <div class="bl-top">
                <router-link class="picture" to="/user">
                    <span>
                        <img src="../assets/images/head.png" alt="" />
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
                <div class="img-wrap">
                    <img src="../assets/images/product/1.jpg" alt="" />
                    <img src="../assets/images/product/2.jpg" alt="" />
                    <img src="../assets/images/product/3.jpg" alt="" />
                    <img src="../assets/images/product/4.jpg" alt="" />
                    <img src="../assets/images/product/5.jpg" alt="" />
                    <img src="../assets/images/product/6.jpg" alt="" />
                    <img src="../assets/images/product/1.jpg" alt="" />
                    <img src="../assets/images/product/2.jpg" alt="" />
                    <img src="../assets/images/product/3.jpg" alt="" />
                </div>
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
.blog-list {
    padding: 0 10px;
    .blog-item {
        margin-bottom: 10px;
    }
}
.img-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 10px;
    img {
        width: 32%;
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
    .focus {
        width: 44px;
        height: 20px;
        line-height: 20px;
        border-radius: 20px;
        text-align: center;
        color: rgb(241, 142, 0);
        border: 1px solid rgb(241, 142, 0);
    }
}
.bl-con {
    text-indent: 5px;
}
</style>