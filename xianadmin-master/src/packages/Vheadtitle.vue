<template>

  <div class="headtitle-components">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
              :to="item.path"
              v-for="(item,index) in selectmens"
              :key="index"
      >
        {{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import {menudata} from '../services/ydatabase.js';
    export default {
        name: "xa-vheadtitle",
        data () {
            return {
                mens:menudata.selectmenuList,
                selectmens:[]
            };
        },
        methods: {
            /**
             * 根据路由查找点击数据**/
            filterroter(){
                this.menstotitle(this.$route.fullPath);
            },
            /**
             * 点击菜单生成导航**/
            menstotitle(fullPath){
                let _this=this;
                let result=[];
                let mens=this.mens;
                let forec=function (list) {
                    if(list){
                        list.some((item,index)=>{
                            if(item.path===fullPath){
                                result.push(item);
                                re=true;
                                return re;
                            }
                            forec(item.list);
                        })
                        return re;
                    }
                }
                let re=false;
                mens.some((item,index)=>{
                    re=forec(item.list||[]);
                    if(item.path==fullPath){
                        result.push(item);
                        _this.selectmens=result;
                        return true;
                    }
                    if(re==true){
                        result.push({
                            title:item.title,
                            id:item.id,
                            path:item.path
                        });
                        let temp = result[0];
                        result[0] =result[result.length-1];
                        result[result.length-1] = temp;
                        _this.selectmens=result;
                        return true;
                    };
                })
            },
        },
        components: {},
        computed: {},
        created () {
            console.log("filterroter");
            this.filterroter();
        },
        /**
         * 全局监听数据
         * **/
        watch: {
            '$route' (to, from) {
                this.filterroter();
            },
        },
        props: [],
    }

</script>
<style lang='less'>
  .headtitle-components{
    .el-breadcrumb__item{
      cursor: pointer !important;
    }
  }
</style>
