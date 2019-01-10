<template>

  <div id="main">
    <div id="main_box"></div>
    <div class="aui-row">
      <div class="login_box wrap">
        <div class="aui-row">
          <ul class="aui-row title rightTitle aui-pull-right">
            <li class="aui-pull-left login" :class="{'active':active}" @click="tabNav">登录</li>
            <li class="aui-pull-left register" :class="{'active':!active}" @click="tabNav">注册</li>
          </ul>
          <p class="tips" v-show="tipsShow" v-text="tipsVal"></p>
        </div>

        <div v-show="active" class id="login">
          <div class="aui-pull-left left">
            <img src="../assets/login/login.jpg" alt>
          </div>
          <div class="aui-pull-right right">
            <div class="account">
              <p class="userName">用户名</p>
              <div class="bor">
                <input type="text" placeholder="请输入手机号码或邮箱">
              </div>
            </div>
            <div class="password">
              <p class="userpassword">密码</p>
              <div class="bor">
                <input type="password" class="aui-padded-r-15" placeholder="请输入6~12位密码">
                <i class="iconfont icon-kanjian icon"></i>
              </div>
            </div>
            <div class="aui-row jz">
              <div class="aui-pull-left">
                <label for="jz">
                  <input class="aui-checkbox" id="jz" type="checkbox"> 记住账号
                </label>
              </div>
              <div class="aui-pull-right">忘记密码?</div>
            </div>
            <div class="login_btn_box aui-text-center">
              <p class="login_btn">
                <input type="submit" value="立即登录">
              </p>
            </div>
            <div class="aui-text-center threeLogin">
              <span>使用其他方式登录</span>
              <i class="iconfont icon-share-"></i>
              <i class="iconfont icon-QQ"></i>
              <i class="iconfont icon-zhifubao"></i>
            </div>
          </div>
        </div>
        <div v-show="!active" class="register_box wrap" id="register">
          <div class="aui-pull-left left">
            <img src="../assets/login/register.jpg" alt>
          </div>
          <div class="aui-pull-right right">
            <div class="account">
              <p class="userName">用户名</p>
              <div class="bor">
                <input type="text" @blur="isRegisterFun" v-model="phone" placeholder="请输入手机号码或邮箱">
              </div>
            </div>
            <div class="password">
              <p class="userpassword">密码</p>
              <div class="bor">
                <input
                  type="password"
                  @blur="passwordFun"
                  v-model="passwordVal"
                  class="aui-padded-r-15"
                  placeholder="请输入6~12位密码"
                >
                <i class="iconfont icon-kanjian icon"></i>
              </div>
            </div>
            <div class="password code">
              <p class="userpassword">校验码</p>
              <div class="bor">
                <input type="text" class="aui-padded-r-15" placeholder="请输入校验码">
                <span class="send" @click="sendCode" v-text="codeMsg"></span>
              </div>
            </div>
            <div class="aui-row jz">
              <div class="aui-pull-left">
                <label for="zc">
                  <input class="aui-checkbox" id="zc" type="checkbox"> 注册表示同意《注册协议》
                </label>
              </div>
            </div>
            <div class="login_btn_box aui-text-center">
              <p class="login_btn">
                <input type="submit" value="立即注册">
              </p>
            </div>
            <!-- <div class="aui-text-center threeLogin">
                        <span>使用其他方式登录</span> <i class="iconfont icon-share-"></i> <i class="iconfont icon-QQ"></i> <i
                            class="iconfont icon-zhifubao"></i>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* 
  $("#main .title li").on('click', function () {
            if ($(this).hasClass('active')) return;
            if ($(this).parents('.wrap').hasClass('register_box')) {
                $("#login").removeClass('aui-hide')
                $("#register").addClass('aui-hide')
            } else {
                $("#login").addClass('aui-hide')
                $("#register").removeClass('aui-hide')
            }
        })
