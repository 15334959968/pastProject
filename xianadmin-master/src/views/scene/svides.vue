<template>
     <div>
        <div class="right-page">
           <el-tabs :tab-position="tabPosition">
              <el-tab-pane label="BIM模型视频"></el-tab-pane>
              <el-tab-pane label="施工模拟视频"></el-tab-pane>
              <el-tab-pane label="现场检查视频"></el-tab-pane>
           </el-tabs>
        </div>
      <div class="vides-page">
         <el-row>
            <el-form ref="form" :inline="true" :model="sizeForm" label-width="80px" style="padding: 0px 0px 0px 10px">
               <el-form-item label="视频名称">
                  <el-input v-model="sizeForm.name"></el-input>
               </el-form-item>
               <el-form-item label="创建人">
                  <el-input v-model="sizeForm.name"></el-input>
               </el-form-item>
               <el-form-item label="地块">
                  <el-select v-model="sizeForm.region" placeholder="请选择地块">
                     <el-option label="G" value="G"></el-option>
                     <el-option label="J" value="J"></el-option>
                  </el-select>
               </el-form-item>
            </el-form>
         </el-row>
         <el-row>
            <el-form  :inline="true" label-width="80px" style="padding: 10px 0px 0px 10px">
               <el-form-item label="创建时间">
                  <el-date-picker
                          v-model="sizeForm.date1"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                  </el-date-picker>
               </el-form-item>
               <el-form-item>
                  <el-button type="primary" icon="el-icon-search" @click.native="find()">搜索</el-button>
               </el-form-item>
            </el-form>

         </el-row>
         <el-row style="margin-top: 20px">
            <el-col :span="4" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
            <img src="http://img95.699pic.com/photo/00046/2767.jpg_wh300.jpg"
            @click="dialogVisible = true"
            class="image">
            <div  style="padding: 14px;font-size: 14px;">
            <p class="margin-v">西岸进度模拟视频</p>
               <p class="el-tags margin-v v-flex">
                  <el-tag  type="danger">地块</el-tag>
                  <el-tag style="margin-left: 10px" type="danger">G区</el-tag>
                  <el-tag style="margin-left: 10px" type="danger">新建</el-tag>
               </p>
            <div class="bottom clearfix ">
            <time class="time">{{ currentDate|wxformatDate }}</time>
            </div>
            </div>
            </el-card>
            </el-col>
         </el-row>
         <el-dialog width="1023px" height="630px"
                    :modal="modal"
                    :visible.sync="dialogVisible" >
            <video-player  class="video-player-box"
                           ref="videoPlayer"
                           :options="playerOptions"
                           :playsinline="true"
                           customEventName="customstatechangedeventname"
                           @play="onPlayerPlay($event)"
                           @pause="onPlayerPause($event)"
                           @statechanged="playerStateChanged($event)"
                           @ready="playerReadied">
            </video-player>
         </el-dialog>
      </div>

   </div>

</template>
<script>
  import {videoPlayer} from 'vue-video-player';
  import 'video.js/dist/video-js.css';
  export default {
    data () {
      return {
          sizeForm: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
          },
          tabPosition: 'right',
          modal:false,
          dialogVisible: false,
          currentDate: new Date(),
          playerOptions: {
              muted: true,
              language: 'en',
              playbackRates: [0.7, 1.0, 1.5, 2.0],
              sources: [{
                  type: "video/mp4",
                  src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
              }],
              poster: "http://img95.699pic.com/photo/00046/2767.jpg_wh300.jpg",
          }
      }
    },
    methods: {
        onPlayerPlay(player) {
        },
        onPlayerPause(player) {
        },
        playerStateChanged(playerCurrentState) {
        },
        playerReadied(player) {
            console.log('the player is readied', player)
        }
    },
    mounted () {
    },
    components: {
        'videoPlayer':videoPlayer
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
   .right-page{
         left: 5px;
    width: 140px;
    position: absolute;
    padding: 20px;
    background-color: #ffffff;
    height: 100%;
   }
   .vides-page{
        background-color: #fff;
    padding: 20px;
        margin-left: 140px;
            width: 80%;
    margin-right: 20px;
      .vide-model{
         width: 900px;
         height: 600px;
         position: fixed;
         z-index: 9;
         top: 20%;
         left: 30%;
      }
      .vjs-big-play-button{
         top: 45% !important;
         left: 45%!important;
      }
      .image{
         width: 100%;
         height: 100%;
         cursor: pointer;
      }
      .el-col-4{
         padding-bottom: 10px;
      }
      .el-dialog{
         }
      .el-col-offset-0,.el-col-offset-2{
         margin-left:20px;
         /*margin-bottom: 20px;*/
      }
      .el-dialog__headerbtn .el-dialog__close {
         position: relative;
         top: -12px;
         font-size: 27px;
      }
      .el-dialog__body{
         padding-left: 0px;
         padding-right: 0px;
         max-height: 96vh;
         min-height: 72vh;
      }
   }
   .el-tags{
      margin-left: -12px;
      .el-tag{
         height: 24px;
         line-height: 24px;
         margin-left: 10px;
      }
   }
   .margin-v{
       padding-bottom: 10px;
   }
</style>