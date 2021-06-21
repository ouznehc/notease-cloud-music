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
        sass: {
          prependData: `
            @import "@/style/variables.scss";
            @import "@/style/mixin.scss";
          `
        },
      },
    },
}