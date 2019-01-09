<template>
  <div class="main">
    <div class="main-content">
      <div class="container-fluid">
        <h3 class="page-title">规格管理</h3>
        <el-button plain icon="el-icon-plus" style="margin-bottom: 8px" @click="goAdd">新增</el-button>
            <div class="table">
              <el-table
                :data="tableData"
                border
                tooltip-effect="dark"
                style="width: 100%">
                <el-table-column
                  type="selection"
                  width="35">
                </el-table-column>
                <el-table-column
                  fixed
                  prop="Title"
                  label="名称"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="	规格值"
                  width="900">
                  <template scope="scope">
                    <span  v-show="!item.src" :title="item.text" v-html="item.text" v-for="item in scope.row.name" class="span"></span>
                    <img   v-show="img.src"   :src="img.src" :title="img.text" v-for="img in scope.row.name" class="img">
                  </template>
                </el-table-column>
                <el-table-column
                  prop="sort"
                  label="排序"
                  width="200">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          <!--分页-->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
      data(){
        return{
          tableData: [{
            Title: '衣服规格',
            name: [{text:'S'},{text:"M"},{text:"L"}],
            sort: 10
          }, {
            Title: '颜色',
            name: [{text:"女神粉",src:"http://img.hb.aicdn.com/80500376fb2aeb15f7aa506cfef58ff8c32772c815b972-tYqZCj_fw658"},{text:"莲花白",src:"http://img.hb.aicdn.com/ddacc34690a462613d414a694f242cbf8d339cdcab77-ZIqxx0_fw658"},{text:"基佬紫",src:"http://img.hb.aicdn.com/2c75864a8488647d569d5cfe1391c22161f31ad2411f0-xAh884_fw658"}],
            sort: 20
          }, {
            Title: '版本',
            name: [{text:'移动4G'},{text:"联通4G"},{text:"电信4G"},{text:"全网通"}],
            sort: 200
          }],
          currentPage:1,
        }
      },
      mounted() {
        axios.post('http://192.168.1.2:8080/goods/goodsSizeList.do').then(
          (res)=>{
            //this.tableData=res.data.goodsSizeList;
            console.log(res.data.goodsSizeList);
          }
        ).catch((err)=>{
          console.log(err);
        });
      },
      methods: {
        handleClick(row) {
          this.$router.push({name: 'modifySpec'});
          console.log(row);
        },
        goAdd(){
          this.$router.push({name: 'addSpec'});
        },
        //分页
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }

    }
  }
</script>


<style scoped>
  .page-title{
    font-size:18px;
  }
  .span{
    border:1px solid #eee;
    display:inline-block;
    text-align:center;
    padding:0 10px;
    margin-right:10px;
  }
  .img{
    display:inline-block;
    width:34px;
    height:34px;
    border:1px solid #ddd;
    margin-right:10px;
  }
</style>
