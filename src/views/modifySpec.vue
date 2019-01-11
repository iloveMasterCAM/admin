<template>
  <transition name="fade">
    <div class="main">
      <div class="main-content">
        <div class="container-fluid">
          <h3 class="page-title">编辑</h3>
          <div class="add" style="margin:35px;">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="规格名称">
                <el-input v-model="form.name" style="width:420px;" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="备注说明">
                <el-input type="textarea" v-model="form.remark" style="width:420px;" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="排序数字">
                <el-input-number v-model="form.sortNum" @change="handleChange" :min="1" :max="99" label="描述文字" size="small"></el-input-number>
              </el-form-item>
              <el-form-item label="规格选项">

                <el-button plain icon="el-icon-circle-plus-outline" @click="addSel()" size="small">添加选项</el-button>

              </el-form-item>
            </el-form>
          </div>



          <!--table-->
          <div class="table" style="width:700px;margin-left:116px;">
            <el-table
              :data="dialogData"
              border
              tooltip-effect="dark"
              style="width: 100%">
              <el-table-column
                fixed
                prop="name"
                label="文字"
                width="150">
              </el-table-column>
              <el-table-column
                prop="imgURl"
                label="	图片"
                width="150">
                <template scope="scope">
                  <img :src="scope.row.imgURl" width="40" height="40" class="head_pic"/>
                </template>
              </el-table-column>
              <el-table-column
                prop="sortNum"
                label="排序"
                width="200">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="170">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="editRow(scope.$index, dialogData)"
                    size="mini">
                    编辑
                  </el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, dialogData)"
                    type="danger"
                    size="mini">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <el-row style="margin:90px 118px;">
            <el-button @click="goSpecifications()">取 消</el-button>
            <el-button type="primary" @click="saveAll()">保存</el-button>
          </el-row>


          <!--dialog1  规格-->
          <el-dialog title="商品规格" :visible.sync="dialogFormVisible">
            <el-form :model="dialogForm">
              <el-form-item label="标题文字" :label-width="formLabelWidth">
                <el-input v-model="dialogForm.name" autocomplete="off" style="width:600px;" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="规格图片" :label-width="formLabelWidth">
                <div class="file">
                  <input type="file" value="" id="file" @change='onUpload($event)' ref="upload" class="fileInput">
                </div>

                <img src="" alt="" class="previewImg" ref="previewImg">

              </el-form-item>
              <el-form-item label="排序数字" :label-width="formLabelWidth">
                <el-input-number v-model="dialogForm.sortNum" @change="handleChangeDia" :min="1" :max="99" label="描述文字" size="small"></el-input-number>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="diaSubmit">确 定</el-button>
            </div>
          </el-dialog>

          <!--dialog2  编辑-->
          <el-dialog title="商品规格" :visible.sync="dialogFormVisibleEdit">
            <el-form :model="dialogFormEdit">
              <el-form-item label="标题文字" :label-width="formLabelWidth">
                <el-input v-model="dialogFormEdit.name" autocomplete="off" style="width:600px;" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="规格图片" :label-width="formLabelWidth">
                <div class="file">
                  <input type="file" value=""  @change='onUpload1' ref="upload1" class="fileInput">
                </div>

                <img :src="imgSrc" alt="" class="previewImg" ref="previewImg1" id="previewImg1">

              </el-form-item>
              <el-form-item label="排序数字" :label-width="formLabelWidth">
                <el-input-number v-model="dialogFormEdit.sortNum" @change="handleChangeDia" :min="1" :max="99" label="描述文字" size="small"></el-input-number>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
              <el-button type="primary" @click="diaSubmitEdit">确 定</el-button>
            </div>
          </el-dialog>

        </div>
      </div>

    </div>
  </transition>
