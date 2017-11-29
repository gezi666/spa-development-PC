# vue pc 模板

## 11月21日更新版本 vue=>2.5.2 / element-ui=>2.0.5 / echarts => 3.8.5



### 1.配置项
    > 修改端口：                   `config/index.js`
    > build之后修改路径 :          `config/index.js` --assetsPublicPath: './'
    > build之后背景图不显示问题：   `build/utils.js`  -- publicPath:'../../'
    > 配置文件别名：               `build/webpack.base.conf.js` 

### 2.sass
    > sass的宏(函数)，变量存放于 `assets/css` 下
    > 每个组件需要单独引入 `@import "~assets/css/variable"; @import "~assets/css/mixin";`
    > sass的基本用法请参考 sass简易使用 标签页
    > 附CSS目录文件夹
        ```
        |-- css                       // css主文件加
        |   |-- _button.scss          // 按钮的一些样式
        |   |-- _frame.scss           //框架级的样式
        |   |-- _mixin.scss           //sass宏
        |   |-- _public.scss          // 公共样式文件
        |   |-- _variable.scss        // sass变量
        |   |-- index.sass            // 引入所有scss文件到main.js 
        |   |-- reset.css             // 重置文件
        ```

### 3.换肤功能
    > components/theme/theme.vue下是换肤组件 在任何地方都可以引入
    > 通过vuex将选中的颜色class存储,在app.vue中通过改变根组件的class名实现换肤
    > 已加入本地存储 刷新页面后仍保留上次选中的皮肤


### 4.element ui
    >模板中 element ui已经做了默认安装 版本2.0.5 使用参考 element ui标签页


### 附录：模板文档结构

```

## 目录结构
``` bash
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
    |-- api                          // 和后台联调封装的方法
|   |-- assets                       // 资源文件 CSS JS IMG
|   |-- components                   // vue公共组件
|   |-- pages                        // 所有页面
|   |-- router                       // 路由配置文件
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息

```








