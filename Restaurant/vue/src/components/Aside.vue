<template>
  <div style="width: 200px;height:calc(100vh - 49px );background-color:#545c64; ">
  <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="width: 200px;min-height: calc(100vh - 50px)"
        default-active="menu"
        router
        :default-openeds="[1]"
        class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>菜单</template>
        <el-menu-item index="menu">店主推荐</el-menu-item>
        <el-menu-item index="hymenu">淮扬菜</el-menu-item>
        <el-menu-item index="dbmenu">东北菜</el-menu-item>
        <el-menu-item index="drink">酒水</el-menu-item>
        <el-menu-item index="rice">主食</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="user">提交订单</el-menu-item>
      <!--      <el-menu-item index="data">数据管理</el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",

}
</script>

<style scoped>

</style>