# vue pc 模板

> A Vue.js project

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
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

##九次方前端模板对脚手架的一些文件更改说明

1，`build/webpack.base.conf.js`
这里做了一些配置别名的方法
```resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'common': resolve('src/common'),
            'components': resolve('src/components'),
            'pages': resolve('src/pages'),
            'base': resolve('src/base'),
            'api': resolve('src/api'),
            'assets': resolve('src/assets')
        }
    },
```
我们常用的目录文件基本都可以通过下面引用方式引用，无须关心真实路径
```
import 你的组件 from 'compenents/你的组件'
```

2，`build/utils.js` 解决打包后背景图片显示不出来的问题
```
//背景图显示不出来需要修改这里 
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        publicPath:'../../'
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```


## sass介绍
目前九次方前端开发大家尽量使用统一的CSS预编译语言`sass`，可以方便我们公共出来一些CSS效果，方便统一管理和快速开发

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

所有组件进入SASS变量及宏

```
<style lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";

.testCss{
  color:$cl-text;   /*sass变量*/
  font-size: 30px;
  height: 100px;
  width: 200px;
  @include linear(#00b8fe,#1846a3,90deg); /*sass宏*/
  @extend %no-wrap;       /*占位片段，此代码作用是css溢出省略号*/
  span{
    color:$cl-text;
  }  
}
</style>
```


## 封装组件

模板中有一个封装图表组价的列子，我们封装组件的原则是使组件做到高内聚，低耦合，即组件可以随意复用，逻辑内部实现，通过传进来的参数不同做不同的渲染。 

父组件中：
```
<div class="echarts-wrapper" style="height:300px;">
      <echartsBar :echartsData="echartsData" @handleCharts="handleCharts"></echartsBar>
</div>  
```


子组件中：
```
mounted() {
    this.$nextTick(()=>{
         this.myChart = this.$echarts.init(this.$refs.chart);
      this.initChart()
    })
  },
  methods: {
   initChart() {
                            
      let option = {
          color: ['#3398DB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {
                  type : 'shadow'
              }
          }
          ....
      }  
      this.myChart.on('click',(params) =>{
          this.$emit('handleCharts',params.name)
      })
      this.myChart.setOption(option);

    }
   
  },
```

以此图表组件为例，柱图的配置在组件内部定义，我们只传入数据，可在项目任意地方复用，详情请参考模板中的代码


##element ui 介绍
目前PC项目 建议大家使用elemet ui  模板中 `pages/boot-page/index.vue`中有弹出框实列
