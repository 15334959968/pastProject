<template>
   <div class="system-page">
       <el-row>
           <el-col  class="sysapp-item" v-for="(o, index) in 3" >
               <el-card @click.native="onclickitem()" :body-style="{ padding: '0px' }" >
                   <img  src="http://www.xacyy.com.cn/templates/xian/images/img3.jpg" class="image"/>
                   <div style="padding: 14px;font-size: 14px;">
                       <p class="item-name">西岸传媒港</p>
                       <div class="bottom clearfix">
                           <p>项目介绍：</p>
                           <p>西岸传媒项目介绍信息</p>
                       </div>
                   </div>
               </el-card>
           </el-col>
           <el-col class="sysapp-item" >
               <el-button class="item-botton" type="primary" @click="dialogVisible=!dialogVisible">创建项目</el-button>
           </el-col>
       </el-row>
       <el-dialog width="653px"
                  height="542px"
                  class="ruleFormdialog"
                  :modal="modal"
                  :append-to-body="true"
                  :visible.sync="dialogVisible">
           <el-form :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="ruleForm">
               <el-form-item label="项目名称" prop="name">
                   <el-input v-model="form.name"></el-input>
               </el-form-item>
               <el-form-item label="项目介绍图" prop="name">
                   <el-upload
                           action="https://jsonplaceholder.typicode.com/posts/"
                           list-type="picture-card"
                           :on-preview="handlePictureCardPreview"
                           :on-remove="handleRemove">
                       <i class="el-icon-plus"></i>
                   </el-upload>
               </el-form-item>
               <el-form-item label="项目描述">
                   <el-input type="textarea" v-model="form.text"></el-input>
               </el-form-item>

               <el-form-item label="地上地块">
                   <el-tag
                           :key="tag"
                           v-for="tag in form.topdynamicTags"
                           closable
                           :disable-transitions="false"
                           @close="handleClose(tag,'topdynamicTags')">
                       {{tag}}
                   </el-tag>
                   <el-input
                           class="input-new-tag"
                           v-if="form.inputVisible1"
                           v-model="form.inputValue1"
                           ref="saveTagInput1"
                           size="small"
                           @keyup.enter.native="handleInputConfirm('inputVisible1','topdynamicTags')"
                           @blur="handleInputConfirm('inputVisible1','topdynamicTags')"
                   >
                   </el-input>
                   <el-button v-else class="button-new-tag" size="small" @click="showInput('inputVisible1','saveTagInput1')">NEW+</el-button>

               </el-form-item>

               <el-form-item label="地下地块">
                   <el-tag
                           :key="tag"
                           v-for="tag in form.bottondynamicTags"
                           closable
                           :disable-transitions="false"
                           @close="handleClose(tag,'bottondynamicTags')">
                       {{tag}}
                   </el-tag>
                   <el-input
                           class="input-new-tag"
                           v-if="form.inputVisible2"
                           v-model="form.inputValue2"
                           ref="saveTagInput2"
                           size="small"
                           @keyup.enter.native="handleInputConfirm('inputVisible2','bottondynamicTags')"
                           @blur="handleInputConfirm('inputVisible2','bottondynamicTags')"
                   >
                   </el-input>
                   <el-button v-else class="button-new-tag" size="small" @click="showInput('inputVisible2','saveTagInput2')">NEW+</el-button>

               </el-form-item>


               <el-form-item>
                   <div class="dialog-footer">
                       <el-button @click="dialogVisible = false">取 消</el-button>
                       <el-button type="primary" @click="additem(form.id)">保存</el-button>
                   </div>
               </el-form-item>

           </el-form>
       </el-dialog>
   </div>
</template>
<script>
    import {kuaiqs} from '../services/ydatabase.js';
  export default {
      name:'system',
      data () {
          return {
              kuaiqs:kuaiqs,
              modal:true,
              dialogVisible: false,
              activeName: 'second',
              form: {
                  name: '',
                  text: '',
                  url:"",
                  bottondynamicTags: ['标签一', '标签二', '标签三'],
                  topdynamicTags: ['标签一', '标签二', '标签三'],
                  inputVisible1: false,
                  inputVisible2: false,
                  inputValue1: '',
                  inputValue2: ''
              },
          }
      },
      filters:{

      },
    methods: {
        //地块表单开始
        handleClose(tag,key) {
            this.form[key].splice(this.form[key].indexOf(tag), 1);
        },
        showInput(name,inputkey) {
            this.form[name] = true;
            this.$nextTick(_ => {
                this.$refs[inputkey].$refs.input.focus();
            });
        },
        handleInputConfirm(key,listkey) {
            let inputValue = this.form[key];
            if (inputValue) {
                this.form[listkey].push(inputValue);
            }
            this.form[key] = false;
            if(key=='inputVisible1'){
                this.form.inputValue1 = '';
            }else{
                this.form.inputValue2 = '';
            }
        },
        //地块表单结束


        additem(file) {
            this.$message({
                message: '创建成功',
                type: 'success'
            });
         },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.form.url = file.url;
        },
        onclickitem(){
            this.$router.push('/systemset');
        }

    },
    mounted () {
    },
    components: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
   .system-page{
       position: relative;
       padding: 10px 25px 10px 0px;
        .item-name{
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            padding: 10px 0px 10px 0px;
        }
       .image{
           width: 100%;
           height: 168px;
           cursor: pointer;
       }
       .el-col-4{
           padding-bottom: 20px;
       }
       .el-col-offset-0,.el-col-offset-2{
           margin-left:20px;
           margin-bottom: 20px;
       }
       .item-botton{
           position: absolute;
           margin-left: 20px;
       }
       .dialog-footer{text-align: center}
       .checkboxform{padding-top: 20px;}
   }
   .ruleForm{
       padding-top: 15px;
   }
   .ruleFormdialog .el-dialog__body {
       overflow-y: auto;
       max-height: 85vh !important;
   }
   .sysapp-item{
       width: 230px;
       margin-left: 20px;
   }

</style>
