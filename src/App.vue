<template>
  <div id="wrapper">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="brand">
        <a href="index.html">
          <img
            src="../static/assets/img/logo-dark.png"
            alt="Klorofil Logo"
            class="img-responsive logo"
          >
        </a>
      </div>
      <div class="container-fluid">
        <div class="navbar-btn">
          <button type="button" class="btn-toggle-fullwidth">
            <i class="lnr lnr-arrow-left-circle"></i>
          </button>
        </div>
        <form class="navbar-form navbar-left">
          <div class="input-group">
            <input type="text" value class="form-control" placeholder="Search dashboard...">
            <span class="input-group-btn">
              <button type="button" class="btn btn-primary">Go</button>
            </span>
          </div>
        </form>
        <div class="navbar-btn navbar-btn-right">
          <a
            class="btn btn-success update-pro"
            href="#downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&amp;utm_medium=template&amp;utm_campaign=KlorofilPro"
            title="Upgrade to Pro"
            target="_blank"
          >
            <i class="fa fa-rocket"></i>
            <span>UPGRADE TO PRO</span>
          </a>
        </div>
        
        <div id="navbar-menu">
          <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="lnr  lnr-shirt"></i>
                <span>换肤</span>
                <i class="icon-submenu lnr lnr-chevron-down"></i>
              </a>
              <ul class="dropdown-menu notifications">
                <li @click="day">
                  <a class="notification-item">
                    <span class="dot bg-warning"></span>白天
                  </a>
                </li>
                <li @click="evening">
                  <a class="notification-item">
                    <span class="dot bg-danger"></span>夜晚
                  </a>
                </li>
               <li @click="blue">
                  <a class="notification-item">
                    <span class="dot bg-danger"></span>蓝色
                  </a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                <i class="lnr lnr-alarm"></i>
                <span class="badge bg-danger">5</span>
              </a>
              <ul class="dropdown-menu notifications">
                <li>
                  <a href="#" class="notification-item">
                    <span class="dot bg-warning"></span>System space is almost full
                  </a>
                </li>
                <li>
                  <a href="#" class="notification-item">
                    <span class="dot bg-danger"></span>You have 9 unfinished tasks
                  </a>
                </li>
                <li>
                  <a href="#" class="notification-item">
                    <span class="dot bg-success"></span>Monthly report is available
                  </a>
                </li>
                <li>
                  <a href="#" class="notification-item">
                    <span class="dot bg-warning"></span>Weekly meeting in 1 hour
                  </a>
                </li>
                <li>
                  <a href="#" class="notification-item">
                    <span class="dot bg-success"></span>Your request has been approved
                  </a>
                </li>
                <li>
                  <a href="#" class="more">See all notifications</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="lnr lnr-question-circle"></i>
                <span>帮助</span>
                <i class="icon-submenu lnr lnr-chevron-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Basic Use</a>
                </li>
                <li>
                  <a href="#">Working With Data</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Troubleshooting</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="../static/assets/img/user.png" class="img-circle" alt="Avatar">
                <span>LLLLLL</span>
                <i class="icon-submenu lnr lnr-chevron-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">
                    <i class="lnr lnr-user"></i>
                    <span>我的资料</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lnr lnr-envelope"></i>
                    <span>消息</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lnr lnr-cog"></i>
                    <span>设置</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lnr lnr-exit"></i>
                    <span>退出登录</span>
                  </a>
                </li>
              </ul>
            </li>
            <!-- <li>
							<a class="update-pro" href="#downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro" title="Upgrade to Pro" target="_blank"><i class="fa fa-rocket"></i> <span>UPGRADE TO PRO</span></a>
            </li>-->
          </ul>
        </div>
      </div>
    </nav>
    <div id="sidebar-nav" class="sidebar">
      <div class="sidebar-scroll">
        <nav>
          <ul class="nav">
            <router-link to="/" exact tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>看板</span>
              </a>
            </router-link>
            <router-link to="/charts" tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>折线图</span>
              </a>
            </router-link>
           <router-link to="/panels" tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>Panels</span>
              </a>
            </router-link>
           <router-link to="/notifications" tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>notifications</span>
              </a>
            </router-link>
            <router-link to="/lockscreen" tag="li">
               <a >
                <i class="lnr lnr-file-empty"></i>
                <span>Pages</span>
              
              </a>
            </router-link>
             <router-link to="/profile" tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>profile</span>
              </a>
            </router-link>
             <router-link to="/login" tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>login</span>
              </a>
            </router-link>
           <router-link to="/tables" tag="li">
              <a href class>
                <i class="lnr lnr-home"></i>
                <span>tables</span>
              </a>
            </router-link>
            <router-link to="/typography" tag="li">
              <a href class>
                <i class="lnr lnr-text-format"></i>
                <span>typography</span>
              </a>
            </router-link>
            <router-link to="/icons" tag="li">
              <a href class>
                <i class="lnr lnr-linearicons"></i>
                <span>icons</span>
              </a>
            </router-link>
           
          </ul>
        </nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    day(){
       localStorage['skin'] = ''
      $('#skin').attr({'href':''})
    },
  evening(){
    localStorage['skin'] = './static/assets/css/skin.css'
    $('#skin').attr({'href':'./static/assets/css/skin.css'})
  },
   blue(){
     localStorage['skin'] = './static/assets/css/blue.css'
    $('#skin').attr({'href':'./static/assets/css/blue.css'})
  }
  },
  mounted(){
    $("head").append(' <link rel="stylesheet" href="'+ localStorage['skin']+'" id="skin">')
  },
 

};
</script>

<style>
</style>
