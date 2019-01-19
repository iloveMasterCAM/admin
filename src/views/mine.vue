<template>
  <div class="main">
    <!-- MAIN CONTENT -->
    <div class="main-content" id="main-content">
      <div class="title">个人信息设置</div>
      <div class="clearfix content">
        <div class="side pull-left left">
          <ul @click="tabMine">
            <li class="first">
              <i class="iconfont icon-yonghuziliaogerenxinxigerenziliao-xianxing"></i>个人信息
            </li>
            <li class="" num="0" :class='{active:isShow == 0}'>
              <i class="iconfont icon-class"></i>基本设置
            </li>
            <li num="1" :class='{active:isShow == 1}'>
              <i class="iconfont icon-anquan"></i>安全设置
            </li>
            <li num="2" :class='{active:isShow == 2}'>
              <i class="iconfont icon-shouji"></i>更换手机
            </li>
            <li num="3" :class='{active:isShow == 3}'>
              <i class="iconfont icon-bangzhu"></i>帮助
            </li>
          </ul>
        </div>
        <div class="cneter pull-left userInfo" v-show="isShow == 0">
          <div class="clearfix">
            <div class="c_left pull-left">姓名:</div>
            <div class="c_right pull-right clearfix">
              <div class="col-xs-7"><el-input v-model="USERNAME" @blur="isName" :readonly="readonly" placeholder="请输入姓名"></el-input></div>
              <div class="col-xs-3 pull-right text-right">  <el-button @click="edit" type="primary">{{editTxt}}</el-button></div>
            </div>
          </div>

          <div class="clearfix">
            <div class="c_left pull-left">账号名称:</div>
            <div class="c_right pull-right">
                <div class="col-xs-9"><el-input v-model="NAME" :readonly="readonly" placeholder="请输入账号名称"></el-input></div>
              
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">选择性别:</div>
            <div class="c_right pull-right sex">
              <el-radio v-model="radio" label="1">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">手机号码:</div>
            <div class="c_right pull-right">
              <el-input v-model="PHONE" :readonly="readonly" placeholder="请输入手机号码"></el-input>
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">邮箱:</div>
            <div class="c_right pull-right">
              <el-input :readonly="readonly" placeholder="请输入邮箱"></el-input>
            </div>
          </div>
       
          <div class="clearfix">
            <div class="c_left pull-left">QQ:</div>
            <div class="c_right pull-right">
              <el-input :readonly="readonly" placeholder="请输入QQ"></el-input>
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">所属区域:</div>
            <div class="c_right pull-right">
              <div class="col-xs-6">
                <el-select v-model="province" :disabled="readonly"  placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="col-xs-6">
                <el-select v-model="city" :disabled="readonly" class="pull-right" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">出生日期:</div>
            <div class="c_right pull-right age">
              <div>
                <el-select v-model="year" :disabled="readonly" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="month" :disabled="readonly" class="pull-right" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="day" :disabled="readonly" class="pull-right" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">修改头像:</div>
            <div class="c_right pull-right headImg">
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2082925491,3690093855&fm=27&gp=0.jpg"
                alt
              >
              <span class="edit">
                <i class="iconfont icon-bianji"></i>
              </span>
            </div>
          </div>
          <div class="clearfix">
            <div class="c_left pull-left">&nbsp;</div>
            <div class="c_right pull-right confim">
              <span>返回修改</span>
              <span class="save" @click="save" v-show="!readonly">保存提交</span>
            </div>
          </div>
        </div>
        <div class="cneter pull-left passwrold" v-show="isShow == 1">
          <div>
            <p class="tips_box">旧密码  <span class="tips"  v-show="tipsShow" v-text="tipsVal"></span></p>
            <p>
              <el-input v-model="oldPasw" @blur="oldPaswFn" type="password" placeholder="请输入旧密码"></el-input>
            </p>
          </div>
          <div>
            <p>新密码</p>
            <p>
              <el-input v-model="newPasw" type="password" placeholder="请输入新密码"></el-input>
            </p>
          </div>
          <div>
            <p>确认密码</p>
            <p>
              <el-input v-model="confrimPasw" type="password" placeholder="请输入确认密码"></el-input>
            </p>
          </div>
          <div class="confim">
            <span class="save">确认保存</span>
          </div>
        </div>
        <div class="cneter pull-left phone" v-show="isShow == 2">
          <div class="status">
            <div>
              <span class="active">1</span>修改手机
            </div>
            <div class="new">
              <span class="active">2</span>绑定新手机
            </div>
            <div>
              <span>3</span>完成
            </div>
          </div>
          <div class="old" v-show="false">
            <p>原始手机号</p>
            <div class="clearfix box">
              <div class="col-xs-9">
                <el-input placeholder="请输入姓名"></el-input>
              </div>
              <div class="col-xs-3">
                <span class="send">发送验证码</span>
              </div>
            </div>
            <p>验证码</p>
            <div class="clearfix box">
              <div class="col-xs-9">
                <el-input placeholder="输入验证码"></el-input>
              </div>
            </div>
            <div class="confim">
              <span class="save">下一步</span>
            </div>
          </div>
           <div class="new" v-show="false">
            <p>绑定新手机</p>
            <div class="clearfix box">
              <div class="col-xs-9">
                <el-input placeholder="请输入绑定新手机"></el-input>
              </div>
              <div class="col-xs-3">
                <span class="send">发送验证码</span>
              </div>
            </div>
            <p>验证码</p>
            <div class="clearfix box">
              <div class="col-xs-9">
                <el-input placeholder="输入验证码"></el-input>
              </div>
            </div>
            <div class="confim">
              <span class="save">确定修改</span>
            </div>
          </div>
          <div class="success text-center">
              <div><i class="iconfont icon-chenggong"></i></div>
              <div> <h2>修改成功</h2> </div>
              <div> <p class="newPhone">当前手机号: <span>17750877003</span> </p> </div>
          </div>
        </div>
        <div class="side right pull-right">
          <div class="headImgbg">
            <div>
              <p>
                <img
                  class="headimg"
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2082925491,3690093855&fm=27&gp=0.jpg"
                  alt
                >
              </p>
              <p>
                <span>你好</span>
                <i class="iconfont icon-nan"></i>
              </p>
            </div>
          </div>
          <ul>
            <li>
              <i class="iconfont icon-shijian"></i>胡建厦门
            </li>
            <li>
              <i class="iconfont icon-shijian"></i>1998-10-01
            </li>
            <li>
              <i class="iconfont icon-tubiao209"></i>1091060034@qq.com
            </li>
            <li>
              <i class="iconfont icon-shouji"></i>{{PHONE|| 17750877005}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <img id="img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3243445518,1285394533&fm=27&gp=0.jpg" alt=""> -->
    <!-- END MAIN CONTENT -->
  </div>

</template>
<style scoped>
#main-content .right {
}
#main-content .right .headImgbg {
  height: 160px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(../assets/head_bg.jpg);
  text-align: center;
  padding-top: 40px;
}
#main-content .right .headImgbg span,
#main-content .right .headImgbg i {
  color: #fff;
}
#main-content .right .headimg {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
#main-content .right ul li {
  line-height: 45px;
}
#main-content .phone .status {
  display: flex;
  justify-content: space-between;
}
#main-content .phone .status span {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #b4bac4;
  text-align: center;
  line-height: 25px;
  margin-right: 5px;
  color: #b4bac4;
}
#main-content .phone .status span.active {
  background: #328ffe;
  color: #fff;
  border-color: #328ffe;
}
#main-content .phone .status .new {
  position: relative;
}
#main-content .phone .status .new::before {
  content: "";
  display: block;
  position: absolute;
  top: 49%;
  left: 160px;
  width: 140px;
  height: 1px;
  background: #f3f5f7;
}
#main-content .phone .status .new::after {
  content: "";
  display: block;
  position: absolute;
  top: 49%;
  right: 160px;
  width: 140px;
  height: 1px;
  background: #f3f5f7;
}
#main-content .phone .confim {
  margin-top: 50px;
}
#main-content .phone .box {
  margin-bottom: 20px;
}
#main-content .phone .send {
  padding: 8px 20px;
  border-radius: 2px;
  color: #328ffe;
  border: 1px solid #328ffe;
  display: inline-block;
  margin-left: 10px;
}
#main-content .phone .success{
  padding-top: 70px;

}
#main-content .phone .success h2{
  color: #a8afbb;
  margin: 0;
  margin-bottom: 20px;
}
#main-content .phone .icon-chenggong{
    font-size: 100px;
    color: #328ffe;
}
#main-content .newPhone{
  display: inline-block;
  background: #f3f5f7;
  padding: 10px  25px;
  color: #647787
}
#main-content .col-xs-7{
 width: 58.33333333%; 
}
#main-content .tips_box{
  position: relative;
}
#main-content .tips{
  position: absolute;
  top: 0;
  right: 0;
   color: #f53434;
  font-size: 13px;
}
#main-content {
}
#main-content {
}
#main-content {
}
#main-content {
}
li {
  list-style: none;
}
#main-content {
  font-family: "微软雅黑";
}
.main-content {
  margin-top: 30px;
  margin-left: 30px;
  background: #fff;
  padding: 30px 50px;
}
#main-content .title {
  font-size: 17px;
  color: #1e1c1c;
}

