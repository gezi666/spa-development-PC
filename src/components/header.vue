<template>
    <div class="header-wrap">
      <ul>
        <!-- tag="li" 可以设定 router-link生成什么样的页面元素 -->
        <router-link class="item" tag="li" :to="{name:'home'}">
          首页
        </router-link>
        <router-link class="item" tag="li" :to="{name:'page1'}">
          sass简易使用
        </router-link>
        <router-link class="item" tag="li" :to="{name:'page2'}">
          element ui
        </router-link>
        <router-link class="item" tag="li" :to="{name:'page3'}">
          组件封装
        </router-link>
      </ul>
    </div>
</template>

<script type="text/javascript">

  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .header-wrap{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #333;
    ul{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      li{
        color: $cl-txt-hl;
        padding: 0 20px;
        cursor: pointer;
        &.active{
          color: red
        }
      }
    }

  }

</style>

