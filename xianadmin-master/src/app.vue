<template>
  <div id="app">
    <div class="page-app"   v-bind:class="[{'login-main':this.$route.name=='login'},{'hidenaside':hidenaside},{'threemodelshow':threemodelshow},{'xianapp':this.$route.meta.app}]">
      <div class="main-containr">
        <el-aside class="main-el-aside">
          <div class="el-aside-top">
            <img class="user-icon" :src="user.image">
            <div class="user-name" >
              
              <el-dropdown class="form-select-pros">
                <span class="el-dropdown-link">
                  西岸传媒港<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>西岸传媒</el-dropdown-item>
                  <el-dropdown-item>游族大厦</el-dropdown-item>
                  <el-dropdown-item>腾讯大厦</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <i class="iconfont home" @click="menbottonclick"></i>
          </div>
            <vmen
                  ref="vmen"
                  :mens="mens"
                  :hidenaside="hidenaside"
                  @toggelmenstart="toggelmenstart"></vmen>
        </el-aside>
        <div style="min-width:1250px;"  v-if="threemodelshow ">
         
 <vmainheader :mainmenlist="mainMenlist"></vmainheader> 
 
   

          
        </div>


          <div style="min-width:1250px;" v-if="!threemodelshow ">

  <el-header class="xin-el-header">
            <div class="xin-header-main">
                 <div class="xin-header-left xin-headr-hover" @click="openroter('/system')">
                       <div class="icon-padding">
                           <i class="iconfont shezhi"></i>
                       </div>
                       <div class="xin-header-text">账号管理</div>
             </div>
             <div class="xin-header-right xin-headr-hover" @click="openroter('/login')">
                 <div class="icon-padding">
                          <i class="iconfont kaiguan"></i>
                       </div>
 
  <div class="xin-header-text">退出登录</div>
             </div>
            </div>
            
          </el-header>  
