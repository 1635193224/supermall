<template>
  <div>
    <TableBar>
      <TableBarItem path='/home'>
        <img src="~assets/img/TableBar/main.png" alt="" slot="tableBarImg" />
        <img src="~assets/img/TableBar/main_active.png" alt="" slot="tableBarActiveImg" />
        <p slot="tableBarText">首页</p>
      </TableBarItem>
      <TableBarItem path='/category'>
        <img src="~assets/img/TableBar/category.png" alt="" slot="tableBarImg" />
        <img src="~assets/img/TableBar/category_active.png" alt="" slot="tableBarActiveImg" />
        <p slot="tableBarText">分类</p>
      </TableBarItem>
      <TableBarItem path='/shopcart'>
        <img src="~assets/img/TableBar/shopcart.png" alt="" slot="tableBarImg" />
        <img src="~assets/img/TableBar/shopcart_active.png" alt="" slot="tableBarActiveImg" />
        <p slot="tableBarText">购物车</p>
      </TableBarItem>
      <TableBarItem path='/profile'>
        <img src="~assets/img/TableBar/profile.png" alt="" slot="tableBarImg" />
        <img src="~assets/img/TableBar/profile_active.png" alt="" slot="tableBarActiveImg" />
        <p slot="tableBarText">个人</p>
      </TableBarItem>

    </TableBar>
  </div>
</template>

<script>
import TableBar from "components/commom/Tablebar/TableBar";
import TableBarItem from "components/commom/Tablebar/TableBarItem";

export default {
  components: {
    TableBar,
    TableBarItem,
  },
};
</script>