# Node+MongoDB 制作的酒店房间管理系统源码后台，前台页面的制作在另一个项目当中

> 本人是一个前端工程师（页面仔），通过这项目的学习和制作，能把一个业务从前端到后台再到数据库打通吧，如果说这个就是全栈工程师所要具备的基础能力，那可能我勉强算是一个全栈了吧（哈哈哈哈哈）。。。

> 这里只会说明项目如何在本地能跑起来，代码的上线及发布后续可能会补。。。看心情吧。。。


## 项目概述

#### 项目背景
本项目为利用业余时间帮助朋友做的一个项目，并没有什么太高深的技巧，因为也是自学的第一个可以用于生产环境的代码。

同时，也没有遇到过什么高并发之类的业务情况，仅仅是完成了功能的实现。

安全问题依托于阿里云的安全服务，并没有在代码和服务器中去做。


#### 项目使用技术
本项目为前后端分离项目，前端使用vue+vue-route+axios+element-ui的技术栈，后台使用Node(express)+MongoDB。


## 项目安装及运行

项目代码的拉取和依赖安装不再赘述

对了，要全局安装supervisor（主要是为了开发时修改了代码以后的自动重启，如果不喜欢用这个东西，可以不用，不了解的自行百度一哈~）

#### 启动MongoDB
1. 安装MongoDB，网上教程太多了

2. 开启mongodb: 

-   windows : ``net start MongoDB``
-   mac : ``mongod``

3. 关闭mongodb:

-   windows : ``net stop MongoDB``
-   mac : ``ctrl + c `` （退出即可）

4. 初始换数据库

   进入到``service/db``目录中执行``node initDB.js``。这样你的数据库中将会存在两个集合（表），分别是用户（两个，账号和密码自行查看）以及用户菜单（两套，因为路由在前端，后台只提供服务。）


#### 启动服务 

```
supervisor --harmony app
```
当然你也可以用``node app.js``

访问：http://127.0.0.1:3008/admin/

嗯，到现在项目算是跑起来了。


## 项目部分代码简介
- `config/index.js` — 项目的配置文件
- `dbtest/test.js` — 在项目的开发过程中测试一些封装的关于操作数据库的api是否正确
- `public` — 所有的静态文件，包括前端代码打包之后的html/css/js以及部分前端（2c）的脚本文件
- `service/api` — 所有的接口
- `service/db` — 封装的操作数据库的api
- `service/index.js` — 暴露给前端可通过ajax调用的接口
- `service/initDB.js` — 初始化数据库（主要是用于项目刚开始或者项目重置的时候使用）
- `app.js` — 项目入口文件