<template>
  <div id="app">
    <HeaderWrap></HeaderWrap>
    <router-view/>
  </div>
</template>

<script>
import HeaderWrap from 'components/header.vue'
export default {
  name: 'app',
  components:{
    HeaderWrap
  }
}
</script>

<style>

</style>
