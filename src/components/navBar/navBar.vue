<template>
  <div class="nav-bar-wrapper">
     <ul>
        <router-link class="item" tag="li" :to="{name:'BootPage'}">路由1</router-link>
        <router-link class="item" tag="li" :to="{name:'scenesOne'}">路由2</router-link>
      </ul>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'component_name',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";
.nav-bar-wrapper{
  margin: 20px auto;
  ul{
    li{
       width: 200px;
       height: 35px;
       line-height: 35px;
       text-align: center;
       color: $cl-text1;
       border: 1px solid #ccc;
       &.router-link-exact-active{
        color: red;
       }
    }
  }
}

</style>
