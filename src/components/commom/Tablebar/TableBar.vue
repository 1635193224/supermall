<template>
  <div class="tableBar">
    <slot></slot>
  </div>
</template>
<script>

export default {
  
}
</script>

<style scoped>
.tableBar{
  height: 49px;
  width: 100%;
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  left: 0;
  bottom: 0;
  /* right: 0; */
  box-shadow: 0 -1px 1px #ccc;
  background-color: #eee;
}
</style>
