<!--
    @description 创建博客页面：选择图片，最多上传9张，每张不超过1M。
    @author LLQ
-->
<template>
    <div class="about">
        <div class="header-set ignore-vw">
            <a href="javascript: history.go(-1);" class="cancle">取消</a>
            <span class="tit">发趣事</span>
            <span @click="sendBlog" class="send">发布</span>
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
                <span @click="clickInputFile" class="do-img"
                    >图片
                    <input class="do-upimg" type="file" id="inputFile" />
                </span>
                <span class="do-aite">@</span>
                <span class="do-topic">#</span>
            </div>
        </div>
    </div>
</template>
<script>
import { imageUploadShow } from "@/utils/util";
import { onMounted } from "vue";
function useSendBlog() {}
export default {
    setup() {
        let imgClick = null;
        onMounted(() => {
            imgClick = document.getElementById("inputFile");
            let imgBox = document.getElementById("imgBox");
            imageUploadShow(imgClick, imgBox, 9); //切勿重复监听
        });
        /**
         * @description 点击inputFile
         */
        const clickInputFile = function () {
            imgClick.click();
        };
        /**
         * @description 创建微博
         */
        const sendBlog = function () {};
        return {
            clickInputFile,
            sendBlog,
        };
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
        color: #666;
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
