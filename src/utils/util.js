
/**
 * @description 图片上传，立即显示
 * @param{Object} imgChange 点击图片上传的对象
 * @param{Object} imgWrap 上传后，图片显示的父级
 * @param{Number} len 最多上传几张
 * @returns 生成九宫格，宽高：80
 * @author LLQ
 */
function imageUploadShow(imgChange, imgWrap, len) {
    imgChange.addEventListener("change", function () {
        //获取已有的图片长度
        const curLength = imgBox.querySelectorAll("img").length;
        if (len <= curLength) return;
        // 创建读取文件对象
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.width = "80";
            img.height = "80";
            img.src = e.target.result;
            imgWrap.appendChild(img);
        };
        // 读取图片
        const imgFile = imgChange.files[0];
        reader.readAsDataURL(imgFile);
    });
}

/**
 * @description 深拷贝
 * @author LLQ
 *  */
export function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) {
        console.log('result22:', obj)
        return obj
    }

    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) { //不是通过原型继承来的
            // 递归调用!!
            result[key] = deepClone(obj[key])
        }
    }

    return result
}

function TT() {
    console.log('TT1')
}
TT()
export {
    imageUploadShow
}


