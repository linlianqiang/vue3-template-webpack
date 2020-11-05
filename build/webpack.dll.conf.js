const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: "production",
    entry: {
        vue: ["vue", "vue-router", "vuex"]
    },
    output: {
        filename: "[name].dll.js",
        path: path.resolve(__dirname, "dll"),
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({ //生成动态链接文件 描述
            name: "name", //library
            path: path.resolve(__dirname, "dll/[name].manifest.json")
        })
    ]
}