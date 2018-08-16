<template>
    <div class="syscount-page">
        <div class="syscount-top">
            <div class="col-item" v-for="(item,index) in sysdatas">
                <div class="col-item-top" v-bind:class="item.color">
                    <i class="iconfont" v-bind:class="item.icon"></i>
                </div>
                <div class="col-item-bottom">
                    <div class="col-item-num">
                        <router-link :to="item.path"><h1>{{item.nums}}</h1></router-link>
                    </div>
                    <div class="col-item-title">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        name:'syscount',
        data () {
            return {
                sysdatas:[
                    {
                        title:"待参与会议",
                        nums:parseInt(Math.random()*3000),
                        color:'green',
                        path:"/meeting",
                        icon:"huiyi"
                    },
                    {
                        title:"待处理问题",
                        nums:parseInt(Math.random()*3000),
                        color:'blue',
                        icon:"wenti",
                        path:"/problemList"
                    },
                    {
                        title:"待处理任务",
                        nums:parseInt(Math.random()*3000),
                        color:'red',
                        icon:"renwu",
                        path:"/renwu"

                    }
                ]
            }
        },
        methods: {
        },
        mounted () {
        },
        components: {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  .syscount-page{
      background-color: #fff;
      width: 100%;
      .syscount-top{
          display: flex;
          .col-item{
              width: 25%;
              padding: 10px 15px;
              text-align: center;
              .col-item-top{
                  width: 100px;
                  height: 100px;
                  border: 2px solid white;
                  border-radius: 100%;
                  overflow: hidden;
                  margin: 12px;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
              }
              .green {
                   background-color: #1CC09F;
                  color: #fff;
              }
              .blue {
                  background-color: #32CEE4;
                  color: #fff;
              }
              .red {
                  background-color: #FB6E51;
                  color: #fff;
              }
              .brown {
                  background-color: #F5B252;
                  color: #fff;
              }
              .col-item-bottom{
                  cursor: pointer;
                  .col-item-num{
                      font-size: 40px;
                      color: #8A8A8A;
                      *{
                          color: #8A8A8A;
                      }
                  }
                  .col-item-title{
                      font-weight: 700;
                  }
              }
          }
      }

  }
</style>
