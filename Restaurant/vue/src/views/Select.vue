<template>
  <el-card class="box-card" style="height: 300px;width: 100px">
    <div>

      <el-button type="info" @click="$router.push('/vip')" style="width: 80%;height: 50px" label="普通会员">普通会员</el-button>

    </div>
    <div style="margin: 20px auto;">

      <el-button type="warning" @click="$router.push('/vip')" label="超级会员" style="width:80%;height: 50px ">超级会员
      </el-button>

    </div>
    <div style="margin-top: 20px;">
      <el-button type="danger" @click="$router.push('/vip')" label="尊贵会员" style="width:80%;height: 50px ">尊贵会员
      </el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Select"
}
</script>

<style scoped>

</style>