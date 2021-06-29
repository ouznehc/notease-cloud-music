# commit

## 1、更新目录

更新目录结构

<img src="/Users/chenzuo/Library/Application Support/typora-user-images/image-20210621173211357.png" alt="image-20210621173211357" style="zoom: 25%;" />

安装好需要的依赖，先安装几个简单的后面遇到再装。依赖OK，文件夹创建好后npm run dev运行，查看有问题：

>  ⚠️ 打印台报错  sockjs-node/info?t=x x x x x

解决:  小问题看博客解决 [sockjs-node/info?t=xxxxxx](https://blog.csdn.net/qq_41064597/article/details/118083665)

## 2、引入样式

> 在 src 目录下的 style 文件夹下新建文件 index.scss 作为出口，在其中引用重置浏览器、element-ui、app样式的文件。

- 安装生产依赖 `"element-ui": "^2.13.2",` ⚠️官网说要要在入口引入element-ui 的css样式表，所以在mai n.js入口处同时引入：

  ```js
  // main.js
  import 'element-ui/lib/theme-chalk/index.css'
  import '@/style/index.scss'
  ```

- 配置 vue.config.js： 在src同级目录新建文件vue.config.js，其中配置别名，css的loaderOptions



## 3、全局按需引入UI组件

> 在 utils 工具类 global.js 文件中引入 element-ui 和 base文件夹下的基础组件

require.context 是 Webpack 中用来管理依赖的一个函数,此方法会生成一个上下文模块,包含目录下所有模块的引用,通过正则表达式匹配,然后 require 进来

require.context(directory, useSubdirectories, regExp

- directory: 要查找的文件路径
- useSubdirectories: 是否查找子目录
- regExp: 要匹配文件的正则



## 4、响应式rem

> 依赖 *postcss-pxtorem*（自动处理 rem）

安装开发依赖 `npm install postcss-pxtorem -D`

需要在vue.config.js 作配置

```js
module.exports = {
	...
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
              rootValue: 14, // 换算的基数：设计稿元素尺寸/rootValue，比如元素宽28px,最终页面会换算成 2rem
              propList: ['*']
            })
          ]}
      }
    }
  ...
}
```



>  在utils 中新建 rem.js

为页面resize增加监听事件，动态设置根节点的字体大小，暴露方法供其他地方设置rem大小

⚠️resize 事件最好加上 throttle





## 5、引入字体图标

> 直接引入 font.css 字体图标静态文件

⚠️需要在main.js作引入，直接public文件家乡的html 入口文件不能引入src文件下的文件，是打包后目录结构改变



## 6、全局弹窗组件

> 基础组件<Confirm/>使用Vue.extend + $mount 创建DOM， Vue.prototype全局挂载

具体查看 src/base/confirm.vue ，导出confirm方法/ 组件 和 全局挂载 confirm方法`Vue.prototype.$confirm = confirm;`



## 7、封装axios网络请求

> 通过拦截器对使用vuex对axios 做loading封装

创建实例时配置可以抽离到全局的配置config.js文件中
