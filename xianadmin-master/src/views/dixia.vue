<template>
    <div class="dixia-page">
        <vnavigation v-if="checkisshowicons()" :icons="icons"
                     :modelkey="this.$parent.loadmodelkey"
                     @onshowitems="checkrotertomodel"
                     @childClick="childClick">
        </vnavigation>


        <ul class="bottons-right-model show-model" v-if="checkisshowicons()">
            <li class="bottons-right-item">
                <span style="position: relative;top: -1px;">
                    <el-switch
                        @change="startchange"
                        v-model="isjidian"
                        active-color="#f4f2f2"
                        inactive-color="#9E9E9E">
                    </el-switch>
                </span>
                <span style="font-size: 12px;">基垫</span>
            </li>
            <li v-for="(item,index) in bottons"
                class="bottons-right-item"
                v-bind:class="[{'bottoms-item-select':selectindex==index}]"
                @click="iconclickitem(item,index)"
                :key="index">
                {{item.text}}
            </li>
        </ul>
        <div class="neng-main" v-if="checkisshowicons()">
            <div class="neng-main-item">
                <div class="neng-main-item-left">
                </div>
                <div class="neng-main-item-right">
                    能源中心
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import  vnavigation from '../components/vnavigation';
  import {mianconfig} from '../services/ydatabase';
  export default {
    name:'dixia',
    data () {
      return {
          isjidian:false,
          type:"",
          selectindex:-1,
          icons:mianconfig.icons,
          bottons:[]
      }
    },
    methods: {
        checkisshowicons(){
          return this.$route.name=='dixia'&& this.$route.query.type.indexOf("dixaiceng")==-1;
        },
        startchange(isjidian){
           let loading = this.$loading({
                lock: true,
                text: '努力加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
           this.toggeljidian(isjidian);
           loading.close();
        },
        toggeljidian(isjidian){
            let loadmodels=this.t.getloadmodels();
            let animatemodels=this.t.loadscene['animatemodels']||{};
            let hides=animatemodels['hides'];
            loadmodels.forEach((obj,index)=>{
                if(hides[obj.name]){
                    obj.visible=isjidian;
                    obj.material.color.setHex(0xf28c0b);
                    obj.position.y=isjidian?50+(index*2):0;

                }
            })
        },
        /**
         * 根据设备类型key获取配置的显示模型和隐藏的模型对象数据
         * @param modelkey
         */
        animateByTopModles(modelkey,color){
            let _this=this;
            let loadmodels=this.t.getloadmodels();
            let animatemodels=this.t.loadscene['animatemodels']||{};
            let hides=animatemodels['hides'];
            let shows=animatemodels[modelkey];
            loadmodels.forEach((obj,inex)=>{
               if(hides[obj.name]){
                   obj.visible=false;
                   obj.position.y=0;
                   obj.material.color.setRGB(1, 1, 1);
               }
            })
            loadmodels.forEach((obj,inex)=>{
                if(shows[obj.name]){
                    obj.visible=true;
                    obj.material.color.setHex(color);
                    _this.t.animatemodel(obj, obj.position, {
                        y:250 ,
                        x: 0,
                        z: 0
                    }, 1.9);
                }
            })

        },
        /**
         * 点击每个设备类型项
         * @param item
         * @param index
         */
        iconclickitem(item,index){
            this.selectindex=index;
            this.animateByTopModles(item.code,0xf28c0b);
        },
        /**
         * 设置扇形菜单点击每项事件key值为加载模型对象的key值
         * @param path
         */
        childClick(path){
         if(path){
             this.$parent.loadmodelkey=path;
         }
        },
    
         
        /**
         * 初始化的时候获取下需要加载模型的key值
         */
        checkrotertomodel(){
            let _this=this;
            let code=_this.$route.query['type'];
            if(code){
                _this.selectindex=-1;
                _this.$parent.loadmodelkey=code;
            }
        },
        checkloaddata(){
            this.checkrotertomodel();
            let key=this.$parent.loadmodelkey+'_bottons';
            this.selectindex=-1;
            this.bottons=mianconfig[key];
        }
    },
      created(){

      },
      mounted () {
        this.checkloaddata();
    },
      watch: {
          '$route' (to, from) {
              this.checkloaddata();
          },
      },
    components: {
        'vnavigation':vnavigation
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
    .dixia-page{
        width: 230px;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba(205, 211, 212, .65), rgba(125, 218, 229, .25));
        position: absolute;
        z-index: 2;
        bottom: 34px;
        left: 30px;
        .neng-main-item{
            background-color: #2d5a77;
            display: flex;
            padding: 8px 21px;
            .neng-main-item-left{
                width: 0.8rem;
                height: 0.8rem;
                background:rgba(59,228,195,1);
                border-radius:7px;
            }
            .neng-main-item-right{
                height: 0.8rem;
                font-size: 0.3rem;
                color: white;
                line-height: 0.8rem;
                margin-left: 0.4rem;
            }
        }

    }
    .bottons-right-model {
        position: fixed;
        z-index: 2;
        top: 15px;
        right: 0px;
        height: 219px;
        width: 100px;
        li,.bottons-right-item{
            background-color: #2d5a77;
            margin-top: 10px;
            border-radius: 6px;
            width: 107px;
            height: 42px;
            font-size: 14px;
            text-align: center;
            line-height: 42px;
            margin-left: 0;
            transition: margin-left .6s;
            cursor: pointer;
            color: #fff;
            margin-right: 10px;
        }
        .bottons-right-item {
            position: relative;
            z-index: 9;
            right: 10px;
            cursor: pointer;
        }
        .bottoms-item-select {
            margin-left: -30%;
        }
    }
</style>
