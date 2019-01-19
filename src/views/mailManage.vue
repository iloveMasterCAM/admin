<template>
  <div class="main">
    <div class="main-content">
      <div class="container-fluid">
        <h3 class="page-title">商品管理</h3>
        <el-button plain icon="el-icon-plus" style="margin-bottom: 8px" @click="goAdd">新增</el-button>
        <el-button plain icon="el-icon-delete" style="margin-bottom: 8px" @click="delSel">删除</el-button>
        <el-select v-model="titleName" placeholder="所有标题" @change="getTitle">
          <el-option
            v-for="item in optionsTitle"
            :key="item.title"
            :label="item.title"
            :value="item.title">
          </el-option>
        </el-select>
        <el-select v-model="classId" placeholder="所有类别" @change="getClassId">
          <el-option
            v-for="item in optionsClass"
            :key="item.classId"
            :label="item.classId"
            :value="item.classId">
          </el-option>
        </el-select>
        <div class="table">
          <el-table
            :data="tableData"
            border
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column
              fixed
              prop="Title"
              label="标题"
              width="450">
            </el-table-column>
            <el-table-column
              prop="ClassID"
              label="	类别"
              width="200">
            </el-table-column>
            <el-table-column
              prop="AddDate"
              label="	发布时间"
              width="200">
            </el-table-column>
            <el-table-column
              prop="Sort"
              label="排序"
              width="200">
            </el-table-column>
            <el-table-column
              prop="attr"
              label="	属性"
              width="300">
              <template slot-scope="scope">
                <div class="box">
                  <i class="iconfont icon-pinglun" :class="{active:!scope.row.IsComment}" :title="scope.row.IsComment?cpl:spl" @click="scope.row.IsComment=!scope.row.IsComment"></i>
                  <i class="iconfont icon-top" :title="scope.row.IsTop?czd:szd" :class="{active:!scope.row.IsTop}" @click="scope.row.IsTop=!scope.row.IsTop"></i>
                  <i class="iconfont icon-i-good" :class="{active:!scope.row.IsRecommend}" :title="scope.row.IsRecommend?ctj:stj" @click="scope.row.IsRecommend=!scope.row.IsRecommend"></i>
                  <i class="iconfont icon-hot" :class="{active:!scope.row.IsHot}" :title="scope.row.IsHot?chot:shot" @click="scope.row.IsHot=!scope.row.IsHot"></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="primary" size="mini">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--分页-->
        <div class="block" style="float:right;margin-right:40px;">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 15, 20]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  //instance.defaults.headers.common["token"] = "18xTgOQ1DeMjhFHTgapQqlyt7ntBU+RrTDmDuM/7LUpg7Fu0R028DE4qWcbTRggU7EXU+VASrgEBofcDd/KmvA==";
  export default {
    data(){
      return{
        tableData:[{"title":"aa","category":"办公","data":"2019-1-17","sort":"10"}],
        optionsTitle:[],
        optionsClass:[],
        titleName:'',
        classId:'',
        //class
        cpl:"取消评论",
        spl:"设置评论",

        czd:"取消置顶",
        szd:"设置置顶",

        ctj:"取消推荐",
        stj:"设置推荐",

        chot:"取消热门",
        shot:"设置热门",

        currentPage:1,
        total:100,
        showCount:10,
        //复选框 选中数据
        multipleSelection: [],
        //复选框 选中id
        multipleSelectionId:[],
        token:"18xTgOQ1DeMjhFHTgapQqlyt7ntBU+RrTDmDuM/7LUpg7Fu0R028DE4qWcbTRggU7EXU+VASrgEBofcDd/KmvA=="
      }
    },
    created(){
      this.instance = axios.create({
        headers:{
          "token":"18xTgOQ1DeMjhFHTgapQqlyt7ntBU+RrTDmDuM/7LUpg7Fu0R028DE4qWcbTRggU7EXU+VASrgEBofcDd/KmvA=="
        }
      });
    },
    mounted() {
      // let config = {headers: {'Content-Type': 'multipart/form-data','token':this.token}};
      // config.headers.common['Authentication-Token']=this.token;
      this.instance.post('http://192.168.1.2:8080/shops/productList.do').then(
        (res)=>{
          this.tableData=res.data.productList;
          // this.total=res.data.pageInfo.totalResult;
          //this.optionsTitle=res.data.titleList;
          //this.optionsClass=res.data.classList;
          console.log(res.data);
        }
      ).catch((err)=>{
        console.log(err);
      });
    },
    methods: {
      //标题查询
      getTitle(){
          console.log(this.title)
      },
      getClassId(){
          console.log(this.classId)
      },
      //选中数组
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //批量删除
      delSel(){
        //this.multipleSelectionId
        var data = new FormData();
        data.append("ids",this.multipleSelectionId);
        console.log(data.get('ids'));
        axios.post('http://192.168.1.2:8080/shops/deleteGoodsSpecByIds.do',
          data)
          .then((res)=> {
            if(res.data.S===1){
              for(var i=0;i<this.multipleSelectionId.length;i++){
                for (var j=0;j<this.tableData.length;j++){
                  if (this.tableData[j].ID==this.multipleSelectionId[i]){
                    this.tableData.splice(j,1);
                  }
                }
              }
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              // setTimeout(()=>{
              //   this.$router.go(0)
              // })
            }
            console.log(res)
          }).catch((err)=>{
          console.log(err);
        });
      },
      //跳转 修改页面
      handleClick(row) {
        console.log(row);
        this.$router.push({name: 'modifySpec',params: {data:row}});

      },
      //跳转 添加页面
      goAdd(){
        this.$router.push({name: 'addProduct'});
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.showCount=val;
        var data = new FormData();
        data.append("currentPage",this.currentPage);
        data.append("showCount",this.showCount);
        axios.post('http://192.168.1.2:8080/shops/goodsSpecList.do',
          data)
          .then((res)=> {
            this.tableData=res.data.goodsSpecList;
            this.total=res.data.pageInfo.totalResult;
            console.log(res.data.pageInfo.totalResult);
          }).catch((err)=>{
          console.log(err);
        });
      },
      //点击分页
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);

        var data = new FormData();
        //data.append("currentPage",val);
        data.append("currentPage",val);
        data.append("showCount",this.showCount);
        axios.post('http://192.168.1.2:8080/shops/goodsSpecList.do',
          data)
          .then((res)=> {
            this.tableData=res.data.goodsSpecList;
            this.total=res.data.pageInfo.totalResult;
            console.log(res.data.pageInfo.totalResult);
          }).catch((err)=>{
          console.log(err);
        });
      }


    },
    watch: {
      multipleSelection: function () {
        let arr = [];
        for (let i in this.multipleSelection) {
          arr.push(this.multipleSelection[i].ID);
          //console.log(this.multipleSelection[i].ID);
        }
        this.multipleSelectionId=arr;
        console.log(JSON.stringify(this.multipleSelectionId));
      }
    },
  }
</script>


<style scoped>
  .page-title{
    font-size:18px;
  }
  .container-fluid{
    background-color:#fff;
    padding:20px;
    margin-left: 12px;
  }
  .box i{
    border:1px solid #ddd;
    padding:2px;
    cursor:pointer;
    font-size:14px;
  }
  .box i.active{
    color:#ccc;
  }
</style>
