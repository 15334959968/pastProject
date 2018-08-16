<template>
  <div class="page-login" >
      <div class="login-model" >
          <!--<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                  <el-input v-model.number="ruleForm2.age"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
          </el-form>-->
          <div class="login-model-top">
              密码重置
          </div>
          <div class="login-model-row" >
              <el-input   prefix-icon="iconfont suo" v-model="password" type="password" placeholder="请输入账号密码"></el-input>
          </div>
          <div class="login-model-row">
              <el-input   prefix-icon="iconfont suo" v-model="repassword" type="password" placeholder="请再次账号密码"></el-input>
          </div>
          <div class="login-botton" @click="onResetPassword()">
              重置密码
          </div>

      </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name:'login',
    data () {
      return {
          ruleForm2: {
              pass: '',
              checkPass: '',
              age: ''
          },
          rules2: {
              pass: [
                  { validator: validatePass, trigger: 'blur' }
              ],
              checkPass: [
                  { validator: validatePass2, trigger: 'blur' }
              ],
              age: [
                  { validator: checkAge, trigger: 'blur' }
              ]
          }
      }
    },
    methods: {
        onResetPassword(){
         let _this=this;
         if(_this.password!==_this.repassword){
             _this.open("两次密码不一致！");
             _this.password='';
             _this.repassword=''
         }else {
             _this.open("密码修改成功");
             this.$router.push({ path:'/main'})
           }
        },
      open(menage) {
         this.$alert(menage, '温馨提示', {
             confirmButtonText: '确定',
             callback: action => {
             }
         });
        },

    },
    mounted () {

    },
    components: {}
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
     .el-input__inner{
         background-color: transparent !important;
         border: none;
         margin-left: 42px;
         border-radius:0px;
         width: 5.8rem;
         border-left: 1px #CCCCCC solid;
         height: 28px;
         padding-left:15px;
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
     }

 }
</style>
