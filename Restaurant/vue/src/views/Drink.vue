<template>
  酒水
  <!--  <div>-->
  <!--    <div>-->
  <!-- 大盒子中的一项 -->
  <div style="background-attachment: fixed">
    <div style="display: inline-block;margin-left: 10px;">
      <img src="../assets/maotai.png" alt="飞天茅台" title="飞天茅台"
           :style="styleSet">
      <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">飞天茅台</p>
      <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 15px;color: #ff3750">3999元/瓶</p>
      <el-form :model="drinkform" label-width="100px">
        <el-form-item>
          <el-input-number @change="drinksave" v-model="ftmt" :min="0" :max="10"/>
        </el-form-item>
      </el-form>
    </div>

    <!--        <div style="display: inline-block;margin-left: 10px;">-->
    <!--          <img src="../assets/wuliangye.png" alt="五粮液" title="五粮液"-->
    <!--               :style="styleSet">-->
    <!--          <p style="height: 36px;-->
    <!--				background-color: #f2f2f2;-->
    <!--				margin:0;-->
    <!--				text-align: center;-->
    <!--				line-height: 36px;-->
    <!--				font-size: 26px;">五粮液</p>-->
    <!--        </div>-->

    <!--        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">-->
    <!--          <img src="../assets/mengzhilan.png" alt="梦之蓝" title="梦之蓝"-->
    <!--               :style="styleSet">-->
    <!--          <p style="height: 36px;-->
    <!--				background-color: #f2f2f2;-->
    <!--				margin:0;-->
    <!--				text-align: center;-->
    <!--				line-height: 36px;-->
    <!--				font-size: 22px;">梦之蓝</p>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--      <div>-->

    <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
      <img src="../assets/tea1.png" alt="西湖龙井" title="西湖龙井"
           :style="styleSet">
      <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">西湖龙井</p>
      <el-form :model="drinkform" label-width="100px">
        <el-form-item>
          <el-input-number @change="drinksave" v-model="xhlj" :min="0" :max="10"/>
        </el-form-item>
      </el-form>
    </div>

    <!--        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">-->
    <!--          <img src="../assets/tea2.png" alt="黄山毛峰" title="黄山毛峰"-->
    <!--               :style="styleSet">-->
    <!--          <p style="height: 36px;-->
    <!--				background-color: #f2f2f2;-->
    <!--				margin:0;-->
    <!--				text-align: center;-->
    <!--				line-height: 36px;-->
    <!--				font-size: 26px;">黄山毛峰</p>-->
    <!--        </div>-->

    <!--        <div style="display: inline-block;margin-left: 10px;">-->
    <!--          <img src="../assets/tea3.png" alt="信阳毛尖" title="信阳毛尖"-->
    <!--               :style="styleSet">-->
    <!--          <p style="height: 36px;-->
    <!--				background-color: #f2f2f2;-->
    <!--				margin:0;-->
    <!--				text-align: center;-->
    <!--				line-height: 36px;-->
    <!--				font-size: 26px;">信阳毛尖</p>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--      <div>-->

    <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
      <img src="../assets/zhaori.png" alt="朝日啤酒" title="朝日啤酒"
           :style="styleSet">
      <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">朝日啤酒</p>
      <el-form :model="drinkform" label-width="100px">
        <el-form-item>
          <el-input-number @change="drinksave" v-model="pj" :min="0" :max="10"/>
        </el-form-item>
      </el-form>

    </div>
    <div>
      <el-input prefix-icon="el-icon-s-finance" v-model="drinkform.price" style="width: 10%" disabled></el-input>
    </div>
  </div>


  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

</template>

<script>
export default {
  name: "Drink",
  data() {
    return {
      styleSet: {
        width: "316px",
        height: "252px"
      },
      drinkform: {},
      ftmt: 0,
      xhlj: 0,
      pj: 0,

      pftmt: 100,
      pxhlj: 100,
      ppj: 100,
    }
  },
  methods: {
    drinksave() {
      this.drinkform.ftmt = this.ftmt
      this.drinkform.xhlj = this.xhlj
      this.drinkform.pj = this.pj

      this.drinkform.price = this.ftmt * this.pftmt + this.xhlj * this.pxhlj + this.pj * this.ppj

      sessionStorage.setItem("drinkmenu", JSON.stringify(this.drinkform))
      this.$message({
        type: "success",
        message: "暂存成功"
      })
    }
  }
}
</script>

<style scoped>

</style>