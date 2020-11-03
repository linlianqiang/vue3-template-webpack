<!--
    @description 创建博客页面：选择图片，最多上传9张，每张不超过1M。
    @author LLQ
-->
<template>
    <div class="about">
        <div class="header-set">
            <span>取消</span>
            <span class="tit">发趣事</span>
            <span class="send">发布</span>
        </div>
        <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="分享新鲜事"
        ></textarea>
        <div>
            <div id="imgBox"></div>
            <span
                >图片
                <input type="file" id="imgFileUp" />
            </span>
            <span>@</span>
            <span>#</span>
        </div>
    </div>
</template>
<script>
import { setStorage } from "../../utils/storage";
import { imageUploadShow } from "@/utils/util";
export default {
    created() {
        setStorage("name", "llq");
    },
    mounted() {
        this.fileUp();
    },
    methods: {
        /**
         * @description 图片上传,最多9张，不超过1M
         * @author LLQ
         */
        fileUp() {
            const imgBox = document.getElementById("imgBox");
            const imgUpload = document.getElementById("imgFileUp");
            imageUploadShow(imgUpload, imgBox, 9);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/release.scss";
</style>
