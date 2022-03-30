<template>
  <div>
    <el-card style="width: 40%;margin:10px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="会员信息">
          <el-input v-model="form.vip" disabled></el-input>
        </el-form-item>
        <!--        <el-form-item label="地址">-->
        <!--          <el-input v-model="form.address" disabled></el-input>-->
        <!--        </el-form-item>-->
      </el-form>
      <div style="text-align: center">
        <el-button type="primary" @click="update">保存</el-button>
        <el-button type="primary" @click="this.$router.push('/menu')">退出</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Person",
  data() {
    return {
      form: {}
    }
  },
  created() {
    let str = sessionStorage.getItem("user") || "{}"
    this.form = JSON.parse(str)
  },
  methods: {
    update() {
      request.put("/api/user", this.form).then(res => {
        console.log(res)
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "更新成功"
          })
          sessionStorage.setItem("user", JSON.stringify(this.form))
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>