*/
export default {
  data() {
    return {
      codeMsg: "发送校验码",
      active: true,
      isRegister: null,
      passwordVal: "",
      ispassword: true,
      tipsVal: "登录错误！",
      tipsShow: false,
      phone: ""
    };
  },
  methods: {
    isRegisterFun() {
      /* 
		 	{s:true,c:200,m:'登录成功',d:{val:'112'}} 
		  */
      //if (!this.isPhone(this.phone)) return;
     /*  $.ajax({
        url: "http://192.168.1.8:8080/FH-WEB/shops/regist/checkPhone.do",
        data: { PHONE: "17750877003" },
        type: "post",
        success: function(reslut) {
          if (reslut.s) {
            if (reslut.d) {
              this.isRegister = false;
            }
            this.isRegister = false;
          }
          console.log(reslut);
        },
        error: function(err) {
          console.log(err);
        }
	  }); */
	  console.log('2121')
	  let data=new FormData();
	  data.append("PHONE","17750877003");
	 this.$axios.post('http://192.168.1.8:8080/FH-WEB/shops/regist/checkPhone.do',{'PHONE':'17750877003'}).then((reslut) =>{
		  console.log(reslut)
	  })
	  /* 
	  this.$axios({
    method: 'post',
    url:url,
    params: {
        is_iso:1,
        goods_id:goods_id
    }
}).then((res)=>{

}) 
	  */
	  


    },
    passwordFun() {
      var reg = /^[0-9|a-z|A-Z]{6,12}$/;
      console.log(reg.test(this.passwordVal));
      if (!reg.test(this.passwordVal)) {
        this.ispassword = false;
        this.tips("密码错误！");
        return false;
      } else {
        return true;
      }
    },
    sendCode() {
      let that = this;
      //if(!this.isPhone(this.phone)) return;

      localStorage["now"] = parseInt(new Date().valueOf() / 1000);
      if (
        (!this.time && !localStorage["time"]) ||
        Math.abs(localStorage["now"]) - Math.abs(localStorage["time"]) > 10
      ) {
        this.codeMsg = "09/S";
 		localStorage['time'] = parseInt(new Date().valueOf()/1000)
        clearInterval(that.time);
        this.time = setInterval(() => {
          var num = parseInt(that.codeMsg) - 1;
          that.codeMsg = num + "/S";
          if (num == 0) {
            that.codeMsg = "重新发送";
			clearInterval(that.time);
			that.time = null
          }
        }, 1000);
      }else{
		  console.log(121)
	  }
    },
    isPhone(v) {
      var reg = /^1[2,3,4,5,6,7,8,9][0-9]{9}$/;
      if (!reg.test(v)) {
        this.tips("手机号错误！");
        return;
      }
    },
    tips(v) {
      this.tipsShow = true;
      this.tipsVal = v;
    },
    /* 
	 
	   $.ajax({
       
            url: 'http://192.168.1.8:8080/FH-WEB/shops/regist/checkPhone.do',
            data: { PHONE: '17750877003' },
            type: 'post',
            success: function (reslut) {
                console.log(reslut)
            },
            error: function (err) {
                console.log(err)
            }
        })
	  */
    tabNav() {
      this.active = !this.active;

      //alert('11212')
      //shops/regist/checkPhone.do
      // axios.post('http://192.168.1.8:8080/FH-WEB/shops/regist/checkPhone.do',{
      // 	data:{PHONE:'17750877003'}
      // }).then( (e,r)=> {
      // 	console.log(e)
      // 	console.log(r)
      // })

      //   this.$axios.post("regist/checkPhone.do",  JSON.stringify({
      //     PHONE:'17750877003'
      //     }))
      //     .then(function(response) {
      //       console.log(response);
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
    }
  },
  mounted() {
    let that = this;
    document.onkeydown = function(e) {
      if (!e) e = window.event;

      if ((e.keyCode || e.which) == 8) {
        that.tipsShow = false;
      }
    };
  }
  //   beforeCreate: function() {
  //     console.log("2121245");
  //   }
};
</script>

<style scoped>
@import "../assets/aui/aui.css";

#main_box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-position: top center;
  background-repeat: no-repeat;
  background-image: url(../assets/login/500264184.jpg);

  background-size: cover;
}
#main .login_box input::placeholder {
  font-size: 12px;
}
#main .login_box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1100px;
  margin: -270px 0 0 -550px;
  z-index: 10;
  background: #f5f6f8;
}
#main .input_box {
  position: relative;
  border-bottom: 1px dotted #ccc;
  margin-top: 20px;
}
#main .input_box i {
  position: absolute;
  top: 16px;
  left: 4px;
}
#main .login_box .input_box input {
  padding-left: 30px;
}

#main .tips {
  position: absolute;
  right: 80px;
  top: 40px;
  color: #f53434;
  font-size: 13px;
}
#main .left {
  width: 0;
  height: 100%;
  padding-top: 120px;
}
#main .left img {
  position: absolute;
  left: 60px;
  bottom: -1px;
  width: 550px;
}
#main .register_box .left img {
  left: 0px;
}
#main .right {
  width: 550px;
  padding: 38px 80px 35px 80px;
}
.wrap .title {
  margin-top: 30px;
}
.wrap.register_box .title {
  margin-bottom: 20px;
}
.wrap .title li {
  font-size: 22px;
  font-weight: 600;
  margin-right: 35px;
  padding-bottom: 5px;
  border-bottom: 3px solid transparent;
  color: #1c1a1a;
}

.wrap .title li.active {
  color: #229eff;
  border-color: #229eff;
}

.wrap .userName,
.wrap .userpassword {
  font-size: 16px;
  color: #1c1a1a;
  font-weight: 700;
  margin-bottom: 15px;
}
.wrap.register_box .userName,
.wrap.register_box .userpassword {
  margin-bottom: 0;
}
.wrap .bor {
  border-bottom: 1px solid #bfbfbf;
}
.wrap .password {
  margin: 30px 0;
  position: relative;
}
.wrap.register_box .password {
  margin: 26px 0;
}
.wrap .login_btn_box {
  margin: 40px 0 50px;
}
.wrap.register_box .login_btn_box {
  margin: 32px 0 43px;
}
.wrap .login_btn {
  color: #fff;
  font-size: 17px;
  width: 80%;
  margin: 0 auto;
  line-height: 35px;
  border-radius: 30px;
  background: #229eff;
  box-shadow: 0px 3px 20px 0px #229eff;
}
.wrap .login_btn input {
  width: 100%;
  background: transparent;
}
.wrap .threeLogin span,
.wrap .threeLogin i {
  color: #bbbbbb;
  font-size: 14px;
}
.wrap .threeLogin i {
  padding: 0 10px;
  font-size: 16px;
}
.wrap .aui-checkbox {
  background: #ddd;
  border-color: #ddd;
  border-radius: 0.2rem;
}
.wrap .aui-checkbox:checked {
  background: #229eff;
}
.wrap .jz div {
  color: #bfbfbf;
}
.wrap .password .icon {
  position: absolute;
  bottom: 10px;
  right: 0;
}
.wrap .code span {
  position: absolute;
  bottom: 5px;
  right: 0;
  border-radius: 30px;
  line-height: 15px;
  padding: 3px 6px;
  border: 1px solid #229eff;
  color: #229eff;
}

#main .rightTitle {
  width: 550px;
  padding: 0 0 0 80px;
}
</style>


