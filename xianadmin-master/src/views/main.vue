<template>
   <!--<div>-->
       <!--<ul class="top-lists-ul">-->
           <!--<li class="top-lists-li"-->
               <!--v-bind:class="{'top-lists-li-select':selectindex==iindex}" :key="index"-->
               <!--v-for="(item,iindex) in mainMenlist">-->
               <!--<img @click="clickitem(item,iindex)"-->
                    <!--v-bind:src="'../../static/images/'+item.icon"-->
                    <!--class="top-lists-item">-->
               <!--<ul class="left-lists-item-list" v-if="item.list">-->
                   <!--<li class="left-lists-item"-->
                       <!--v-for="(citem,cindex) in item.list" :key="index+'_'+cindex"-->
                       <!--@click="clickitemList(citem,cindex)">-->
                       <!--{{citem.title}}-->
                   <!--</li>-->
               <!--</ul>-->
           <!--</li>-->
       <!--</ul>-->
   <!--</div>-->
</template>
<script>

  export default {
    name:'main',
    data () {
      return {
          mainMen:{},
          mainThreeMeshList:[],
      }
    },
    methods: {

        /**
         * 隐藏掉首页不显示的mesh
         */
        SetMeshsOption(pars){
            let mainThreeMeshList=this.mainThreeMeshList;
            mainThreeMeshList.forEach((item,index)=>{
                if (pars.names.includes(item.name)) {
                    pars.transparent ? item.material.transparent = pars.transparent : null;
                    pars.opacity ? item.material.opacity = pars.opacity : null;
                    pars.color ? item.material.color.setHex = pars.color : null;
                }
            });
        },
        /**
         * 隐藏不显示的部分 125
         */
        checkArray(material,cb){
            if(Array.isArray(material)){
                material.forEach((item,index)=>{
                    cb(item);
                });
            }else{
                cb(material);
            }
        },
        hideMainNotShowMesh(){
            let _this=this;
            let mainThreeMeshList=_this.mainThreeMeshList;
            mainThreeMeshList.forEach((item,index)=>{
                if (!_this.mainMen.mainHideMesh.hideMainNotShowMesh.noe.includes(item.name)) {
                    item.visible = true;
                    item.position.y = 0;
                    _this.checkArray(item.material,function (material) {
                        material.opacity = 1
                        material.color.setRGB(1, 1, 1);
                        material.opacity = 1;
                    });
                } else if (_this.mainMen.mainHideMesh.hideMainNotShowMesh.yes.includes(item.name)) {
                    item.material.transparent = false;
                    item.material.opacity = 1;
                }else {
                    item.visible = false;
                }
            })
       },
        loadpagedata(){
            let _this=this;
            _this.$parent.loadmodelkey="main";
            _this.$root.$on("onloadModelsend",function (data) {
                if(data=='main'){
                    _this.mainMen=_this.$parent.mainMen;
                    _this.mainThreeMeshList=_this.t.getloadmodels();
                    _this.SetMeshsOption({
                        names: _this.mainMen.mainHideMesh.SetMeshsOption,
                        transparent: true,
                        opacity: 0.8,
                        color: ""
                    });
                    _this.hideMainNotShowMesh();
                }

            })
        },

    },
    mounted () {
        this.loadpagedata();
    },
    components: {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .top-bottons-models {
        position: absolute;
        z-index: 9;
        top: 114px;
        left: 20px;
        width: 100%;
        li{
            cursor: pointer;
        }
        .top-bottons-modes-item{
            width: 94px;
            height: 38px;
            line-height: 38px;
            opacity: .7;
            display: flex;
            padding-top: 5px;
        }
        .top-item-list {
            left: 94px;
            width: 200px;
            position: relative;
            top: -89px
        }

        .ul-titles {
            position: absolute;
            top: 55px;
            left: 116px;
        }
        .ul-title {
            display: flex;
            justify-content: center;
            align-items: center;
            float: left;
            padding-left: 10px;
            .ul-color {
                width: 20px;
                height: 20px;
                border-radius: 5px;
                display: inline-block;
            }
            .ul-name2 {
                font-size: .18rem;
                color: #fff;
                display: inline-block;
                padding-left: 10px;
            }
        }
        .ul-color1 {
            background-color: #eca343;
        }
        .ul-color2 {
            background-color: #397715;
        }
        .ul-color3 {
            background-color: #774703;
        }
        .ul-color4 {
            background-color: #2d98c3;
        }
        .ul-color5 {
            background-color: #ee9521;
        }
        .ul-color6 {
            background-color: #31541d;
        }
    }
</style>
