<template>
    <div>
        <div class="user-info">
            <span class="user-bg"></span>
            <router-link class="user-header-bg" to="/user">
                <img src="../assets/images/head.png" class="user-h" alt="" />
            </router-link>
        </div>
        <div class="user-info-txt">
            <div class="name">{{ userInfo.nickName }}</div>
            <div class="focu-wrap">
                <div class="focu-item">
                    <router-link class="focu-item-i" to="/user">
                        <span class="t">微博 </span>
                        <span> 44</span>
                    </router-link>
                </div>
                <div class="focu-item">|</div>
                <div class="focu-item">
                    <router-link
                        class="focu-item-i"
                        :to="{ path: '/focu', query: { type: 'tab2' } }"
                    >
                        <span class="t">关注 </span>
                        <span> 44</span>
                    </router-link>
                </div>
                <div class="focu-item">|</div>
                <div class="focu-item">
                    <router-link
                        class="focu-item-i"
                        :to="{ path: '/focu', query: { type: 'tab2' } }"
                    >
                        <span class="t">粉丝 </span>
                        <span> 44</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * @description 获取头部用户信息，如果是登录用户，从本地缓存获取。如果是列表用户。
 */

export default {
    props: {
        userInfo: {
            type: Object,
            required: true,
        },
    },
    setup() {},
};
</script>
<style scoped lang="scss">
.user-info {
    position: relative;
    height: 130px;
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
    background: url("../assets/images/bg.png") center 0 no-repeat;
    background-size: 100%;
}
</style>