<template>
  <div class="home">
    <!--    功能区域-->
    <div style="padding: 10px">
      <div style="margin: 10px 0">
        <el-button icon="el-icon-shopping-cart-2" type="warning" @click="add">我的订单</el-button>
      </div>

      <!--      搜索区域-->
      <!--      <div style="margin: 10px 0">-->
      <!--        <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable></el-input>-->
      <!--        <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>-->
      <!--      </div>-->
      <el-table :data="tableData" border stripe style="width:38%" height="420"
                :default-sort="{prop:'id',order:'descending'}">
        <el-table-column fixed prop="id" label="历史订单"></el-table-column>
        <el-table-column fixed prop="date" label="日期" width="100px"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="nickName" label="联系方式" width="120px"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="address" label="时间"></el-table-column>
        <el-table-column prop="person" label="就餐人数"></el-table-column>
        <el-table-column prop="dpr" label="东坡肉"></el-table-column>
        <el-table-column prop="ssgy" label="松鼠桂鱼"></el-table-column>
        <el-table-column prop="mlz" label="美龄粥"></el-table-column>
        <el-table-column prop="ysy" label="盐水鸭"></el-table-column>
        <el-table-column prop="shs" label="烧黄鳝"></el-table-column>
        <el-table-column prop="zgs" label="秦淮煮干丝" width="100px"></el-table-column>
        <el-table-column prop="yxfs" label="鸭血粉丝"></el-table-column>
        <el-table-column prop="szt" label="蒋公狮子头" width="100px"></el-table-column>
        <el-table-column prop="hyt" label="黄鱼汤"></el-table-column>
        <el-table-column prop="ycm" label="阳春面"></el-table-column>
        <el-table-column prop="dzx" label="阳澄湖大闸蟹" width="100px"></el-table-column>
        <el-table-column prop="xlx" label="小龙虾"></el-table-column>
        <el-table-column prop="ftmt" label="飞天茅台"></el-table-column>
        <el-table-column prop="xhlj" label="西湖龙井"></el-table-column>
        <el-table-column prop="pj" label="青岛啤酒"></el-table-column>
        <el-table-column prop="gbr" label="锅包肉"></el-table-column>
        <el-table-column prop="dsx" label="地三鲜"></el-table-column>
        <el-table-column prop="zcf" label="渍菜粉"></el-table-column>
        <el-table-column prop="dft" label="猪肉炖粉条" width="100px"></el-table-column>
        <el-table-column prop="bsdg" label="拔丝地瓜"></el-table-column>
        <el-table-column prop="mf" label="米饭"></el-table-column>
        <el-table-column prop="ycm" label="阳春面"></el-table-column>
        <el-table-column prop="egcyb" label="鹅肝葱油饼" width="100px"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="vip" label="会员信息" width="100px"></el-table-column>
        <el-table-column prop="tips" label="备注" width="100px"></el-table-column>
        <el-table-column fixed="right" label="小操作一手" width="100px">
          <template #default="scope">
            <el-button type="success" icon="el-icon-edit" circle @click="handleEdit(scope.row)"></el-button>
            <el-popconfirm title="确认删除吗？" @confirm="handleDelete(scope.row.id)">
              <template #reference>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </template>
            </el-popconfirm>
            <!--            <el-button type="text" size="small">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>

      <div style="margin: 10px 0">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>


        <el-dialog
            title="点餐"
            top="10px"
            v-model="dialogVisible"
            width="30%">
          <el-scrollbar height="420px">
            <el-form :model="form" label-width="120px">
              <el-form-item label="日期">
                <div class="demo-date-picker">
                  <div class="block">
                    <el-date-picker v-model="form.date" type="date" placeholder="请选择就餐日期">
                    </el-date-picker>
                  </div>
                </div>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="时间">
                <el-radio v-model="form.address" label="中午">中午</el-radio>
                <el-radio v-model="form.address" label="晚上">晚上</el-radio>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="就餐人数">
                <el-input-number v-model="person" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="东坡肉">
                <el-input-number @change="handlePrice" v-model="dpr" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="松鼠鳜鱼">
                <el-input-number @change="handlePrice" v-model="ssgy" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="美龄粥">
                <el-input-number @change="handlePrice" v-model="mlz" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="盐水鸭">
                <el-input-number @change="handlePrice" v-model="ysy" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="烧黄鳝">
                <el-input-number @change="handlePrice" v-model="shs" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="秦淮煮干丝">
                <el-input-number @change="handlePrice" v-model="zgs" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="鸭血粉丝汤">
                <el-input-number @change="handlePrice" v-model="yxfs" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="蒋公狮子头">
                <el-input-number @change="handlePrice" v-model="szt" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="黄鱼汤">
                <el-input-number @change="handlePrice" v-model="hyt" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="阳春面">
                <el-input-number @change="handlePrice" v-model="ycm" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="阳澄湖大闸蟹">
                <el-input-number @change="handlePrice" v-model="dzx" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="小龙虾">
                <el-input-number @change="handlePrice" v-model="xlx" :min="0" :max="10"/>
              </el-form-item>
            </el-form>

            <el-form :model="form" label-width="120px">
              <el-form-item label="锅包肉">
                <el-input-number @change="handlePrice" v-model="gbr" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="地三鲜">
                <el-input-number @change="handlePrice" v-model="dsx" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="渍菜粉">
                <el-input-number @change="handlePrice" v-model="zcf" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="猪肉炖粉条">
                <el-input-number @change="handlePrice" v-model="dft" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="拔丝地瓜">
                <el-input-number @change="handlePrice" v-model="bsdg" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="大丰收">
                <el-input-number @change="handlePrice" v-model="dfs" :min="0" :max="10"/>
              </el-form-item>
            </el-form>

            <el-form :model="form" label-width="120px">
              <el-form-item label="飞天茅台">
                <el-input-number @change="handlePrice" v-model="ftmt" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="西湖龙井">
                <el-input-number @change="handlePrice" v-model="xhlj" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="青岛啤酒">
                <el-input-number @change="handlePrice" v-model="pj" :min="0" :max="10"/>
              </el-form-item>
            </el-form>

            <el-form :model="form" label-width="120px">
              <el-form-item label="米饭">
                <el-input-number @change="handlePrice" v-model="mf" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="阳春面">
                <el-input-number @change="handlePrice" v-model="ycm" :min="0" :max="10"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="鹅肝葱油饼">
                <el-input-number @change="handlePrice" v-model="egcyb" :min="0" :max="10"/>
              </el-form-item>
            </el-form>

            <el-form :model="form" label-width="120px">
              <el-form-item label="价格">
                <el-input disabled v-model="price"/>
              </el-form-item>
            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="备注">
                <el-input v-model="form.tips"/>
              </el-form-item>
            </el-form>
            <span>点餐信息栏</span>
          </el-scrollbar>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="save">确 定</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


