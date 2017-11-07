<template>
  <div class="scenes-one">
    <navBar></navBar>
    场景一
  </div>
</template>

<script>
import navBar from 'components/navBar/navBar'
export default {
  name: 'scenes-1',
  data () {
    return {
      msg: '欢迎来到jusfoun'
    }
  },
  components:{
    navBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";
  .scenes-one{
     width: 1280px;
     margin: auto;
     color: $cl-text1;
    h2{
      font-size: 30px;
      text-align: center;
      line-height:20;
      color: $cl-text1;
    }
  }

</style>
