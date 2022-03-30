<template>
  <div style="background-color:#abb2b9;height: 50px;line-height: 50px;border-bottom: 1px solid #ccc;display: flex ">
    <div style="width: 200px;padding-left: 30px;font-weight: bold;color:  #eafaf1">666点餐系统</div>
    <div style="flex:1"></div>
    <div style="width:100px">

      <el-dropdown>
  <span class="el-dropdown-link" style="color: #f2f2f2">选项<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/person')">个人信息</el-dropdown-item>
            <el-dropdown-item @click="$router.push('/select')">开通会员</el-dropdown-item>
            <el-dropdown-item @click="$router.push('/login')">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      form: {},

    }
  },
  created() {
    let str = sessionStorage.getItem("user") || "{}"
    this.form = JSON.parse(str)
  },

}
</script>

<style scoped>

</style>