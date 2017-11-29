<template>
  <div class="home-wrap">

        <theme></theme>
        <h3> 换肤相关说明：</h3>
        <p>1.components/theme/theme.vue下是换肤组件 在任何地方都可以引入</p>
        <p>2.通过vuex将选中的颜色class存储,在app.vue中通过改变根组件的class名实现换肤</p>
        <p>3.已加入本地存储 刷新页面后仍保留上次选中的皮肤</p>

  </div>


</template>

<script type="text/javascript">
  import theme from 'components/theme/theme'
  export default {
    name: 'home',
    data(){
      return {

      }
    },
    methods:{
    },
    components:{
       theme
    }
   }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

</style>
