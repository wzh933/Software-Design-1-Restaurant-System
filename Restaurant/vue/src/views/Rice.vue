<template>
  <!--主食-->
  <div>
    <div></div>
    <div>
      <div style="background-attachment: fixed">
        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/mifan.png" alt="五常米饭" title="五常米饭"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">五常米饭</p>
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size:15px;color: #ff3750">39元/份</p>
          <el-form :model="riceform" label-width="100px">
            <el-form-item>
              <el-input-number @change="ricesave" v-model="mf" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>


        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/yangchunmian.png" alt="阳春面" title="阳春面"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">阳春面</p>
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size:15px;color: #ff3750">69/份</p>
          <el-form :model="riceform" label-width="100px">
            <el-form-item>
              <el-input-number @change="ricesave" v-model="ycm" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/egancongyoubing.png" alt="鹅肝葱油饼" title="鹅肝葱油饼"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 22px;">鹅肝葱油饼</p>
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size:15px;color: #ff3750">99/份</p>
          <el-form :model="riceform" label-width="100px">
            <el-form-item>
              <el-input-number @change="ricesave" v-model="egcyb" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div>
          <el-input prefix-icon="el-icon-s-finance" v-model="riceform.price" style="width: 10%" disabled></el-input>
        </div>


      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'rice',
  data() {
    return {
      styleSet: {
        width: "336px",
        height: "252px"
      },
      riceform: {},
      mf: 0,
      ycm: 0,
      egcyb: 0,


      pmf: 39,
      pycm: 69,
      pegcyb: 99,

    }
  },
  methods: {
    ricesave() {
      this.riceform.mf = this.mf
      this.riceform.ycm = this.ycm
      this.riceform.egcyb = this.egcyb

      this.riceform.price = this.mf * this.pmf + this.ycm * this.pycm + this.egcyb * this.pegcyb

      sessionStorage.setItem("rice", JSON.stringify(this.riceform))
      this.$message({
        type: "success",
        message: "暂存成功"
      })
    }
  },
}

</script>
