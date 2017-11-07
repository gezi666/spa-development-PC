<template>
  <div class="boot-page">
    <navBar></navBar>
    主页面
  </div>
</template>

<script>
import navBar from 'components/navBar/navBar'
export default {
  name: 'bootPage',
  data () {
    return {
      msg: 'Welcome to 金融小场景'
    }
  }, 
  components:{
    navBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../../assets/css/variable.scss";
@import "./../../assets/css/mixin.scss";


.boot-page {
  width: 1280px;
  margin: auto;
  color: #000
}

</style>
