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
<style scoped>

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
