<template>
  <div class="tableBarItem" @click="itemClick">
    <div class="tableBarIetmImg">
      <slot v-if="!isActive" name="tableBarImg"></slot>
      <slot v-else name="tableBarActiveImg"></slot>
    </div>
    <div :style="activeColorChange"><slot name="tableBarText"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#d81e06",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColorChange() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped>
.tableBarItem {
  flex: 1;
  text-align: center;
  font-size: 11px;
  font-weight: 800;
  color: #707070;
}
.tableBarItem .tableBarIetmImg img {
  width: 25px;
  height: 25px;
  margin: 5px 0 2px 0;
  box-sizing: border-box;
}
.isActive {
  color: #d81e06;
}
</style>