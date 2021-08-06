<template>
  <div class="navbar">
    <div class="navLeft"><slot name="navLeft"></slot></div>
    <div class="navMiddle"><slot name="navMiddle"></slot></div>
    <div class="navRight"><slot name="navRight"></slot></div>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style scoped>
.navbar{
  display: flex;
  height: 40px;
  box-shadow: 0 1px 1px #eee;
  text-align: center;
  line-height: 40px;
}
.navLeft,
.navRight{
  width: 40px;
}
.navMiddle{
  flex: 1;
}
</style>