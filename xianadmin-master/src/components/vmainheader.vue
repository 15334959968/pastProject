<template>
    <!--导航菜单暂放页面确定后再包装-->
      <div class="public-men" v-if="this.$route.meta.istop">
        <ul class="top-lists-ul">
          <li class="top-lists-li"
              v-bind:class="{'top-lists-li-select':selectindex==iindex}" :key="index"
              v-for="(item,iindex) in mainmenlist">
            <img @click="clickitem(item,iindex)"
                 v-bind:src="'../../static/images/'+item.icon"
                 class="top-lists-item">
            <ul class="left-lists-item-list" v-if="item.list">
              <li class="left-lists-item"
                  v-bind:class="{'main-checkitem':itemindex==cindex}"
                  v-for="(citem,cindex) in item.list" :key="index+'_'+cindex"
                  @click="clickitemList(citem,cindex)">
                {{citem.title}}
                <!-- <ul class="left-top-mens-main" v-if="citem.list">
                  <li class="left-top-mens-main-item"
                      @click.stop="clickitemListitem(pitem,null)"
                      v-for="(pitem,pindex) in citem.list" :key="index+'_'+cindex+'_'+pindex">
                    {{pitem.title}}
                  </li>
                </ul> -->
              </li>
            </ul>
          </li>
        </ul>
      </div>
</template>
<script>
export default {
  name: "vmainheader",
  data() {
    return {
      selectindex: 0,
      itemindex: 0,
      _clickobjs:null,
    };
  },
  props: {
    mainmenlist: {
      type: Array,
      default: []
    }
  },
  methods: {
    clickitemList(citem, cindex) {
      let _this = this;
      if (citem.path) {
        _this.itemindex = cindex;
        _this._clickobjs={};
        _this.t.setMeshColor("");
        _this.$router.push(citem.path);
      }
    },
    clickitem(item, index) {
      this.selectindex = index;
      this.itemindex = -1;

    },
    bindonintersectClick() {
      let _this = this;
      let $message=()=>{
          _this.$message({
          showClose: true,
          message: `${_this.mainmenlist[_this.selectindex].list[_this.itemindex].title}该地块暂无数据!`,
          type: 'warning'
        });
      }
      _this.$root.$on("onintersectClick", object => {
          let objects =
            _this.mainmenlist[_this.selectindex].list[_this.itemindex].objects;
          if (objects) {
            if (objects[object.name]) {
                if(_this._clickobjs[object.name]){
                      _this.$router.push(objects[object.name]);
                }else{
                    _this.t.setMeshColor(object.name);
                    _this._clickobjs[object.name]=true;
                }
             
           }else{$message()}
          }else{$message()}
      });
    }
  },
  created() {},
  mounted() {
    this._clickobjs={};
    this.bindonintersectClick();

  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
