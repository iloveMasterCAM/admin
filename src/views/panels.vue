<template>
  <div class="main">
    <!-- MAIN CONTENT -->
    <div class id="list" v-show="isShow == 0">
      <p>
        <el-button @click="addClassify" type="primary">添加模板</el-button>
        <el-button @click="delAll" type="danger">批量删除</el-button>
      </p>
      <table width="100%">
        <tr>
          <th>
            <el-checkbox @change="allCheckbox" :checked="checked">全选</el-checkbox>
          </th>
          <th>标题</th>
          <th>免运费</th>
          <th>计费类型</th>
          <th>管理操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>
            <el-checkbox v-model="item.checked">{{index+1}}</el-checkbox>
          </td>
          <td>
            <em v-show="!item.show">{{item.title}}</em>
            <input type="text" v-model="item.title" v-show="item.show">
          </td>
          <td>
            <em v-show="!item.show">{{item.free == '0'?"是":"否"}}</em>
            <el-radio v-show="item.show" v-model="item.free" label="0">是</el-radio>
            <el-radio v-show="item.show" v-model="item.free" label="1">否</el-radio>
          </td>
          <td>
            <em v-show="!item.show">{{item.type == '0'?"按件计算":"按重量"}}</em>
            <el-radio v-show="item.show" v-model="item.type" label="0">按件计算</el-radio>
            <el-radio v-show="item.show" v-model="item.type" label="1">按重量</el-radio>
          </td>
          <td>
            <span @click="detail(item.id)">[详情]</span>
            <span @click="delClassify(item.id)">[删除]</span>
            <span @click="allEdit(index)" v-text="item.editTXT"></span>
          </td>
        </tr>
      </table>
    </div>
    <div id="add" v-show="isShow == 1">
       <p>  <el-button @click="back" type="primary">返回</el-button></p>
      <div class="el-row">
        <div class="el-col-2">模板标题:</div>
        <div class="el-col-10">
          <el-input v-model="title" placeholder="请输入模板标题"></el-input>
        </div>
      </div>
      <div class="el-row">
        <div class="el-col-2">免运费:</div>
        <div class="el-col-10">
          <el-radio v-model="isFree" label="0">是</el-radio>
          <el-radio v-model="isFree" label="1">否</el-radio>
        </div>
      </div>
      <div class="el-row">
        <div class="el-col-2">计费类型:</div>
        <div class="el-col-10">
          <el-radio v-model="isType" label="0">按件数</el-radio>
          <el-radio v-model="isType" label="1">按重量</el-radio>
        </div>
      </div>
      <div class="el-row">
        <div class="el-col-2">&nbsp;</div>
        <div class="el-col-10">
          <el-button class="pull-right" @click="confirm" type="primary">添加模板</el-button>
        </div>
      </div>
    </div>
    <!-- 
	起步值	起步价	加值	加价
    -->
    <div id="detail" v-show="isShow == 2">
      <p>  <el-button @click="back" type="primary">返回</el-button></p>
      <table width="100%">
        <tr>
          <th>区域</th>
          <th>起步值</th>
          <th>起步价</th>
          <th>加值</th>
          <th>加价</th>
          <th>操作</th>
        </tr>
        <tr v-for="(Item,index) in detailData" :key="index">
          <td>
            <el-select
              v-model="Item.shen"
              value-key="index"
              placeholder="请选择"
              :disabled="Item.readonly"
              @change="choseProvince($event,index)"
            >
              <el-option
                v-for="item in province"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-select
              v-model="Item.shi"
              :disabled="Item.readonly"
              placeholder="请选择"
              @change="choseCity($event,index)"
            >
              <el-option
                v-for="item in shi1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>
            <el-input
              class="value"
              :disabled="Item.readonly"
              :value="Item.startValue"
              v-model="Item.startValue"
            ></el-input>
          </td>
          <td>
            <el-input
              class="value"
              :disabled="Item.readonly"
              :value="Item.startFee"
              v-model="Item.startFee"
            ></el-input>
          </td>
          <td>
            <el-input
              class="value"
              :disabled="Item.readonly"
              :value="Item.addValue"
              v-model="Item.addValue"
            ></el-input>
          </td>
          <td>
            <el-input
              class="value"
              :disabled="Item.readonly"
              :value="Item.addFee"
              v-model="Item.addFee"
            ></el-input>
          </td>
          <td>
            <span @click="edit(index,Item.id)" v-text="Item.txt"></span>
            <span>[删除]</span>
          </td>
        </tr>
      </table>
    </div>
    <!-- END MAIN CONTENT -->
  </div>
