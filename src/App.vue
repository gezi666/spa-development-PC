<template>
  <div id="app" class="app">
    <header>
      <div class="inner">
        <h1 class="logo"></h1>
        <div class="user-area"></div>
      </div>
    </header>
    
    <router-view class="main"></router-view>
    
    <footer>
       <span>京ICP备12012279号 版权所有 九次方大数据信息集团有限公司</span>
      <span>Copyright 2015 by Jusfoun.com. All Right Reserved</span>
    </footer>
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
    background-color: #000;
  }
  .inner{
    width: 1280px;
    display: flex;
    justify-content: space-between;
    margin:auto;
  }
  header h1{
    width: 150px;
    height:55px;
    background: url("./assets/img/logo.png") no-repeat center;
  }
  .user-area{
    width: 170px;
    height:55px;
    background: url("./assets/img/hotline.png") no-repeat center;
  }
  .main{
  min-height:calc(100vh - 110px);
 }
  footer{
    line-height:55px;
    height:55px;
    background-color: #000;
    color: #7E7D7F;
    display: flex;
    justify-content:space-around;
  }
</style>
