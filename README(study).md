# commit

## 1、更新目录

更新目录结构

![image-20210621173211357](/Users/chenzuo/Library/Application Support/typora-user-images/image-20210621173211357.png)

安装好需要的依赖，先安装几个简单的后面遇到再装。依赖OK，文件夹创建好后npm run dev运行，查看有问题：

>  ⚠️ 打印台报错  sockjs-node/info?t=x x x x x

解决:  小问题看博客解决 [sockjs-node/info?t=xxxxxx](https://blog.csdn.net/qq_41064597/article/details/118083665)

## 2、引入样式

- 在 src 目录下的 style 文件夹下新建文件 index.scss 作为出口，在其中引用重置浏览器、element-ui、app样式的文件。

- 安装生产依赖 `"element-ui": "^2.13.2",` ⚠️官网说要要在入口引入element-ui 的css样式表，所以在mai n.js入口处同时引入：

  ```js
  // main.js
  import 'element-ui/lib/theme-chalk/index.css'
  import '@/style/index.scss'
  ```

- 配置 vue.config.js： 在src同级目录新建文件vue.config.js，其中配置别名，css的loaderOptions



