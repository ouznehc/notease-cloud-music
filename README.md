# Notease-cloud-music（网抑云）

## 1、简介

##### 🎵基于Vue2、Vue-CLI3的网抑云mac客户端播放器（PC） Online Music Player

![首页](https://user-images.githubusercontent.com/23615778/62509203-da358580-b83c-11e9-97b3-367fb06a8347.png)



![歌单列表](https://user-images.githubusercontent.com/23615778/62509204-dace1c00-b83c-11e9-8d3f-0bcb93e3aab7.png)



![歌单详情](https://user-images.githubusercontent.com/23615778/62509201-d99cef00-b83c-11e9-8e4b-b122b8b94468.png)



![音乐播放](https://user-images.githubusercontent.com/23615778/62509202-da358580-b83c-11e9-98e1-530e5741ff56.png)



## 2、环境

网易云音乐 NodeJS 版 API，跨站请求伪造 (CSRF), 伪造请求头 , 调用官方 API。拉下来本地用node 跑起来就可以调用了

接口地址：

>  https://binaryify.github.io/NeteaseCloudMusicApi

按顺序执行下面的命令

```js
git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git

npm install

cd NeteaseCloudMusicApi

node app.js
```







技术栈：

> - ***Vue*** 全家桶 Vue-CLI3 create 出来的。
> - ***Element-Ui*** 魔改样式。
> - ***better-scroll*** 歌词滚动部分用了黄轶老大的 （贼爽）
> - ***CSS Variables*** 主题换肤。
> - ***ES 6 / 7*** （JavaScript 语言的下一代标准）
> - ***Sass***（CSS 预处理器）
> - ***postcss-pxtorem***（自动处理 rem，妈妈再也不用担心屏幕太大太小了）
> - ***workbox-webpack-plugin*** 谷歌开发的利用 Service Work 预缓存 chunks 的 webpack 插件。



## 3、安装与使用

npm i

npm run dev

## 4、链接

[代码工具人](https://github.com/chen-zuo)

[仓库地址](https://github.com/chen-zuo/notease-cloud-music)

## study

构建笔记已经记录在同目录下的文件中

 => 查看PROCESS.md