module.exports = {
    // 预设
    presets: [[
        '@vue/cli-plugin-babel/preset',
        // '@babel/preset-env',
        {
            modules: false,//babel 统一将 js 模块化语法转为 commonJS 风格,关闭此选项，不再编译es6语法
            "targets": {  //浏览器市场份额，范围越小，体积越小。看项目需求
                "browsers": [">0.25%"]
            },
            "useBuiltIns": 'usage' //polifill 只用在部分需要用到的地方
        }
    ]],
    //转换插件，来解析语法并转换
    plugins: [

        // "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-transform-runtime",
        '@babel/plugin-syntax-dynamic-import'
    ]
}
