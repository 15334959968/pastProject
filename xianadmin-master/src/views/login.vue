<template>
  <div class="page-login" >
      <div class="login-model">
          <div class="login-model-top">
              {{appconfig.title}}
          </div>
          <div class="login-model-row">
              <div class="login-model-left">
                  <el-input prefix-icon="iconfont yonghu" v-model="user.username"  placeholder="请输入登陆账号"></el-input>
              </div>
          </div>
          <div style="margin-top: -0.3rem" v-show="titleVisible" >
              <span style="color: red">请账号不能为空</span>
          </div>
          <div class="login-model-row">
              <el-input   prefix-icon="iconfont suo" v-model="user.password" type="password" placeholder="请输入账号密码"></el-input>
          </div>
          <div style="margin-top: -0.3rem" v-show="title1Visible" >
              <span style="color: red">密码必须包含数字和字母</span>
          </div>
         <div class="login-model-row-identify" >
             <div class="identify-left">
                 <el-input  v-model="user.identify" placeholder="请输入验证码"></el-input>
             </div>
             <div class="identify-right" @click="refreshCode">
                 <identify :identifyCode="user.identifyCode"  ></identify>
             </div>
          </div>
          <div class="login-model-lable">
              <el-checkbox size="small " class="check-box" v-model="checked"></el-checkbox>
              <span style="margin-right: 0.3rem">记住密码</span>
          </div>
          <div class="login-botton" @click="onlogin">
              登陆
          </div>
      </div>
  </div>
</template>
<script>
  import {appconfig} from '../services/appconfig';
  import SIdentify from '../components/identify.vue';
  import md5 from 'js-md5';
  import axios from 'axios'
  export default {
    name:'login',
    data () {
      return {
          appconfig:appconfig,
          user:{
              identifyCodes: "ABCDE",
              identifyCode:'',
              identify:'',
              username:'',
              password:'',
              checked:'',
          },
          titleVisible:false,
          title1Visible:false
      }
    },
    methods: {
        /**
         * 检查参数
         * @param _this
         */
        checkuser(_this){
               if(!_this.user.username){
                    _this.$alert("请账号不能为空");
                }else if(!_this.user.password){
                    _this.$alert("请账号密码不能为空");
                }else if(_this.user.identifyCode!=_this.user.identify){
                    _this.$alert("验证码不正确");
                }else {
                    _this.login(_this);
                }
           
        },
        /**
         * 登陆范服务
         * @param _this
         */
        login(_this){
            _this.$servers.Userlogin({
                    username:this.user.username,
                    password:md5(this.user.password),
                    securityCode:this.user.identifyCode
                })
                .then(data => {
                    if(data['user']){
                        sessionStorage.setItem("user",JSON.stringify(data));
                        _this.$router.push("main");
                    }
                })
                .then(error => {
                })
        },
        /**
         * 登陆业务
         */
        onlogin(){
          let _this=this;
           _this.$store.commit('onlogin',true);
            _this.$router.push("main");
            return;
          _this.checkuser(_this);
        },
      randomNum(min, max) {
         return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
          this.user.identifyCode = "";
          this.makeCode(this.user.identifyCodes, 4);
      },
      makeCode(o, l) {
           let _this=this;
          for (let i = 0; i < l; i++) {
              _this.user.identifyCode += _this.user.identifyCodes[
                  _this.randomNum(0, _this.user.identifyCodes.length)
            ];
          }

      }
    },
    mounted () {
      //验证码
      this.user.identifyCode = "";
      this.makeCode(this.user.identifyCodes, 4);
    },
    components: {
        'identify':SIdentify
    },
    watch:{
       "user.username"(it){
            if(it==''||it==null){
                this.titleVisible=true
            }{
                this.titleVisible=false
            }
        },
       'user.password'(it){
            var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
            this.title1Visible=!reg.test(it);
        }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    page-main{
        top: 0px;
        left: 0px;
    }
 .page-login{
  

         height: 100%;
    width: 100%;
    overflow: hidden;
       background:url(../../static/images/login-background.png) no-repeat 50%;
    background-size: 100% 100%;
    z-index: 9;
    position: absolute;
    top: 0px;
    left: 0px;
     .el-input__inner{
         background-color: transparent !important;
         border: none;
         margin-left: 42px;
         border-radius:0px;
         width: 5.8rem;
         border-left: 1px #CCCCCC solid;
         height: 28px;
         padding-left:15px;
         color: #fff;
     }
     .iconfont{
         position: relative;
         top: -5px;
         left: 10px;
     }
     .login-model-left{
         display: flex;
         width: 100%;
         justify-content: center;
         align-items: center;
     }
     .login-model {
         width:6.67rem;
         height: 4.6rem;
         position: absolute;
         top:50%;
         left: 0px;
         right: 0px;
         transform: translateY(-60%);
         margin: auto;
         .login-model-top{
             letter-spacing: 5px;
             text-align: center;
             font-size:0.57rem;
             color:rgba(255,255,255,1);
             background: radial-gradient(#29597a 0, transparent 50%);
             text-shadow:-2px 1px 3px rgba(255, 255, 255, 0.8);
             margin-bottom: 0.97rem;
         }
         .login-model-row{
             display: flex;
             justify-content: left;
             align-items: center;
             width:6.67rem;
             height:0.73rem;
             line-height: 0.6rem;
             box-shadow: inset 1px 1px 9px 2px #29738a;
             background: rgba(0,0,0,.6);
             margin-bottom: 0.33rem;
             border-radius: 4px;
         }
         .login-model-row-identify{
             display: flex;
             justify-content: flex-start;
             align-items: top;

         }
         .login-model-row-identify .identify-left{
             width:3.5rem;
             height:0.73rem;
             line-height: 0.6rem;
             box-shadow: inset 1px 1px 9px 2px #29738a;
             background: rgba(0,0,0,.6);
             margin-bottom: 0.33rem;
             border-radius: 4px;
         }
         .login-model-row-identify .identify-right{
            margin-left: 1rem;
         }
         .login-model-lable{
             width: 100%;
             font-size:14px;
             display: flex;
             align-items: center;
             justify-content: flex-end;
             text-align: right;
             color:rgba(255,255,255,1);
             .check-box{
                 margin-left: 0.13rem;
                 height:0.27rem;
                 position: relative;
                 top: -1px;
             }
         }
         .login-botton{
             width:4rem;
             margin: auto;
             border-radius:6px;
             cursor: pointer;
             margin-top: 0.37rem;
             height:0.73rem;
             background:RGBA(7, 134, 207, .8);
             display: flex;
             justify-content: center;
             align-items: center;
             letter-spacing: 0.1rem;
             font-size:0.33rem;
             color:rgba(255,255,255,1);
         }
         .identify-left .el-input >>> .el-input__inner {
               border:none;
               margin-left: 0;
               width: 3rem;
           }
     }

 }
</style>
