module.exports = {
    // 给文件夹起别名
    configureWebpack: {
      resolve: {
        alias:{
          "@": "/src"
        }
      }
    },
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
              rootValue: 14, // 换算的基数：设计稿元素尺寸/rootValue，比如元素宽28px,最终页面会换算成 2rem
              propList: ['*']
            })
          ]
        },
        sass: {
          prependData: `
            @import "@/style/variables.scss";
            @import "@/style/mixin.scss";
          `
        },
      },
    },
}