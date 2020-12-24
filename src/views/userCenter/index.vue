<template>
    <div class="weibo">
        <!-- 头部用户信息 -->
        <!-- <user-header></user-header> -->
        <div class="div-line ignore-vw"></div>
        <div class="blog-wrap">
            <!-- 微博列表 -->
            <blog-list></blog-list>
        </div>
    </div>
</template>

<script>
import { getUserInfo } from "../../api/user";
import { setStorage } from "../../utils/storage";
import BlogList from "@/components/BlogList.vue";
import UserHeader from "@/components/userHeader.vue";
console.log("哈哈哈哈哈哈哈");
export default {
    components: {
        BlogList,
        UserHeader,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style scoped lang="scss">
.blog-wrap {
    padding-top: 20px;
}
</style>
