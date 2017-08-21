<template>
  <div class="boot-page">
    <nav>
      <ul>
        <router-link tag='li' v-for="i in 6" class="list-item" to='/scenes-1' key='i'>
          tab
        </router-link>
      </ul>
    </nav>
    <List-tab class="tab-list"></List-tab>
    <div class="testCss">
      <span>
        测试sassssssssssssssssssssssss
      </span>
      
    </div>
    <div class="btn btn-submit">click</div>
  </div>
</template>

<script>
import ListTab from '@/pages/boot-page/components/list.vue'
export default {
  name: 'bootPage',
  data () {
    return {
      msg: 'Welcome to 金融小场景'
    }
  },
  components:{
    ListTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../../assets/css/_variable.scss";
@import "./../../assets/css/_mixin.scss";

.testCss{
  color:$cl-text;
  font-size: 30px;
  height: 100px;
  width: 200px;
  @include linear(#00b8fe,#1846a3,90deg);
  @extend %no-wrap;
  span{
    color:$cl-text;
  }  
}




.boot-page,nav {
  width: 1280px;
  margin: auto;
}
  nav ul{
    display: flex;
    width: 100%;
    height:55px;
  }

  nav li{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #333333;
  }
  .tab-list{
    display: flex;
    min-height:calc(100vh - 165px);
    align-items: center;
    justify-content: center;
  }
</style>
