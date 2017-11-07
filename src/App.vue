<template>
  <div id="app" class="app">
    <header>
      header
    </header>    
    <router-view class="main"></router-view>    

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
  .app{
    min-width:1280px;
  }
  header{
    height:55px;
    line-height: 55px;
    text-align: center;
    background-color: #000;
  }

</style>
