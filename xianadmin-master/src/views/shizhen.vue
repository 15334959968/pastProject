<template>
  <div class="shizhen-page">
      <ul class="guanlan-model">
          <li
                  v-bind:class="[{'bottoms-item-select':selectindex==index}]"
                  v-for="(item,index) in modelbottons"
                  @click="iconclickitem(item,index)"
                  class="bottoms-item">
                  {{item.title}}
          </li>
      </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import {modelbottons} from '../services/ydatabase';
  export default {
    name:'shizhen',
    data () {
      return {
          selectindex:-1,
          modelbottons:[]
      }
    },
    methods: {
        /**
         * 点击每个设备类型项
         * @param item
         * @param index
         */
        iconclickitem(item,index){
            this.selectindex=index;
            this.setMeshColor(item.models,0xf28c0b);
        },
        /**
         * 设置颜色
         * @param models
         * @param color
         */
        setMeshColor(models,color){
            let loadmodels=this.t.getloadmodels();
            loadmodels.forEach((obj,inex)=>{
                if(models.includes(obj.name)){
                    obj.material.color.setHex(color);
                }else {
                    obj.material.color.setRGB(1, 1, 1);
                }
            })
        },
        /**
         * 获取参数
         */
        checkrotertomodel(){
            this.modelbottons=modelbottons[this.$route.query['type']];
        },
    },
      mounted () {
          this.$parent.checkrotertomodel();
          this.checkrotertomodel();
      },
      watch: {
          '$route' (to, from) {
              this.checkrotertomodel();
          },
      },
    components: {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
   .shizhen-page{
       position: absolute;
       width: 100%;
       height: 100%;
       .guanlan-model{
           top: 15px;
           position: fixed;
           z-index: 2;
           right: 15px;
       }
       .bottoms-item {
           color: #fff;
           cursor: pointer;
           width: 108px;
           height: 37px;
           font-size: 13px;
           text-align: center;
           line-height: 36px;
           margin-left: 0;
           background-image: url(../../static/images/back-bottom.png);
           background-repeat: no-repeat;
           transition: margin-left .6s;
           background-position: center;
       }
       .bottoms-item-select {
           margin-left: -30%;
       }
   }
</style>
