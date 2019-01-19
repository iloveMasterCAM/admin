<template>
  <transition name="fade">
    <div class="main">
      <div class="main-content">
        <div class="container-fluid">
          <h3 class="page-title">添加商品</h3>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="基本信息" name="first">
              <div class="tabFirst">
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                  <el-form-item label="所属类别">
                  <el-select v-model="title" placeholder="请选择所属类别" @change="getTitle">
                    <el-option
                      v-for="item in optionsTitle"
                      :key="item.value"
                      :label="item.title"
                      :value="item.title">
                    </el-option>
                  </el-select>
                  </el-form-item>
                  <el-form-item label="是否发布" prop="delivery">
                    <el-switch v-model="sizeForm.release"></el-switch>
                  </el-form-item>
                  <el-form-item label="推荐类型">
                    <el-checkbox-group v-model="sizeForm.type">
                      <el-checkbox-button label="允许评论" name="type"></el-checkbox-button>
                      <el-checkbox-button label="置顶" name="type"></el-checkbox-button>
                      <el-checkbox-button label="推荐" name="type"></el-checkbox-button>
                      <el-checkbox-button label="热门" name="type"></el-checkbox-button>
                      <el-checkbox-button label="幻灯片" name="type"></el-checkbox-button>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="内容标题">
                    <el-input v-model="sizeForm.cName" style="width:400px;"></el-input>
                  </el-form-item>
                  <el-form-item label="副标题">
                    <el-input v-model="sizeForm.subName" style="width:400px;"></el-input>
                  </el-form-item>
                  <el-form-item label="Tags标签">
                    <el-input v-model="sizeForm.tagLab" style="width:400px;"></el-input>
                  </el-form-item>
                  <el-form-item label="封面图片">
                    <div class="file">
                      <input type="file" value="" id="file" name="file"  @change='onUpload()' ref="upload" class="fileInput" accept="image/*">
                    </div>
                    <img :src="sizeForm.imgURl" alt="" class="previewImg" ref="previewImg">
                  </el-form-item>
                  <el-form-item label="商品货号">
                    <el-input v-model="sizeForm.pCode" style="width:400px;"></el-input>
                  </el-form-item>
                  <el-form-item label="库存数量">
                    <el-input-number v-model="sizeForm.pNum"  :min="0" :max="999" label="描述文字" size="small"></el-input-number>
                  </el-form-item>
                  <el-form-item label="市场价格">
                    <el-input v-model="sizeForm.mPrice" style="width:130px;"></el-input>
                  </el-form-item>
                  <el-form-item label="销售价格">
                    <el-input v-model="sizeForm.selPrice" style="width:130px;"></el-input>
                  </el-form-item>
                  <el-form-item label="交易积分">
                    <el-input v-model="sizeForm.integral" style="width:130px;"></el-input>
                  </el-form-item>
                  <el-form-item label="商品规格">
                    <el-button plain icon="el-icon-circle-plus-outline" @click="addSel()" size="small">设置规格</el-button>
                  </el-form-item>

                  <!--table-->
                  <div class="table" style="margin-left:80px;">
                    <el-table
                      :data="tableData"
                      border
                      tooltip-effect="dark"
                      style="width: 100%">
                      <el-table-column
                        fixed
                        prop="itemNum"
                        label="货号"
                        width="200">
                      </el-table-column>
                      <el-table-column
                        prop="markPrice"
                        label="市场价(元)"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="selPrice"
                        label="销售价(元)"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="stock"
                        label="库存(件)"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="spec"
                        label="规格"
                        width="650">
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
                  <el-form-item label="排序数字">
                    <el-input-number v-model="sizeForm.sortNum"  :min="0" :max="99" label="描述文字" size="small"></el-input-number>
                  </el-form-item>
                  <el-form-item label="浏览次数">
                    <el-input-number v-model="sizeForm.lookNum"  :min="0" :max="999" label="描述文字" size="small"></el-input-number>
                  </el-form-item>
                  <el-form-item label="发布时间">
                    <div class="block">
                      <el-date-picker
                        v-model="sizeForm.time"
                        type="datetime"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </div>
                  </el-form-item>
                  <el-form-item label="图片相册">
                    <label for="uploadMFile" style="padding:0 14px;font-size:12px;border-radius: 3px;color: #606266;border: 1px solid #dcdfe6;font-weight:normal;cursor:pointer;"><i class="el-icon-document" style="padding-right:6px;"></i>批量上传</label>
                    <input type="file" name="file" id="uploadMFile" style="opacity: 0;position:absolute;left:-999px;"  accept="image/*" multiple @change="addImg()" ref="inputer"><br>
                    <div class="imgBox" v-for="(value, key) in imgs">
                      <img :src="getObjectURL(value)" alt="" style="width:120px;height:120px;">
                      <div class="button">
                        <span @click="delImg(key)">删除</span>
                      </div>
                    </div>
                  </el-form-item>
                  <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">立即添加</el-button>
                    <el-button @click="cancal">取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="详细描述" name="second">
                <div class="tabSecond">
                  <el-form  :model="secondForm" label-width="80px" size="mini">
                    <el-form-item label="调用别名">
                      <el-input v-model="secondForm.name" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="URL链接">
                      <el-input v-model="secondForm.link" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="内容摘要">
                      <el-input type="textarea" v-model="secondForm.abstract" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="内容描述">
                      <quill-editor
                        v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @ready="onEditorReady($event)"
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)">
                      </quill-editor>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">立即添加</el-button>
                      <el-button @click="cancal">取消</el-button>
                    </el-form-item>
                  </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="SEO选项" name="third">
                <div class="tabThird">
                  <el-form  :model="thirdForm" label-width="80px" size="mini">
                    <el-form-item label="SEO标题">
                      <el-input v-model="thirdForm.title" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="SEO关健字">
                      <el-input type="textarea" v-model="thirdForm.key" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item label="SEO描述">
                      <el-input type="textarea" v-model="thirdForm.des" style="width:400px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">立即添加</el-button>
                      <el-button @click="cancal">取消</el-button>
                    </el-form-item>
                  </el-form>
                </div>
            </el-tab-pane>
          </el-tabs>
          <!--dialog-->
          <el-dialog title="商品规格" :visible.sync="dialogFormVisible">
            <div class="item" v-for="item in diaData">
                <span class="left" v-html="item.title"></span>
                <div class="right">
                  <span v-show="!item.src" :title="item.text" v-html="item.text" v-for="item in item.name" @click="selSpan(item,$event)"></span>
                  <img  v-show="img.src"   :src="img.src" :title="img.text" v-for="img in item.name" @click="selImg(img,$event)">
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="diaSubmit" >确 定</el-button>
            </div>
          </el-dialog>

          <!--//描述弹框-->
          <!--<el-dialog title="图片描述" :visible.sync="dialogFormVisibleMs">-->
            <!--<el-form :model="msForm">-->
              <!--<el-input-->
                <!--type="textarea"-->
                <!--:rows="2"-->
                <!--placeholder="请输入内容"-->
                <!--v-model="msForm.text">-->
              <!--</el-input>-->


            <!--</el-form>-->
            <!--<div slot="footer" class="dialog-footer">-->
              <!--<el-button @click="pl()">批量描述</el-button>-->
              <!--<el-button type="primary" @click="">单张描述</el-button>-->
            <!--</div>-->
          <!--</el-dialog>-->

        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import axios from 'axios'
  import { quillEditor } from "vue-quill-editor"; //调用编辑器
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        //编辑器
        content:'',
        editorOption: {},

        diaData: [{
          title: '衣服规格',
          name: [{text: 'S'}, {text: "M"}, {text: "L"}],
          sort: 10
        }, {
          title: '颜色',
          name: [{
            text: "女神粉",
            src: "http://img.hb.aicdn.com/80500376fb2aeb15f7aa506cfef58ff8c32772c815b972-tYqZCj_fw658"
          }, {
            text: "莲花白",
            src: "http://img.hb.aicdn.com/ddacc34690a462613d414a694f242cbf8d339cdcab77-ZIqxx0_fw658"
          }, {text: "基佬紫", src: "http://img.hb.aicdn.com/2c75864a8488647d569d5cfe1391c22161f31ad2411f0-xAh884_fw658"}],
          sort: 20
        }, {
          title: '版本',
          name: [{text: '移动4G'}, {text: "联通4G"}, {text: "电信4G"}, {text: "全网通"}],
          sort: 200
        }],
        dialogFormVisible: false,
        //默认选择第一个选项卡
        activeName: 'first',

        tableData: [],
        sizeForm: {
          name: '',
          release: '',
          title: '',
          type: [],
          cName: '',
          tagLab: '',
          imgURl: '',
          fileImg: null,
          pCode: '',
          pNum: 1,
          mPrice: '',
          selPrice: '',
          integral: '',
          sortNum: 99,
          lookNum: 0,
          time:''
        },
        optionsTitle: [],
        title: '',
        subName: '',

        dialogForm: [],
        subTable: [],
        //多图片上传
        formData:new FormData(),
        imgs: {},
        //描述索引
        mIndex:0,
        //描述弹框
        dialogFormVisibleMs:false,
        msForm:{
          text:''
        },

        //second form
        secondForm:{
          name:'',
          link:'',
          abstract:''
        },
        //third
        thirdForm:{
          title:'',
          key:'',
          des:''
        }
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
      //http://192.168.1.2:8080/shops/addProduct.do
      let data=new FormData();
      data.append("storeId","15");
      this.instance.post('http://192.168.1.2:8080/shops/addProduct.do')
        .then((res) => {
            console.log(res);
            //this.diaData = res.data;
          }
        ).catch((err) => {
        console.log(err);
      });
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    },
    methods: {
      //编辑器事件
      onEditorReady(editor) { // 准备编辑器

      },
      // 失去焦点事件
      onEditorBlur(){
        console.log(this.content);
      },
      // 获得焦点事件
      onEditorFocus(){

      },
      // 内容改变事件
      onEditorChange(){

      },
      // 转码
      // escapeStringHTML(str) {
      //   str = str.replace(/&lt;/g,'<');
      //   str = str.replace(/&gt;/g,'>');
      //   return str;
      // },
      addImg(){
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        for (let i=0; i < this.fil.length; i++) {
          this.$set(this.imgs,this.fil[i].name,this.fil[i]);
        }
      },
      getObjectURL(file) {
          var windowURL = window.URL || window.webkitURL;
          var dataUrl = windowURL.createObjectURL(file);//图片临时路径
        return dataUrl ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
      },
      getTitle(){

      },
      //设置规格
      addSel() {
        this.dialogFormVisible = true;
      },
      //选择span
      selSpan(data, event) {
        event.target.classList.toggle("active");


      },
      //选择img
      selImg(data, event) {
        event.target.classList.toggle("active");
      },
      onUpload() {
        var fileObj = this.$refs.upload;
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        //fileObj.files[0]   FormData
        dataURL = windowURL.createObjectURL(fileObj.files[0]);//图片临时路径
        this.$refs.previewImg.src = dataURL;
        this.sizeForm.imgURl = dataURL;
        this.sizeForm.fileImg = new FormData();
        this.sizeForm.fileImg.append("file", fileObj.files[0], fileObj.files[0].name);
        console.log(fileObj.files[0]);
      },
      //本地保存
      diaSubmit() {
        this.dialogFormVisible = false;
      },
      //取消保存回到上一层
      cancal() {
        this.$router.push({name: 'mailManage'})
      },
      //提交页面所有数据
      onSubmit() {
        //多图
        for(let key in this.imgs){
          let name=key;
          //console.log(this.imgs[key]);
          this.formData.append('multipartFiles',this.imgs[key],name);
        }
        this.$router.push({name: 'mailManage'});
      },
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
  .page-title{
    font-size:18px;
  }
  .container-fluid{
    background-color:#fff;
    padding:20px;
    margin-left: 12px;
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
    top:15px;
    margin-left:8px;
  }

  .item{
    display:flex;
    align-items: center;
    padding:20px;
  }
  .item .left{
      width:110px;
      text-align: right;
      margin-right:15px;
  }
  .item .right span{
    border:1px solid #eee;
    text-align:center;
    padding:4px 6px;
    margin-right:6px;
    cursor:pointer;
  }
  .item .right img{
    display:inline-block;
    width:34px;
    height:34px;
    border:1px solid #ddd;
    margin-right:6px;
    cursor:pointer;
  }
  .item .right .active{
    border: 2px solid #409EFF;
  }
  .imgBox{
    position:relative;
    display: inline-block;
    width:120px;
    height:120px;
    margin-right:10px;
    margin-top:10px;
  }

  .imgBox .button{
    width:100%;
    text-align: center;
  }
  .imgBox .button span{
    color:#409EFF;
    cursor:pointer;
    padding:0 4px;
  }
</style>