import request from "../utils/request";
// import moment from 'moment';

export default {
  name: 'User',
  components: {},
  data() {
    return {
      dialogVisible: false,
      person: 0,
      //淮扬菜
      dpr: JSON.parse(sessionStorage.getItem("hymenu")).dpr || 0,
      ssgy: JSON.parse(sessionStorage.getItem("hymenu")).ssgy || 0,
      mlz: JSON.parse(sessionStorage.getItem("hymenu")).mlz || 0,
      ysy: JSON.parse(sessionStorage.getItem("hymenu")).ysy || 0,
      shs: JSON.parse(sessionStorage.getItem("hymenu")).shs || 0,
      zgs: JSON.parse(sessionStorage.getItem("hymenu")).zgs || 0,
      yxfs: JSON.parse(sessionStorage.getItem("hymenu")).yxfs || 0,
      szt: JSON.parse(sessionStorage.getItem("hymenu")).szt || 0,
      hyt: JSON.parse(sessionStorage.getItem("hymenu")).hyt || 0,
      dzx: JSON.parse(sessionStorage.getItem("hymenu")).dzx || 0,
      xlx: JSON.parse(sessionStorage.getItem("hymenu")).xlx || 0,

      //酒水
      ftmt: JSON.parse(sessionStorage.getItem("drinkmenu")).ftmt || 0,
      xhlj: JSON.parse(sessionStorage.getItem("drinkmenu")).xhlj || 0,
      pj: JSON.parse(sessionStorage.getItem("drinkmenu")).pj || 0,

      //东北菜
      gbr: JSON.parse(sessionStorage.getItem("dbmenu")).gbr || 0,
      dsx: JSON.parse(sessionStorage.getItem("dbmenu")).dsx || 0,
      zcf: JSON.parse(sessionStorage.getItem("dbmenu")).zcf || 0,
      dft: JSON.parse(sessionStorage.getItem("dbmenu")).dft || 0,
      bsdg: JSON.parse(sessionStorage.getItem("dbmenu")).bsdg || 0,
      dfs: JSON.parse(sessionStorage.getItem("dbmenu")).dfs || 0,

      //主食
      ycm: JSON.parse(sessionStorage.getItem("rice")).ycm || 0,
      mf: JSON.parse(sessionStorage.getItem("rice")).mf || 0,
      egcyb: JSON.parse(sessionStorage.getItem("rice")).egcyb || 0,

      price: (JSON.parse(sessionStorage.getItem("hymenu")).price || 0) + (JSON.parse(sessionStorage.getItem("drinkmenu")).price || 0) + (JSON.parse(sessionStorage.getItem("dbmenu")).price || 0)+(JSON.parse(sessionStorage.getItem("rice")).price || 0),
      form: {},
      anotherForm: {},
      currentPage: 1,
      pageSize: 50,
      total: 0,
      tableData: [],

      //淮扬菜
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

      //酒水
      pftmt: 100,
      pxhlj: 100,
      ppj: 100,

      //东北菜
      pgbr: 100,
      pdsx: 100,
      pzcf: 100,
      pdft: 100,
      pbsdg: 100,
      pdfs: 100,

      //主食
      pmf: 100,
      pycm: 100,
      pegcyb: 100,
    }
  },
  created() {
    this.load()
  },
  methods: {
    // dateFormat: function (date) {
    //   return moment(date).format()
    // },
    load() {
      let str = sessionStorage.getItem("user") || "{}"
      this.anotherForm = JSON.parse(str)
      let sch
      if (this.anotherForm.username === '管理员') {//设置管理员权限
        sch = null
      } else {
        sch = this.anotherForm.username
      }
      // if (this.username === '管理员') {//设置管理员权限
      //   sch = null
      // } else {
      //   sch = this.username
      // }
      request.get("/api/user", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          // search: this.search
          search: sch
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    handlePrice() {
      this.price = this.dzx * this.pdzx + this.yxfs * this.pyxfs + this.hyt * this.phyt + this.zgs * this.pzgs + this.szt * this.pszt + this.ssgy * this.pssgy + this.shs * this.pshs + this.dpr * this.pdpr + this.ysy * this.pysy + this.xlx * this.pxlx + this.mlz * this.pmlz
          + this.ftmt * this.pftmt + this.xhlj * this.pxhlj + this.pj * this.ppj
          + this.gbr * this.pgbr + this.dsx * this.pdsx + this.zcf * this.pzcf + this.dft * this.pdft + this.bsdg * this.pbsdg + this.dfs * this.pdfs
          + this.mf * this.pmf + this.ycm * this.pycm + this.egcyb * this.pegcyb
    },
    save() {
      this.form.username = this.anotherForm.username
      this.form.nickName = this.anotherForm.nickName
      this.form.sex = this.anotherForm.sex
      this.form.vip = this.anotherForm.vip
      this.form.person = this.person

      this.form.dpr = this.dpr
      this.form.ssgy = this.ssgy
      this.form.mlz = this.mlz
      this.form.ysy = this.ysy
      this.form.shs = this.shs
      this.form.zgs = this.zgs
      this.form.yxfs = this.yxfs
      this.form.szt = this.szt
      this.form.hyt = this.hyt
      this.form.ycm = this.ycm
      this.form.dzx = this.dzx
      this.form.xlx = this.xlx

      this.form.gbr = this.gbr
      this.form.dsx = this.dsx
      this.form.zcf = this.zcf
      this.form.dft = this.dft
      this.form.bsdg = this.bsdg
      this.form.dfs = this.dfs

      this.form.ftmt = this.ftmt
      this.form.xhlj = this.xhlj
      this.form.pj = this.pj

      this.form.mf = this.mf
      this.form.ycm = this.ycm
      this.form.egcyb = this.egcyb

      this.form.price = this.price
      if (!this.form.tips) {
        this.form.tips = "无"
      }
      if (this.form.id) {//更新
        request.put("api/user", this.form).then(res => {
          console.log(res)
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "更新成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load()//刷新表格的数据
          this.dialogVisible = false//关闭弹窗
        })
      } else {//新增
        request.post("api/user", this.form).then(res => {
          console.log(res)
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "祝您用餐愉快"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load()
          this.dialogVisible = false
        })
      }
    },
    add() {
      this.dialogVisible = true
      this.form = {}//清空表单
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    handleSizeChange(pageSize) {//改变当前每页的个数触发
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {//改变当前页码触发
      this.currentPage = pageNum
      this.load()
    },
    handleDelete(id) {
      console.log(id)
      request.delete("/api/user/" + id).then(res => {
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
        this.load()//删除之后重新加载表格的数据
      })
    }
  },
}
</script>
