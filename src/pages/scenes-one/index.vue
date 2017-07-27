<template>
  <div class="scenes-one">
  <h2>{{msg}}</h2>
  <router-link to='/scenes-1/1'>子页面1</router-link>
  <router-link to='/scenes-1/2'>子页面2</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'scenes-1',
  data () {
    return {
      msg: '金融小场景1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scenes-one{
    width: 1280px;
    margin:100px auto;
  }
  h2{
    font-size: 30px;
  }
</style>