#main-content .side {
  width: 20%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  min-width: 280px;
}
#main-content .side li i {
  margin-right: 10px;
}
#main-content .cneter {
  width: 54%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  min-height: 500px;
  margin-left: 3%;
  min-width: 550px;
  min-height: 700px;
  padding: 30px 55px;
}
#main-content .cneter > div {
  margin-bottom: 25px;
}
#main-content .content {
  margin-top: 30px;
}
#main-content .left {
  padding: 30px 15px;
}
#main-content .left li {
  line-height: 50px;
  border-bottom: 1px solid #f3f5f7;
  padding-left: 20px;
  cursor: pointer;
}
#main-content .left ul {
  border: 1px solid #f3f5f7;
  border-bottom: none;
  margin: 0;
  padding: 0;
}
#main-content .left li.active {
  background: #e4effd;
  color: #328ffe;
}
#main-content ul .first {
  color: #fff;
  background: #328ffe;
}

#main-content .c_left {
  width: 14%;
  text-align: right;
  line-height: 40px;
}
#main-content .c_right {
  width: 80%;
}

#main-content .sex {
  padding-top: 10px;
}
#main-content .cneter div[class*="col-xs-"] {
  padding: 0;
}
#main-content .cneter .age {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
#main-content .cneter .age > div {
  width: 31%;
}
#main-content .edit {
  margin-left: 10px;
}
#main-content .edit i {
  font-size: 36px;
}
#main-content .headImg img {
  width: 100px;
}
#main-content .confim span {
  padding: 10px 20px;
  border: 1px solid #a8afbb;
  cursor: pointer;
  display: inline-block;
  margin-right: 50px;
}
#main-content .confim .save {
  background: #328ffe;
  border: 1px solid #328ffe;
  color: #fff;
}
</style>
<script>

