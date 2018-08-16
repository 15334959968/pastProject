<template>
    <div class="dishang-page">
        <div class="dishang-page-left">
            <ul class="bottons-model show-model">
                <li class="bottoms-item"
                    @click="clickitem(index,item)"
                    :key="index"
                    :class="{
                    'bottoms-item-select':louObject.loucengs.length+1-index==selectindex,
                    'showmensbotton':showmensbotton,
                    'footer-botton':checkbotton(item.code)
                    }"
                    v-for="(item,index) in louObject.loucengs">
                    {{item.code||item.title}}
                </li>
            </ul>
        </div>
        <div class="dishang-page-right">
            <div class="page-component-up">
                <i class="el-icon-caret-top"></i>
            </div>
            <el-card :body-style="{ padding:'0px' }">
                <img :src="louObject.pic" class="image">
                <div style="padding: 14px;">
                <span class="menage">
                    {{louObject.menage}}
                </span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {animatemodel} from  '../three/load';
  export default {
    name:'dishang',
    data () {
      return {
          showmensbotton:false,
          selectindex:-1,
          query:{},
          louObject:{
              pic:"",
              menage:"",
              modelkey:""
          }
      }
    },
    methods: {
        checkbotton(code){
          return code.indexOf('B')!=-1;
        },
        //监听事件
        ononintersectClick(){
           let _this=this;
            _this.$root.$on("onintersectClick",function (intersect) {
                console.log("点击+++ononintersectClick");
             if(_this.t.linkMap[intersect['name']]　&&_this.$route.name=='dishang'){
                let url=`shinei?type=${intersect['name']}&ceng=${_this.selectindex}`;
                _this.$parent.loadmodelkey=intersect['name'];
                _this.$router.push(url);
             }
           });
            //监听到模型加载完成后
            _this.$root.$on("onloadModelsend",function (data) {
                //显示地下模型曾
                if(data&&_this.query['go']){
                    _this.showidixiaceng();
                }
            })
        },

        //临时使用
        animateByTopModles(index){
          var time = 1.9;
          let modelkey=this.louObject.modelkey;
          let loadmodels=this.t.getloadmodels();
              loadmodels.forEach((obj)=>{
                  let y=modelkey==obj.name?(-15 + index*10):0;
                  animatemodel(obj, obj.position, {
                      y:y ,
                      x: 0,
                      z: 0
                  }, time);
            })
       },
         setMeshStyle(_this){
             let dixiamodels=_this.t.linkMap[`${_this.query.type}_dixia`]['meshList'];
             let yes={opacity:1,color:"rgb(255,255,255)"};
             let not={opacity:0.4,color:"rgb(242,242,242)"}
             if(!_this.showmensbotton){
                 dixiamodels='';
                 not={opacity:1,color:"rgb(255,255,255)"}
             }
             _this.t.setMeshColor(dixiamodels, yes,not);
         },
        //临时使用
        clickitem(index,item){
            let _this=this;
            if(item.title){
                _this.showmensbotton=!_this.showmensbotton;
                _this.selectindex=-1;
               _this.setMeshStyle(_this);
            }else{
                _this.selectindex=_this.louObject.loucengs.length+1-index;
                if(item.modelname){
                    _this.t.setMeshColor(item.modelname);
                }else{
                    _this.showmensbotton=false;
                    _this.setMeshStyle(_this);
                    _this.animateByTopModles(index);
                }
            }
        },
        //检查参数
        checkrotertomodel(cb){
            let _this=this;
            _this.query=_this.$route.query;
            _this.selectindex=
                _this.query['ceng']?parseInt(_this.query['ceng']):-1;
            if( _this.query['type']){
                _this.$parent.loadmodelkey=_this.query['type'];
                if(cb)cb();
            }
        },
        showidixiaceng(){
            let scene = this.t.linkMap[this.$parent.loadmodelkey];
            this.t.toggelhidemodels(this,scene,true);
        },
        //根据楼名code查询楼层信息
        selectlouByCode(){
            let _this=this;
            _this.$servers.selectlouByCode({code:_this.query['type']})
            .then(data => {
                _this.louObject=data;
                _this.louObject=Object.assign(_this.louObject,{});
                if(!_this.query['go']){
                    _this.louObject.loucengs=
                       _this.louObject.loucengs.filter((item,index)=>{
                       return item.title?false:true;
                   })
                }
            })
        }
    },
      created () {
        //初始化监听事件
        this.ononintersectClick();
        this.checkrotertomodel();
        this.selectlouByCode();
    },
    components: {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
   .dishang-page{
       .dishang-page-left{
           color: #fff;
           .bottons-model {
               width: 161px;
               top: 8%;
               overflow: auto;
               height: 90%;
               position: absolute;
               z-index: 9;
               left: 20px;
           }
           .bottoms-item {
               background-image: url(../../static/images/back-bottom.png) ;
               background-repeat: no-repeat;
               width: 94px;
               height: 38px;
               font-size: 14px;
               text-align: center;
               line-height: 38px;
               margin-left: 0;
               transition: margin-left .6s;
               cursor: pointer;
           }
           .footer-botton{
               color: #FFEB3B;
               display: none;
           }
           .bottoms-item-select {
               margin-left: 30%;
           }
           .showmensbotton{
              display: block;
           }
       }
       .dishang-page-right{
           position: fixed;
           top: 50%;
           z-index: 2;
           height:10rem;
           width:6.8rem;
           right: 0px;
           transform: translateY(-50%);
           .el-card{
               border: none;
           }
           .image{
               height: 276px;
               width: 100%;
           }
           .menage{
               font-size: 14px;
           }
           .page-component-up {
               background-color: #fff;
               position: relative;
               right: 52px;
               top:50%;
               width: 40px;
               height: 40px;
               border-radius: 20px;
               cursor: pointer;
               transition: .3s;
               box-shadow: 0 0 6px rgba(0, 0, 0, .12);
               z-index: 3;
               transform: translateY(-50%);
               i {
                   transform: rotate(90deg);
                   color: #409eff;
                   display: block;
                   line-height: 40px;
                   text-align: center;
                   font-size: 18px;
               }
           }
       }




   }
</style>
