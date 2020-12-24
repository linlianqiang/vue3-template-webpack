<template>
    <div>
        <header-common title="关注"></header-common>
        <div class="focu-wrap">
            <div class="header">
                <span
                    @click="tabFun('tab1')"
                    :class="
                        (nowActive === 'tab1' ? 'active' : '') + ' focu-type'
                    "
                    ><span>关注的人</span>
                </span>
                <span
                    @click="tabFun('tab2')"
                    :class="
                        (nowActive === 'tab2' ? 'active' : '') + ' focu-type'
                    "
                    ><span>粉丝</span></span
                >
            </div>
            <div class="div-line ignore-vw"></div>
            <div class="u-list-wrap">
                <div class="focu-item" v-for="item in userList" :key="item.id">
                    <div class="item-img">
                        <img src="../../assets/images/head.png" alt="" />
                    </div>
                    <div class="item-info">
                        <div class="name">{{ item.name }}</div>
                        <div>
                            <span class="n">粉丝 2万</span>
                            <span class="n">微博 45</span>
                        </div>
                        <div class="des">正正经经的博主</div>
                    </div>
                    <div v-show="nowActive === 'tab1'" class="focus-btn">
                        取消关注
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCommon from "@/components/HeaderCommon";

export default {
    components: { HeaderCommon },
    data() {
        const type = this.$route.query.type;
        return {
            hide: false,
            nowActive: type,
            userList: [
                { name: "llq", id: 1 },
                { name: "llq2", id: 12 },
            ],
        };
    },
    async created() {
        console.log("created");
        // this.userList = await blogList({
        //     isadmin: 1,
        // });
    },
    methods: {
        tabFun: function (type) {
            this.nowActive = type;
        },
    },
};
</script>
<style scoped lang="scss">
.focu-wrap {
    .header {
        height: 40px;
        display: flex;
        font-size: 14px;
        flex-direction: row;
        overflow: hidden;
        .focu-type {
            height: 38px;
            line-height: 38px;
            flex-grow: 1;
            text-align: center;
        }
        .active {
            span {
                padding-bottom: 4px;
                border-bottom: 2px solid rgb(241, 142, 0);
            }
        }
    }
}
.focu-item {
    padding: 0 10px 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f9f9f9;
    .item-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .item-info {
        padding: 0 10px;
        flex-grow: 1;
        .name {
            font-size: 16px;
            color: #333;
            margin-bottom: 8px;
        }
        .n {
            display: inline-block;
            margin-right: 10px;
            background: #f7f7f7;
            color: #666;
            padding: 4px 6px;
        }
        .des {
            margin-top: 10px;
            color: #666;
        }
    }
}
.name {
    flex-grow: 1;
}
.u-list-wrap {
    padding-top: 10px;
}
</style>
