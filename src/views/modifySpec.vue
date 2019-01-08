<template>
  <transition name="fade">
    <div class="main">
      <div class="main-content">
        <div class="container-fluid">
          <h3 class="page-title">修改</h3>
              
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>
<script>
  export default {
    data(){
      return{

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
