<template>
  <div class="vnavigation" v-bind:class="[{'vnavigation_hide':vnavigation_hide}]">
    <div class="vnavigation-main">
      <div class="menu-main-list">
        <div @click="childClick(item)" class="menu-main-item" :key="index" v-bind:class="'m'+(index+1)" v-for="(item,index) in icons">
          <div><img class="vicon"  :src="'../static/images/'+item.icon+'.png'" /></div>
          <div>{{item.text}}</div>
        </div>
      </div>
      <div class="menu-main-botton" @click="onshowitems()">
        <i class="iconfont guanbi"></i>
      </div>
    </div>
    <div class="vnavigation-botton" @click="onshowitems()">
      <div class="div1">
        <i class="iconfont chakan"></i>
      </div>
      <div class="open_text">展示层</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'vnavigation',
    props: ['icons','modelkey'],
      data () {
          return {
              vnavigation_hide:true
          }
      },
    methods:{
        onshowitems(){
          this.vnavigation_hide=!this.vnavigation_hide;
            this.$emit('onshowitems', this.vnavigation_hide);
        },
        childClick(item){
            let path=item[this.$route.query['type']];
            this.$emit('childClick', path);
        }
    },
    mounted: function () {
        console.info("childClick")
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .vnavigation{
    position: absolute;
    z-index: 2;
    .vnavigation-main{
      position: fixed;
      width: 230px;
      height: 217px;
      right: -26px;
      bottom: 0px;
      background-color:#2d5a77;
    /*RGBA(92, 132, 152, 0.8);*/
      border-radius: 280px 0px 0px 0px;
      font-size: 14px;
      color: white;
      .menu-main-list{
        .menu-main-item{
          position: absolute;
          cursor: pointer;
          font-size: 14px;
          .vicon{
            width:  22px;
            height: 25px;
          }
          div:first-child{
            display: flex;
            justify-content: center;
            padding-bottom: 5px;

          }
        }
        .m1{
          right: 26px;
          top: 29px;
        }
        .m2{
          right: 104px;
          top: 78px;

        }
        .m3{
          right: 148px;
          top: 150px;
        }
      }
    }
    .vnavigation-botton{
      border-radius: 50px;
      background-color: RGBA(26, 105, 149, 0.49);
      width: 90px;
      height: 90px;
      position: fixed;
      cursor: pointer;
      display: none;
      right: 34px;
      bottom: 34px;
      .open_text{
        font-size:18px;
        color:rgba(255,255,255,1);
      }
      .div1{
        margin-top:9px;
      }
      div{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .vnavigation_hide{
    .vnavigation-main{
      display: none;
    }
    .vnavigation-botton{
      display: block;
    }
  }
</style>