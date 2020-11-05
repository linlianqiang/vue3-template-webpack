<template>
    <div class="weibo">
        <div class="user-info">
            <span class="to-write" @click="toRealease">
                <svg-icon icon-class="edit"></svg-icon>
            </span>
            <img src="" class="user-bg" alt="" />
            <span class="header">
                <img src="" class="user-h" alt="" />
                <span class="name">老王</span>
            </span>
            <div class="focu-wrap">
                <div class="focu-item" @click="toFocus('tab1')">
                    <span>关注</span>
                    <span>100人</span>
                </div>
                <div @click="toFocus('tab2')" class="focu-item">
                    <span>被关注</span>
                    <span>100人</span>
                </div>
            </div>
        </div>
        <div class="div-line ignore-vw"></div>
        <div class="blog-wrap">
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
            list: [],
            watchAttr: 444,
        };
    },
    async created() {
        setStorage("name", "lsj");
        // 获取博客列表
        // this.list =  await blogList()
        // // 获取话题列表
        // getTopic().then(res => {
        // })
        // // 获取用户信息
        // const userInfo = await getUserInfo()
        // setStorage('userinfo',userInfo)
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
</style>
