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
                  prop="date"
                  label="名称"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="	规格值"
                  width="900">
                </el-table-column>
                <el-table-column
                  prop="zip"
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


              <!--<el-dialog title="修改规格" :visible.sync="dialogFormVisible">-->
                <!--<el-form :model="form">-->
                  <!--<el-form-item label="规格名称" :label-width="formLabelWidth">-->
                    <!--<el-input v-model="form.name" autocomplete="off" style="width:600px;"></el-input>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item label="备注说明" :label-width="formLabelWidth">-->
                    <!--<el-input type="textarea" v-model="form.remarks" autocomplete="off" style="width:600px;"></el-input>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item label="排序数字" :label-width="formLabelWidth">-->
                    <!--<el-input v-model="form.sortNum" autocomplete="off" style="width:120px;"></el-input>-->
                  <!--</el-form-item>-->
                <!--</el-form>-->
                <!--<div slot="footer" class="dialog-footer">-->
                  <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
                  <!--<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
                <!--</div>-->
              <!--</el-dialog>-->
            </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
      data(){
        return{
          tableData: [{
            date: '衣服规格',
            name: '1213',
            zip: 10
          }, {
            date: '颜色',
            name: '1',
            zip: 20
          }, {
            date: '版本',
            name: '王小虎',
            zip: 200
          }],
          // dialogFormVisible: false,
          // form: {
          //   name: '',
          //   remarks:'',
          //   sortNum:''
          // },
          // formLabelWidth: '120px'
        }
      },
    methods: {
      handleClick(row) {
        this.$router.push({name: 'modifySpec'});
        console.log(row);
      },
      goAdd(){
        this.$router.push({name: 'addSpec'});
      }

    }
  }
</script>


<style scoped>
  .page-title{
    font-size:18px;
  }
</style>