<div class="page-main">
         
      <router-view></router-view>
      </div>


          
        </div>
      </div>
      <div id="container"
           v-bind:class="pagesback[loadmodelkey]||'notcolor-back'"></div>
      <div id="containert"
           v-bind:class="pagesback[loadmodelkeyt]||'notcolor-back'"></div>
         
      
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { pagesback } from "./services/ydatabase";
import vmen from "./components/vmen";
import vmainheader from "./components/vmainheader";
export default {
  data() {
    return {
      pagesback: pagesback,
      transitionName: "slide-left",
      loadmodelkey: "",
      //第二个相机
      loadmodelkeyt: "",
      hidenaside: false,
      user: {
        image: "./static/images/user.png"
      },
      mens: [],
      threemodelshow: true,
      mainMen: {},
      mainMenlist: []
    };
  },
  created() {
    this.selectMainMens();
  },
  methods: {
    openroter(url) {
      this.$router.push(url);
    },
    selectMainMens() {
      let _this = this;
      this.$servers.selectMainMens({}).then(data => {
        _this.mainMen = data;
        _this.mainMenlist = _this.mainMen.mainMenlist;
      });
    },
    /**
     * 模型加载
     * **/
    loadmodels(three) {
      let _this = this;
      let scene = _this.t.linkMap[_this[three.loadmodelkey]];
      if (scene) {
        if (scene.meshList.length > 0) {
          let loading = _this.$loading({
            lock: true,
            text: "模型资源文件暂无压缩,加载时间稍长。。。",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          if (scene.cameraPosition) {
            _this.t.lookCamera(...scene.cameraPosition, three);
          }
          _this.t.loadByConfigtarget(scene);
          let list = scene.meshList;
          _this.t.loadModels({
            list: list,
            pthree: three,
            porderby: scene.orderby || true,
            pconcatlist: scene.concatlist || false,
            success: (models, meshChange) => {
              if (typeof meshChange === "function") {
                meshChange();
              }
              _this.t.toggelhidemodels(_this, scene, false);
              if (scene.endanimate) {
                _this.t.showAnimate(
                  {
                    start: scene.endanimate.start,
                    end: scene.endanimate.end
                  },
                  () => {}
                );
              }
              _this.onWindowResize();
              _this.$root.$emit("onloadModelsend", _this[three.loadmodelkey]);
              loading.close();
            }
          });
        }
      }
    },
    /**
     * 用户菜单按钮
     * **/
    menbottonclick() {
      this.hidenaside = !this.hidenaside;
      this.$refs.vmen.isCollapse = this.hidenaside;
    },
    onWindowResize() {
      this.t.onWindowResize(three);
      this.t.onWindowResize(threet);
    },
    /**
     * 切换菜单对应处理的事件
     * @param url
     * @param eventtype
     */
    toggelmenstart(val) {
      this.hidenaside = val || false;
      this.onWindowResize();
    },
    /**
     * 获取菜单数据
     * @param url
     * @param eventtype
     */
    selectmenulist() {
      let _this = this;
      _this.$servers.selectmenulist({}).then(data => {
        _this.mens = data;
      });
    },
    /**
     * 获取下参数存为当前加载模型的key
     * @param url
     * @param eventtype
     */
    checkrotertomodel() {
      let _this = this;
      let type = _this.$route.query["type"];
      if (type) {
        _this.loadmodelkey = type;
      } else {
        _this.loadmodelkey = _this.$route.name;
      }
    }
  },
  /**
   * 初始化three环境和加载菜单
   * @param url
   * @param eventtype
   */
  mounted() {
    this.t.initthreeconfig();
    this.t.init(three);
    this.t.init(threet);
    this.selectmenulist();
  },
  /**
   * 全局监听数据
   * **/
  watch: {
    $route(to, from) {
      this.checkrotertomodel();
    },
    //相机1 暂用方法
    loadmodelkey(val) {
      this.loadmodels(three);
      this.t.onWindowResize(three);
    },
    //相机2 暂用方法
    loadmodelkeyt(val) {
      if (val) {
        this.loadmodels(threet);
        this.t.onWindowResize(threet);
      }
    },
    threemodelshow(start, end) {
      console.log("--模型场景元素状态改变--");
    }
  },
  components: {
    vmen: vmen,
    vmainheader: vmainheader
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
//page-app 控制样式作用域\
.form-select-pros {
  color: #fff !important;
  font-size: 16px !important;
  cursor: pointer;
}
.xin-header-main {
      position: absolute;
    right: 0px;
        margin-right: 20px;
  .icon-padding {
    border-style: dashed;
    border-color: #303133;
    height: 30px;
    width: 30px;
    line-height: 30px;
    position: relative;
    top: 0px;
    left: 3px;
    border-width: 5px;
    margin-right: 0px;
    transform: scale(0.6);
  }
  i {
    margin-left: 7px;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 73px;
  line-height: 73px;
  margin-right: 20px;
  .xin-header-text {
    padding-left: 4px;
    text-align: center;
    font-size: 16px;
    color: RGBA(102, 102, 102, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .xin-header-left {
    cursor: pointer;
    display: inline-flex;
    width: 135px;
    height: 44px;
    opacity: 0.5;
    border-radius: 4px;
    border: 1px solid #999999;
    .image {
      width: 40px;
      height: 40px;
    }
  }
  .xin-header-right {
    cursor: pointer;
    display: inline-flex;
    width: 135px;
    height: 44px;
    border-radius: 4px;
    opacity: 0.5;
    border: 1px solid rgba(153, 153, 153, 1);
    margin-left: 20px;
    .image {
      width: 40px;
      height: 40px;
    }
  }
}

.xin-headr-hover:hover {
  color: rgba(30, 134, 240, 1);
  opacity: 1;
  border: 1px solid rgba(30, 134, 240, 0.6);
  .xin-header-text {
    color: RGBA(30, 134, 240, 1);
  }
  i {
    color: RGBA(30, 134, 240, 1);
  }
}

.public-men {
     /* position: absolute; */
    z-index: 9;
    margin-top: 24px;
    margin-left: 50%;
    /* width: 100%; */
    transform: translateX(-50%);
}
.top-lists-ul {
  li {
    cursor: pointer;
  }
  display: flex;
  width: 100%;
  height: inherit;
  .top-lists-li {
    transition: all 0.5s;
    .top-lists-item {
      cursor: pointer;
      width: 139px;
      height: 40px;
      padding: 0 10px;
      opacity: 0.8;
    }
    .left-lists-item-list {
      transition: all 0.5s;
      transform: scale(0);
      opacity: 0;
      margin: 5px 15px;
      /*border: 1px solid #82D6FB;*/
      box-shadow: 0 0 1px 1px #82d6fb;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      top: -7px;
      position: relative;
      width: 112px;
      left: 9px;
      color: #fff;
      .left-lists-item {
        font-size: 14px;
        background-color: #2d9ad3;
        text-align: center;
        border-bottom: 1px #ccdbe8 solid;
        padding: 9px 15px;
        cursor: pointer;
        opacity: 0.7;
        position: relative;
      }
    }
  }
  .top-lists-li-select {
    .left-lists-item-list {
      opacity: 1 !important;
      transform: scale(1);
    }
    .top-lists-item {
      opacity: 1 !important;
    }
  }
  .top-lists-item {
    opacity: 1;
  }
  .main-checkitem {
    opacity: 1 !important;
    .left-top-mens-main {
      display: block !important;
    }
  }

  .left-top-mens-main {
    display: none;
    left: 118px;
    position: absolute;
    width: 100px;
    font-size: 14px;
    background-color: #2d9ad3;
    text-align: center;
    cursor: pointer;
    opacity: 0.7;
    top: 0px;
    border: 1px solid #82d6fb;
    box-shadow: 0 0 1px 1px #82d6fb;
    .left-top-mens-main-item {
      font-size: 14px;
      background-color: #2d9ad3;
      text-align: center;
      border-bottom: 1px #ccdbe8 solid;
      padding: 9px 15px;
      cursor: pointer;
      position: relative;
    }
  }
}
</style>