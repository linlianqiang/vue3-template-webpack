<!--
* @description: 博客首页：头部个人信息，及博客列表
* @author： 林连强
*
-->
<template>
    <div class="weibo">
        <!-- 顶部用户信息 -->
        <user-header :userInfo="userInfo"></user-header>
        <router-link class="to-write" to="/release">
            <svg-icon icon-class="edit"></svg-icon>
        </router-link>
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
            <!-- 微博列表 -->
            <blog-list blogListType="blogListType"></blog-list>
        </div>
    </div>
</template>

<script>
import { getStorage } from "../../utils/storage";
import BlogList from "@/components/BlogList.vue";
import UserHeader from "@/components/userHeader.vue";
import { onMounted, reactive, ref } from "vue";
/**
 * @description 实现tab切换，切换博客列表数据类型：热点、关注。
 * @returns blogListType: 博客列表类型 ； tabActive： tab方法。nowActive：当前tab节点。
 * @author LLQ
 */
function useTabNav() {
    let nowActive = ref("tab1");
    let blogListType = ref("hot");
    function tabActive(e) {
        nowActive.value = e.target.dataset.id;
        blogListType.value = e.target.dataset.id === "tab1" ? "hot" : "focus";
    }
    return {
        blogListType,
        nowActive,
        tabActive,
    };
}
/**
 * @description 获取登录用户信息。
 */
function useGetUserInfo() {
    const userInfo = {
        nickName: "假用户名",
    };
    return {
        userInfo: reactive(userInfo),
    };
}
export default {
    components: {
        BlogList,
        UserHeader,
    },
    data() {},
    setup() {
        onMounted(async () => {
            // 获取微博数量
            // 获取关注数量
            // 获取粉丝数量
        });
        let { nowActive, tabActive } = useTabNav();
        let { userInfo } = useGetUserInfo();
        return {
            nowActive,
            tabActive,
            userInfo,
        };
    },
    methods: {},
};
</script>
<style scoped lang="scss">
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
        padding: 0 10px 4px;
    }
    .active {
        font-size: 16px;
        border-bottom: 2px solid rgb(241, 142, 0);
        color: #000;
    }
}
.to-write {
    position: absolute;
    right: 10px;
    top: 20px;
}
</style>
