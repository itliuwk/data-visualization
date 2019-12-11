
module.exports = {
    // ...
    // publicPath: '../v1',
    // outputDir:'v1',
    css: {
        loaderOptions: {
            sass: {
                // 根据自己样式文件的位置调整
                // data: `@import "@/styles/global.scss";`
            }
        }
    },
    productionSourceMap: false, //不生成 map
    devServer:{
        open: true,
        port:9099
    }
};
