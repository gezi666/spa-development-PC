<template>
  <div class="scenes-one">
  <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'scenes-1',
  data () {
    return {
      msg: '欢迎来到jusfoun'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scenes-one h2{
    font-size: 30px;
    text-align: center;
    line-height:20;
  }
</style>