export default {
  data() {
    return {
      radio: false,
      isShow:0,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      province:'',
      city:'',
      month:'',
      day:'',
      year:'',
      USERNAME:'',
      PHONE:'',
      NAME:'',
     readonly:true,
     editTxt:'预览',
     isNameT:true,
     oldPasw:'',
     newPasw:'',
     confrimPasw:'',
      tipsVal: "密码错误！",
      tipsShow: false,
    };
  },
  methods:{
    tabMine(evnet){
      //getAttribute
      let num = evnet.target.getAttribute('num');
      if(num != 3){
        this.isShow = num
      }
    },
    userInfo(){
      let that = this;
      this.axios.post('userCenter/getUserInfo',{},function(r){
        console.log(r)
        that.USERNAME = r.d.user.USERNAME
        that.username = r.d.user.USERNAME
        that.PHONE = r.d.user.PHONE
        that.EMAIL = r.d.user.EMAIL
        that.USER_ID = r.d.user.USER_ID
        that.NAME = r.d.user.NAME
      })
    },
    // 编辑 / 预览 切换
    edit(){
      this.readonly = !this.readonly;
     this.editTxt = this.readonly ? '预览':'编辑'
    },
    // 判断旧密码
    oldPaswFn(){
      ///userCenter/checkPassword、
        let that = this;
        var data = new URLSearchParams()
       data.append('USERNAME',this.USERNAME)
       data.append('PASSWORD',this.oldPasw)
      this.axios.post('userCenter/checkPassword',data,function(r){
        console.log(r)
        if(r.s){

        }else{
            that.tips("旧密码错误");
        }
      })
    },
    //userCenter/updataUser.do修改用户资料 保存用户资料
    save(){
      let that = this;
      if(!that.USER_ID){
          alert('userid没找到')
        return
      }
      if(!that.isNameT){
        alert('名称不可用')
        return
      }
      if(!that.USERNAME || !that.NAME || !that.EMAIL){
          alert('信息不完整')
        return
      }

      var data = new URLSearchParams()
      data.append("USERNAME",that.USERNAME)
      data.append("NAME",that.NAME)
      data.append("EMAIL",that.EMAIL)
      data.append("USER_ID",that.USER_ID)
        this.axios.post('userCenter/updataUser.do',data,function(r){
          console.log(r)
          if(r.s){
            that.token.delCookie('token')
            that.$router.push('/login')
          }
        })
    },
    isName(){
        let that = this;
       var data = new URLSearchParams()
       data.append('username',this.USERNAME)

      this.axios.post('userCenter/selectByUsername',data,function(r){
      //  console.log(r)
        if( that.USERNAME == that.username || r.s){
          that.isNameT = true;
        }else{
           alert('名称不可用')
            that.isNameT = false;
        }
      })
      //
    },
    //提示
    tips(v) {
      this.tipsShow = true;
      this.tipsVal = v;
    },
  },
  created(){ // 实例刚被创建
   
  },
  mounted(){ //模板编译/挂载之后
  this.userInfo();
   let that = this;
    document.onkeydown = function(e) {
      if (!e) e = window.event;
      if ((e.keyCode || e.which) == 8) {
        that.tipsShow = false;
      }
    };
  // this.axios.post('userCenter/selectByUsername',{"username":'12121'},function(r){
  //   console.log(r)
  // })
  //console.log(document.getElementById('img').offsetWidth)
  }
};
</script>