</template>
<script scope>
  import axios from 'axios'
  export default {
    data(){
      return{
        //上面form数据
        form: {
          name: '',
          remark: '',
          sortNum:99
        },
        dialogFormVisible: false,
        //dialog数据
        dialogData:[],
        dialogForm: {
          name: '',
          sortNum:99,
          imgURl:'',
          formData:null

        },
        formLabelWidth: '120px',
        index:0,
        imgSrc0:'',
        imgSrc:'',
        dialogFormVisibleEdit:false,
        dialogFormEdit: {
          name: '',
          sortNum:99,
          imgURl:'',
          formData:null
        },

      }
    },
    mounted(){
          console.log(this.$route.params.data);
    },
    methods:{
      //编辑
      editRow(index, rows){
        var str=JSON.stringify(rows[index]);
        this.dialogFormEdit=JSON.parse(str);
        this.index=index;
        console.log(this.index);
        this.imgSrc=this.dialogFormEdit.imgURl;
        this.dialogFormVisibleEdit = true;
      },
      //提交编辑保存
      diaSubmitEdit(){
        this.dialogFormVisibleEdit = false;
        // this.dialogData[this.index]=this.dialogFormEdit;
        //delete this.dialogData[this.index];
        this.dialogData.splice(this.index,1,this.dialogFormEdit);
        console.log(this.dialogData)

      },
      //移除table选项
      deleteRow(index, rows) {
        rows.splice(index, 1);
        console.log(this.dialogData)
      },
      handleChange(value) {
        console.log(value);
      },
      handleChangeDia(value) {
        console.log(value);
      },
      onUpload(event){
        console.log(222);
        console.log(event.target);
        var fileObj=this.$refs.upload;
        if(fileObj.files[0].type !== 'image/jpeg' && fileObj.files[0] !== 'image/png' && fileObj.files[0] !== 'image/gif') {
          this.$message({
            message: '请上传jpg/gif/png格式的图片',
            type: 'warning'
          });
          return;
        }
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        //fileObj.files[0]   FormData
        dataURL = windowURL.createObjectURL(fileObj.files[0]);//图片临时路径
        this.$refs.previewImg.src=dataURL;
        this.dialogForm.imgURl=dataURL;
        this.dialogForm.formData=new FormData();
        this.dialogForm.formData.append("img", fileObj.files[0]);
        console.log(this.dialogForm);
      },
      onUpload1(){
        var fileObj=this.$refs.upload1;
        if(fileObj.files[0].type !== 'image/jpeg' && fileObj.files[0] !== 'image/png' && fileObj.files[0] !== 'image/gif') {
          this.$message({
            message: '请上传jpg/gif/png格式的图片',
            type: 'warning'
          });
          return;
        }
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        //fileObj.files[0]   FormData
        dataURL = windowURL.createObjectURL(fileObj.files[0]);//图片临时路径
        this.$refs.previewImg1.src=dataURL;
        this.dialogFormEdit.imgURl=dataURL;
        this.dialogFormEdit.formData=new FormData();
        this.dialogFormEdit.formData.append("img", fileObj.files[0]);
      },
      addSel(){
        this.dialogForm.name='';
        this.dialogForm.sortNum=99;
        this.dialogForm.imgURl='';
        this.dialogForm.formData=null;
        this.dialogFormVisible = true;
        this.$refs.previewImg.src='';

      },
      //本地保存
      diaSubmit(){
        this.dialogFormVisible = false;
        // var arr=[];
        // arr.push(this.dialogForm);
        // // this.dialogData.push(this.dialogForm);
        // this.dialogData=this.dialogData.concat(arr);
        var str=JSON.stringify(this.dialogForm);
        var data=JSON.parse(str);
        this.dialogData=this.dialogData.concat([].concat(data));
        console.log(this.dialogData);

      },
      //取消保存回到上一层
      goSpecifications(){
        this.$router .push({name: 'specifications'})
      },
      //提交页面所有数据
      saveAll(){
        console.log(this.form);
        console.log(this.dialogData);
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        axios.post('http://192.168.1.2:8080/shops/addGoodsSpec.do',
          {"title":this.form.name,"remark":this.form.remark})
          .then((res)=>{
              console.log(res)
            }
          ).catch((err)=>{
          console.log(err);
        });
        this.$router.push({name: 'specifications'})
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
  .file{
    display:inline-block;
    position: relative;
    bottom:12px;
    width:90px;
    height:90px;
    border:2px dashed #a2a7b2;
    background: url(../assets/upload.png) center center  no-repeat;
  }
  .file .fileInput{
    width:100%;
    height:100%;
    opacity: 0;
  }
  .previewImg{
    position: relative;
    width:90px;
    height:90px;
    top:10px;
    margin-left:8px;
  }

  .container-fluid{
    background-color:#fff;
    padding:20px;
    margin-left: 12px;
  }
</style>
