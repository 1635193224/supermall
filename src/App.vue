<template>
  <div id="app">
    <router-view></router-view>
    <MainTableBar/>
  </div>
</template>
<script>
import MainTableBar from "components/content/MainTableBar"


export default {
  components:{
    MainTableBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
