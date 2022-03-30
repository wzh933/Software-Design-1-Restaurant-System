<template>
  <!--菜单-->
  <div>
    <div>
      <!-- 大盒子中的一项 -->
      <div style="background-attachment: fixed">
        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/yanshuiya.png" alt="盐水鸭" title="盐水鸭"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">盐水鸭</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="ysy" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/dongporou.png" alt="东坡肉" title="东坡肉"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">东坡肉</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="dpr" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/huaiyangchaoruandou.png" alt="淮扬炒软兜" title="淮扬炒软兜"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 22px;">淮扬炒软兜</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="shs" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/songshuguiyu.png" alt="松鼠桂鱼" title="松鼠桂鱼"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">松鼠桂鱼</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="ssgy" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/shizitou.png" alt="蒋公狮子头" title="蒋公狮子头"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">蒋公狮子头</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="szt" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/zhugansi.png" alt="秦淮煮干丝" title="秦淮煮干丝"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">秦淮煮干丝</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="zgs" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

      </div>
      <div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/huangyutang.png" alt="黄鱼汤" title="黄鱼汤"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">黄鱼汤</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="hyt" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/yaxuefensi.png" alt="鸭血粉丝汤" title="鸭血粉丝汤"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">鸭血粉丝汤</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="yxfs" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;">
          <img src="../assets/dazhaxie.png" alt="大闸蟹" title="大闸蟹"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">大闸蟹</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="dzx" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

      </div>
      <div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/meilingzhou.png" alt="美龄粥" title="美龄粥"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">美龄粥</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="mlz" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div style="display: inline-block;margin-left: 10px;margin-top: 5px;">
          <img src="../assets/xiaolongxia.png" alt="小龙虾" title="小龙虾"
               :style="styleSet">
          <p style="height: 36px;
				background-color: #f2f2f2;
				margin:0;
				text-align: center;
				line-height: 36px;
				font-size: 26px;">小龙虾</p>
          <el-form :model="hyform" label-width="100px">
            <el-form-item>
              <el-input-number @change="hysave" v-model="xlx" :min="0" :max="10"/>
            </el-form-item>
          </el-form>
        </div>

        <div>
          <el-input prefix-icon="el-icon-s-finance" v-model="hyform.price" style="width: 10%" disabled></el-input>
        </div>

      </div>
      <!-- 大盒子中的一项 -->
      <div></div>
      <div></div>
      <!-- 大盒子中的一项 -->
      <div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HYMenu',
  data() {
    return {
      styleSet: {
        width: "336px",
        height: "252px"
      },
      hyform: {},
      ysy: 0,
      dpr: 0,
      shs: 0,
      ssgy: 0,
      szt: 0,
      zgs: 0,
      hyt: 0,
      yxfs: 0,
      dzx: 0,
      mlz: 0,
      xlx: 0,

      pysy: 100,
      pdpr: 100,
      pshs: 100,
      pssgy: 100,
      pszt: 100,
      pzgs: 100,
      phyt: 100,
      pyxfs: 100,
      pdzx: 100,
      pmlz: 100,
      pxlx: 100,
    }
  },
  methods: {
    hysave() {
      this.hyform.ysy = this.ysy
      this.hyform.dpr = this.dpr
      this.hyform.shs = this.shs
      this.hyform.ssgy = this.ssgy
      this.hyform.szt = this.szt
      this.hyform.zgs = this.zgs
      this.hyform.hyt = this.hyt
      this.hyform.yxfs = this.yxfs
      this.hyform.dzx = this.dzx
      this.hyform.mlz = this.mlz
      this.hyform.xlx = this.xlx
      this.hyform.price = this.dzx * this.pdzx + this.yxfs * this.pyxfs + this.hyt * this.phyt + this.zgs * this.pzgs + this.szt * this.pszt + this.ssgy * this.pssgy + this.shs * this.pshs + this.dpr * this.pdpr + this.ysy * this.pysy + this.xlx * this.pxlx + this.mlz * this.pmlz

      sessionStorage.setItem("hymenu", JSON.stringify(this.hyform))
      this.$message({
        type: "success",
        message: "暂存成功"
      })
    }
  },
}

</script>