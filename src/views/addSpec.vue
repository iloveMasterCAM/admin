<template>
  <transition name="fade">
    <div class="main">
      <div class="main-content">
        <div class="container-fluid">
          <h3 class="page-title">添加</h3>
            <div class="add" style="margin:35px;">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="规格名称">
                  <el-input v-model="form.name" style="width:420px;"></el-input>
                </el-form-item>
                <el-form-item label="备注说明">
                  <el-input type="textarea" v-model="form.remark" style="width:420px;"></el-input>
                </el-form-item>
                <el-form-item label="排序数字">
                  <el-input-number v-model="form.sortNum" @change="handleChange" :min="1" :max="999" label="描述文字" size="small"></el-input-number>
                </el-form-item>
                <el-form-item label="规格选项">
                  <el-button plain icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true" size="small">添加选项</el-button>
                </el-form-item>
              </el-form>
            </div>

          <el-dialog title="商品规格" :visible.sync="dialogFormVisible">
          <el-form :model="dialogForm">
          <el-form-item label="标题文字" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.name" autocomplete="off" style="width:600px;"></el-input>
          </el-form-item>
          <el-form-item label="规格图片" :label-width="formLabelWidth">
            <input type="file" value="" id="file" @change='onUpload' ref="upload">
          </el-form-item>
          <el-form-item label="排序数字" :label-width="formLabelWidth">
            <el-input-number v-model="dialogForm.sortNum" @change="handleChangeDia" :min="1" :max="999" label="描述文字" size="small"></el-input-number>
          </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="diaSubmit">确 定</el-button>
          </div>
          </el-dialog>
        </div>
      </div>

    </div>
  </transition>
</template>
<script>
  export default {
    data(){
      return{
        form: {
          name: '',
          remark: '',
          sortNum:99
        },
        dialogFormVisible: false,
        dialogForm: {
          name: '',
          remarks:'',
          sortNum:99,
          imgURl:[]
         },
         formLabelWidth: '120px'
      }
    },
    methods:{
      handleChange(value) {
        console.log(value);
      },
      handleChangeDia(value) {
        console.log(value);
      },
      onUpload(e){
          var fileObj=this.$refs.upload;
          var windowURL = window.URL || window.webkitURL;
          var dataURL;
          var oimg = this.$refs.img;
        //fileObj.files[0]   FormData
          dataURL = windowURL.createObjectURL(fileObj.files[0]);//图片临时路径
          var obj={};
          obj["src"]=dataURL;
          this.dialogForm.imgURl.push(obj);
          console.log(this.dialogForm.imgURl)
      },
      diaSubmit(){
          this.dialogFormVisible = false
      }
    }
  }
</script>


<style scoped >

  .fade-enter-active, .fade-leave-active{
    transition: all 0.3s
  }


  .fade-enter, .fade-leave-to{
  transform: translate3d(100%, 0, 0)
  }
</style>
