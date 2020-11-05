<!--
* @description: 博客首页：头部个人信息，及博客列表
* @author： 林连强
*
-->
<template>
    <div class="weibo">
        <div class="user-info">
            <span class="to-write" @click="toRealease">
                <svg-icon icon-class="edit"></svg-icon>
            </span>
            <span class="user-bg"></span>
            <router-link class="user-header-bg" to="/user">
                <img src="../../assets/images/head.png" class="user-h" alt="" />
            </router-link>
        </div>
        <div class="user-info-txt">
            <div class="name">老王</div>
            <div class="focu-wrap">
                <div class="focu-item">
                    <router-link class="focu-item-i" to="/user">
                        <span class="t">微博 </span>
                        <span> 44</span>
                    </router-link>
                </div>
                <div class="focu-item">|</div>
                <div class="focu-item" @click="toFocus('tab1')">
                    <router-link class="focu-item-i" to="/user">
                        <span class="t">关注 </span>
                        <span> 44</span>
                    </router-link>
                </div>
                <div class="focu-item">|</div>
                <div @click="toFocus('tab2')" class="focu-item">
                    <router-link class="focu-item-i" to="/user">
                        <span class="t">粉丝 </span>
                        <span> 44</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="div-line ignore-vw"></div>
        <div class="blog-wrap">
            <div @click="tabActive" class="blog-header">
                <span
                    data-id="tab1"
                    :class="nowActive === 'tab1' ? 'active' : '' + ' tit'"
                    >热点</span
                >
                <span
                    data-id="tab2"
                    :class="nowActive === 'tab2' ? 'active' : '' + ' tit'"
                    >关注</span
                >
            </div>
            <blog-list :blogList="blogList"></blog-list>
        </div>
    </div>
</template>

<script>
import { blogList, getTopic } from "../../api/blog";
import { getUserInfo } from "../../api/user";
import { setStorage } from "../../utils/storage";
import BlogList from "@/components/BlogList.vue";
export default {
    components: {
        BlogList,
    },
    data() {
        return {
            a: 1,
            nowActive: "tab1",
            blogList: [],
            watchAttr: 444,
        };
    },
    async created() {
        // 获取博客列表
        this.blogList = await blogList();
        console.log("list", this.blogList);
    },
    computed: {
        computedAttr: function () {
            console.log("computed");
            return this.a + 2;
        },
    },
    watch: {
        watchAttr: function () {},
    },
    methods: {
        tabActive(e) {
            this.nowActive = e.target.dataset.id;
        },
        // 去个人中心
        toFocus(type) {
            this.a = 2;
            this.watchAttr = 6666;
            this.$router.push({
                name: "focu",
                params: {
                    type: type,
                },
            });
        },
        // 去发布
        toRealease() {
            this.$router.push({ name: "release" });
        },
    },
};
</script>
<style scoped lang="scss">
.user-info {
    position: relative;
    height: 130px;
    .to-write {
        position: absolute;
        right: 10px;
        top: 20px;
    }
}
.user-info-txt {
    padding: 8px 60px 18px 90px;
    .name {
        margin-bottom: 8px;
    }
}
.focu-wrap {
    display: flex;
    flex-direction: row;
    color: #999;
    .focu-item {
        flex-grow: 1;
        .focu-item-i {
            color: #999;
        }
    }
}

.user-header-bg {
    position: absolute;
    left: 10px;
    bottom: -50px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;

    .user-h {
        border-radius: 50%;
        height: 100%;
        width: 100%;
        background: #fff;
    }
}

.user-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    top: 0;
    left: 0;
    z-index: -1;
    background: url("../../assets/images/bg.png") center 0 no-repeat;
    background-size: 100%;
}
.blog-header {
    display: flex;
    justify-content: center;
    color: #999;
    padding: 18px 0 10px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 10px;
    .tit {
        font-size: 14px;
        margin: 0 4px;
        padding: 0 2px 4px;
    }
    .active {
        font-size: 16px;
        border-bottom: 2px solid rgb(241, 142, 0);
        color: #000;
    }
}
</style>
