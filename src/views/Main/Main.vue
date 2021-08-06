<template>
  <div>
    <Navbar class="navBar">
      <div slot="navLeft"></div>
      <div slot="navMiddle">购物街</div>
      <div slot="navRight"></div>
    </Navbar>
  </div>
</template>
<script>
import {navData} from 'network/main'

import Navbar from 'components/commom/navbar/Navbar'

export default {
  data(){
    return{
      chartData:null
    }
  },
  components:{
    Navbar
  },
  created(){
    navData({
      url:'home/multidata'
    }).then(res=>{
      console.log(res);
      this.chartData = res.data.data.recommend.list
      console.log(this.chartData);
    },err=>{
      console.log(err);
    })
  }
}
</script>
<style scoped>
.navBar{
  background-color: rgb(255, 145, 144);
  color:#fff
}
</style>