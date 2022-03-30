<template>
  <div :style="bgImg" style="background-attachment: fixed;
  background-repeat:no-repeat;
  background-size: 100%;width: 100%;height: 100vh; overflow: hidden;">
    <div style="width: 400px;height:480px;margin: 100px auto;
      background: rgba(218,216,216,0.8);border-radius: 10%;box-shadow: 5px 5px 10px #2c3e50;">
      <div style="color:#34495e;font-size: 30px;text-align: center;padding: 30px">欢迎注册</div>
      <div style="width: 300px;margin-left: 50px" >
        <el-form ref="form" :model="form" size="normal" :rules="rules">
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user-solid" style="box-shadow: 5px 5px 10px  #2c3e50;" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="nickName">
            <el-input prefix-icon="el-icon-phone" style="box-shadow: 5px 5px 10px  #2c3e50;" v-model="form.nickName"></el-input>
          </el-form-item>
          <el-form-item prop="sex" style="box-shadow: 5px 5px 10px  #2c3e50;">
            <el-select  placeholder="请选择您的性别信息" v-model="form.sex" style="width: 100%">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
              <el-option label="不便透露" value="未知"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" style="box-shadow: 5px 5px 10px  #2c3e50;" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item prop="confirm">
            <el-input prefix-icon="el-icon-lock" style="box-shadow: 5px 5px 10px  #2c3e50;" v-model="form.confirm" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="box-shadow: 5px 5px 10px  #2c3e50;margin-left: 70px" @click="register">注 册</el-button>
            <el-button type="primary" style="box-shadow: 5px 5px 10px  #2c3e50;" @click="this.$router.push('/login')">返 回</el-button>
          </el-form-item>
        </el-form>
      </div>


    </div>
  </div>

</template>

<script>
import request from "../utils/request";

const url = require("../assets/login1.png");

export default {
  name: "Register",
  data() {
    return {
      form: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        nickName: [
          {required: true, message: '请输入联系方式', trigger: 'blur'},
        ],
        sex: [
          {required: true, message: '请输入性别信息', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
        confirm: [
          {required: true, message: '请确认密码', trigger: 'blur'},
        ],
      },
      bgImg: {
        backgroundImage: "url(" + url + ")"
      }
    }
  },
  methods: {
    register() {
      if (this.form.password !== this.form.confirm) {//验证密码
        this.$message({
          type: "error",
          message: '两次密码输入不一致'
        })
        return
      }
      this.$refs['form'].validate((valid) => {
        if (valid) {
          request.post("/api/user/register", this.form).then(res => {
            if (res.code === '0') {
              this.$message({
                type: "success",
                message: "注册成功"
              })
              this.$router.push("/login")//注册成功之后进行页面的跳转，跳转到登录界面
            } else {
              this.$message({
                type: "error",
                message: res.msg
              })
            }
          })
        }
      })
    },
  }
}
</script>

<style scoped>

</style>