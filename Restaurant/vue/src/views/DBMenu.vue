<template>
  <!--菜单-->
  <div>
    <div>
      <!-- 大盒子中的一项 -->
      <div style="background-attachment: fixed">
        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/guobaorou.png" alt="锅包肉" title="锅包肉"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">锅包肉</p>
          <el-form :model="dbform" label-width="100px">
            <el-form-item>
              <el-input-number @change="dbsave" v-model="gbr" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/disanxian.png" alt="地三鲜" title="地三鲜"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">地三鲜</p>
          <el-form :model="dbform" label-width="100px">
            <el-form-item>
              <el-input-number @change="dbsave" v-model="dsx" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/zicaifen.png" alt="渍菜粉" title="渍菜粉"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 22px;">渍菜粉</p>
          <el-form :model="dbform" label-width="100px">
            <el-form-item>
              <el-input-number @change="dbsave" v-model="zcf" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div>
        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/zrdft.png" alt="猪肉炖粉条" title="猪肉炖粉条"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">猪肉炖粉条</p>
          <el-form :model="dbform" label-width="100px">
            <el-form-item>
              <el-input-number @change="dbsave" v-model="dft" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/bsdg.png" alt="拔丝地瓜" title="拔丝地瓜"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">拔丝地瓜</p>
          <el-form :model="dbform" label-width="100px">
            <el-form-item>
              <el-input-number @change="dbsave" v-model="bsdg" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/dfs.png" alt="大丰收" title="大丰收"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">大丰收</p>
          <el-form :model="dbform" label-width="100px">
            <el-form-item>
              <el-input-number @change="dbsave" v-model="dfs" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 大盒子中的一项 -->
      <div></div>
      <div></div>
      <!-- 大盒子中的一项 -->
      <div>
        <div>
          <el-input prefix-icon="el-icon-s-finance" v-model="dbform.price" style="width: 10%" disabled></el-input>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "DBMenu",
  data() {
    return {
      dbform: {},

      gbr: 0,
      dsx: 0,
      zcf: 0,
      dft: 0,
      bsdg: 0,
      dfs: 0,

      pgbr: 100,
      pdsx: 100,
      pzcf: 100,
      pdft: 100,
      pbsdg: 100,
      pdfs: 100,
      styleSet: {
        width: "336px",
        height: "252px"
      },
    }
  },
  methods: {
    dbsave() {
      this.dbform.gbr = this.gbr
      this.dbform.dsx = this.dsx
      this.dbform.zcf = this.zcf
      this.dbform.dft = this.dft
      this.dbform.bsdg = this.bsdg
      this.dbform.dfs = this.dfs
      this.dbform.price = this.gbr * this.pgbr + this.dsx * this.pdsx + this.zcf * this.pzcf + this.dft * this.pdft + this.bsdg * this.pbsdg + this.dfs * this.pdfs

      sessionStorage.setItem("dbmenu", JSON.stringify(this.dbform))
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