</template>
<style>
#add > div {
  margin-bottom: 15px;
}
#list .el-radio + .el-radio {
  margin-left: 10px;
}
#detail .value input {
  text-align: center;
  padding: 0;
  height: 30px;
}
#detail .value {
  display: inline-block;
  width: 50px;
}
#detail td {
  padding: 10px 0;
}
#list td {
  position: relative;
}
#list td input {
  position: absolute;
  top: 10px;
  left: 0;
  height: 30px;
  width: 90%;
}
#add {
}
#add {
}
#list,
#add,
#detail {
  margin: 20px;
  padding: 20px;
  padding-bottom: 0;
  background: #fff;
}
#add,
#detail {
  padding-bottom: 30px;
}
#list td {
  line-height: 45px;
}
#list td span,
#detail span {
  color: #007bc1;
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      checked: false,
      isFree: "0",
      isType: "0",
      title: "",
      readonly: true,
      txt: "[修改]",
      list: [],
      isShow: 0,
      detailData: [],
      mapJson: "http://localhost:7007/ctiy",
      province: "",
      sheng: "",
      shi: "",
      shi1: [],
      city: "",
      block: "",
      address: []
    };
  },
  methods: {
    /* 
  deliveryTemp/saveTemp
*/
    allEdit(i) {
      this.list[i].show = !this.list[i].show;
      if (!this.list[i].show) {
        this.axios.post(
          "deliveryTemp/saveTemp",
          {
            Id: this.list[i].id,
            free: this.list[i].free,
            type: this.list[i].free,
            title: this.list[i].title
          },
          function(r) {
            console.log(r);
          }
        );
        this.list[i].editTXT = "[修改]";
      } else {
        this.list[i].editTXT = "[保存]";
      }
    },
    delAll(){
      let d = [];
      this.list.map(v => {
        if(v.checked){
          d.push(v)
        }
      })
      console.log(d)
    },
    addClassify() {
      this.isShow = 1;
    },
    delClassify(id) {
      //deliveryTemp/deleteTemp
    
      this.ajax.post("deliveryTemp/deleteTemp", { Ids: [id] }, function(r) {
        console.log(r);
      });
    },
    //全选
    allCheckbox() {
      let that = this;
      that.checked = !that.checked;
      this.list.map(v => {
        if (!that.checked) {
          v.checked = false;
        } else {
          v.checked = true;
        }
      });
    },
    confirm() {
      this.axios.post(
        "deliveryTemp/saveTemp",
        { free: this.isFree, type: this.isType, title: this.title },
        function(r) {
          console.log(r);
        }
      );
    },
    edit(i, id) {
      this.detailData[i].readonly = !this.detailData[i].readonly;
      if (this.detailData[i].readonly) {
        this.detailData[i].txt = "[修改]";
        if (this.detailData[i].address.length >= 2) {
          this.axios.post(
            "deliveryTemp/saveFee",
            {
              id: id,
              regionId: this.detailData[i].address[1], //区域
              startValue: this.detailData[i].startValue,
              startFee: this.detailData[i].startFee,
              addValue: this.detailData[i].addValue,
              addFee: this.detailData[i].addFee
            },
            function(r) {
              console.log(r);
            }
          );
        }
      } else {
        this.detailData[i].txt = "[保存]";
      }
    },
    back() {
      this.isShow = 0;
    },
    detail(id) {
      this.isShow = 2;

      let that = this;
      // deliveryTemp/getListByPage
      this.axios.post("deliveryTemp/getFeesByTid", { id: id }, function(r) {
        r.d.deliveryFees.map(v => {
          that.$set(v, "shen", "请选择");
          that.$set(v, "shi", "请选择");
          that.$set(v, "qu", "请选择");
          that.$set(v, "txt", "[修改]");
          that.$set(v, "readonly", true);
          that.$set(v, "address", [
            parseInt(v.regionId / 1000) * 1000,
            v.regionId || 0
          ]);
        });
        that.detailData = r.d.deliveryFees;
        r.d.deliveryFees.map((item, index) => {
          item.shen =
            item.address[0] && that.s_province(item.address[0], index);
          item.shi = that.s_City(item.address[1], index) || "请选择";
        });
      });
    },
    getCtiyData(callback) {
      var that = this;
      this.axios.get(this.mapJson, {}, function(response) {
        var data = response;
        that.province = [];
        that.city = [];
        that.block = [];
        // 省市区数据分类
        for (var item in data) {
          if (item.match(/0000$/)) {
            //省
            that.province.push({
              id: item,
              value: data[item],
              children: []
            });
          } else if (item.match(/00$/)) {
            //市
            that.city.push({ id: item, value: data[item], children: [] });
          } else {
            //区
            that.block.push({ id: item, value: data[item] });
          }
        }
        // 分类市级
        for (var index in that.province) {
          for (var index1 in that.city) {
            if (
              that.province[index].id.slice(0, 2) ===
              that.city[index1].id.slice(0, 2)
            ) {
              that.province[index].children.push(that.city[index1]);
            }
          }
        }
        // 分类区级
        for (var item1 in that.city) {
          for (var item2 in that.block) {
            if (
              that.block[item2].id.slice(0, 4) ===
              that.city[item1].id.slice(0, 4)
            ) {
              that.city[item1].children.push(that.block[item2]);
            }
          }
        }
        callback && callback();
      });
    }, // 选省
    choseProvince: function(e, index) {
      this.s_province(e, index);
    },
    s_province(e, index) {
      for (var index2 in this.province) {
        if (e == this.province[index2].id) {
          this.shi1 = this.province[index2].children;
          this.detailData[index].shi = this.province[index2].children[0].value;
          this.qu1 = this.province[index2].children[0].children;
          this.detailData[index].qu = this.province[
            index2
          ].children[0].children[0].value;
          this.E = this.qu1[0].id;
          this.detailData[index].address = [
            this.province[index2].id,
            this.province[index2].children[0].id,
            this.province[index2].children[0].children[0].id
          ];
          return this.province[index2].value;
        }
      }
      //  console.log(this.province[index2].value)
    },
    // 选市
    choseCity: function(e, index) {
      this.s_City(e, index);
    },
    s_City(e, index) {
      for (var index3 in this.city) {
        if (e == this.city[index3].id) {
          this.qu1 = this.city[index3].children;
          this.qu = this.city[index3].children[0].value;
          this.E = this.qu1[0].id;
          this.detailData[index].address[1] = this.city[index3].id;
          return this.city[index3].value;
        }
      }
    }
  },
  mounted() {
    let that = this;
  
    this.getCtiyData();
    this.axios.post(
      "deliveryTemp/getListByPage",
      { showCount: 10, currentPage: 1 },
      function(r) {
        r.map(v => {
          if (!v.type) v.type = "0";
          if (!v.free) v.free = "0";
          v.free = v.free.toString();
          v.type = v.type.toString();
          that.$set(v, "show", false);
          that.$set(v, "checked", false);
          that.$set(v, "editTXT", "[修改]");
        });
        that.list = r;
        console.log(that.list);
      }
    );
  }
};
</script>
