<template>
  <div class="main">
    <!-- MAIN CONTENT -->
    <div class="main-content">
      <div class="container-fluid panel" id="panel">
        <div class="clearfix saerch">
          <div class="col-xs-3">
            <el-input placeholder="输入要搜索的内容"></el-input>
          </div>
          <div class="pull-left">
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="pull-left">
            <el-button type="success">添加分类</el-button>
          </div>
        </div>
        <div>
          <table width="100%">
            <tr>
              <th>ID</th>
              <th>分类名称</th>
              <th>创建时间</th>
              <th>分类排序</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in row" :key="index">
              <td>{{item.categoryId}}</td>
              <td>{{item.categoryName}}</td>
              <td>1</td>
              <td>1</td>
              <td>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div id="add">
      <div class="el-row text-center">
        <el-input class="pull-left" placeholder="请输入分类名称"></el-input>
        <el-button type="primary">添加分类</el-button>
      </div>
    </div>
    <!-- END MAIN CONTENT -->
  </div>
  <!-- scoped -->
</template>
<style scoped>
#add {
  position: fixed;

  padding: 20px;
  background: #fff;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -200px;
  z-index: 10;
  box-shadow: 0 0 20px #eee;
}
#add>div>div{
	margin-bottom: 30px;
}
#panel {
  height: 800px;
  padding-top: 30px;
}
#panel .saerch > div {
  height: 100px;
  margin-right: 10px;
}
#panel tr {
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
#panel th {
  padding-left: 10px;
}
#panel td {
  padding: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      row: []
    };
  },
  mounted() {
    let that = this;
    //productCategory/categoryByPid
    this.axios.post(
      "productCategory/categoryByPid",
      { categoryParintId: "0" },
      function(r) {
        console.log(r);
        that.row = r.d.categorys;
      }
    );
  }
};
</script>

