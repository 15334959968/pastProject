<template>
  <div>
    <el-menu
            class="vel-menu"
            :unique-opened="unique"
            :default-active="defaultactive"
            :collapse="isCollapse"
    >
      <el-submenu
              :key="index"
              v-bind:index="item.path?item.path:(index+'')"
              v-for="(item,index) in mens"
              v-bind:class="[{'el-submenu-showicon':checkshowicon(item)},{'check-item':clickitemobjs[item.id]}]">
        <template slot="title">
          <div @click.stop="onselect(item,'click')" class="title"
          
              >
                  <img class="menu-icon"
                 :src="'../static/images/'+item.icon+(clickitemobjs[item.id]?'_select':'')+'.png'"
                 :title="item.title">
            <span class="menu-text">{{item.title}}</span>
              
          </div>
        </template>
        <el-submenu  :key="cindex"
                     :index="citem.path?citem.path:(index+'-'+cindex)"
                     v-for="(citem,cindex) in item.list"
                     v-bind:class="[{'el-submenu-showicon':checkshowicon(citem)},{'check-item':clickitemobjs[citem.id]}]">

                     <!--  -->
          <p style="position: relative;left: 64px;"
             @click.stop="onselect(citem,'click')"
             slot="title">{{citem.title}}
          </p>
          <el-menu-item
                  @click="onselect(iitem,'click')"
                  v-for="(iitem,iindex) in citem.list"
                  v-if="citem.list"
                  :index="iitem.path?iitem.path:(index+'-'+cindex+'-'+iindex)"
                  :key="iindex">
                  {{iitem.title}}
            <div class="oitems" v-if="iitem.list">
              <div class="oitem"
                   :index="oitem.path?oitem.path:(index+'-'+cindex+'-'+iindex+'-'+oindex)"
                   v-bind:class="[{'check-item':clickitemobjs[iitem.id]}]"
                   :key="oindex"
                   @click.stop="onselect(oitem,'click')"
                   v-for="(oitem,oindex) in iitem.list"
                 >
                {{oitem.title}}
              </div>
            </div>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
 export default {
  name:'vmen',
  data () {
    return {
        isCollapse:false,
        unique:true,
        defaultactive:"0-1",
        clickitemobjs:{}
    };
  },
    methods: {
        /**
         * 点击每项菜单事件
         * @param url
         * @param eventtype
         */
        onselect(item,eventtype=''){
            let url=item.path||"";
            let _this=this;
            _this.clickitemobjs={};
            _this.clickitemobjs[item.id]=true;
            if(eventtype=='click'&&url){
                _this.$router.push(url);
            }else{
                if(url.indexOf("/")!=-1){
                    _this.$router.push(url);
                }else{
                    _this.onselectmen(url);
                }
            }
        },
        checkshowicon(item){
            item['list']=item['list']||[];
            return item['list'].length<1?true:false;
        },
        toggelmenstart(e){
            this.$emit('toggelmenstart',false);
        },
        /**
         * 如果不是路由菜单点击事件处理
         * @param url
         * @param eventtype
         */
        onselectmen(url){
        },

    },
  props: ['mens',"hidenaside"],
  components: {},
  computed: {},
  mounted () {
  },

}


</script>
<style lang='less'>
   .vel-menu{
       .check-item{
       
           .el-submenu__title{
    background:rgba(11,97,171,1);
           }
       }
       .el-submenu-showicon{
           i{
               display: none;
           }
       }
    }

</style>
