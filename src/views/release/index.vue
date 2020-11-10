<!--
    @description 创建博客页面：选择图片，最多上传9张，每张不超过1M。
    @author LLQ
-->
<template>
    <div class="about">
        <div class="header-set ignore-vw">
            <span class="cancle">取消</span>
            <span class="tit">发趣事</span>
            <span class="send">发布</span>
        </div>
        <div class="textarea">
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="分享新鲜事..."
            ></textarea>
        </div>
        <div>
            <div id="imgBox"></div>
            <div class="send-oprate">
                <span @click="uploadImg" class="do-img"
                    >图片
                    <input class="do-upimg" type="file" id="imgFileUp" />
                </span>
                <span class="do-aite">@</span>
                <span class="do-topic">#</span>
            </div>
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
        // 初始化图片 change 事件
        this.imgClick = document.getElementById("imgFileUp");
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
            imageUploadShow(this.imgClick, imgBox, 9);
        },
        uploadImg() {
            this.imgClick.click();
        },
    },
};
</script>
<style lang="scss" scoped>
.header-set.ignore-vw {
    background: rgb(251, 251, 251);
    display: flex;
    padding: 0 10px;
    align-items: center;
    height: 40px;
    color: #666;
    .cancle {
    }
    .tit {
        font-size: 16px;
        flex-grow: 1;
        text-align: center;
    }
    .send {
        color: rgb(241, 142, 0);
    }
}
.textarea {
    height: 150px;
    padding: 10px;
    textarea {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.send-oprate {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    background: rgb(251, 251, 251);
    display: flex;
    align-items: center;
    span {
        text-align: center;
        flex-grow: 1;
    }
    .do-upimg {
        display: none;
    }
}
</style>
