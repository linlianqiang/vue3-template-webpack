<template lang="">
    <div class="common-header">
        <span @click="back" class="back">back</span>
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            require: true,
        },
    },
    methods: {
        back() {
            javascript: history.back(-1);
        },
    },
};
</script>
<style lang="scss">
.common-header {
    position: relative;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(251, 251, 251);
    font-size: 16px;
    color: #333;
    .back {
        color: #999;

        position: absolute;
        top: 10px;
        left: 10px;
    }
}
</style>