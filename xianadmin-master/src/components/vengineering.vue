<template>
    <el-container>
        <el-row :gutter="60">
            <el-col :span="8">
                <el-button class="item-botton-p" type="primary" @click="addType('人工')">人工（创建）</el-button>
                <div class="item-page">
                   <div class="item-page-rido" v-for="(item,index) in types.list1">
                       <el-radio v-model="index" class="item-el-radio"  disabled  :label="index">{{item.title}}</el-radio>
                       <div class="color-lable" v-bind:style="{'background-color':item.color}">
                       </div>
                   </div>
                </div>
            </el-col>
            <el-col :span="8">
                <el-button class="item-botton-p" type="primary" @click="addType('材料')">材料设备（创建）</el-button>
                <div class="item-page">
                    <div class="item-page-rido" v-for="(item,index) in types.list2">
                        <el-radio v-model="index" class="item-el-radio"  disabled  :label="index">{{item.title}}</el-radio>
                        <div class="color-lable" v-bind:style="{'background-color':item.color}">
                        </div>

                    </div>
                </div>
            </el-col>

            <el-col :span="8">
                <el-button class="item-botton-p" type="primary" @click="addType('机械')">机械设备（创建）</el-button>
                <div class="item-page">
                   <div class="item-page-rido-i"  v-for="(item,index) in types.list3">
                       <el-radio v-model="index" class="item-el-radio item-page-rido-b"  disabled  :label="index">
                           {{item.title}}
                       </el-radio>
                       <el-upload
                               class="upload-demo"
                               action="https://jsonplaceholder.typicode.com/posts/"
                               list-type="picture">
                           <el-button size="small" type="primary">上传图片</el-button>
                       </el-upload>
                       <div class="item-el-radio-image">
                           <img :src="item.pic">
                       </div>
                   </div>
                </div>
            </el-col>
        </el-row>
        <!--编辑界面-->
        <el-dialog :title="keytitle+'工程信息'" width="200"  :visible.sync="FormVisible" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false" append-to-body >
            <el-form :model="editForm" label-width="120px" :rules="editFormRules" ref="editForm">
                <el-form-item label="工程名称" >
                    <el-input v-model="editForm.name"  style="width: 96%"></el-input>
                </el-form-item>

                <el-form-item label="工程颜色标识">
                    <el-color-picker v-model="editForm.color"></el-color-picker>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="FormVisible=false">取消</el-button>
                <el-button
                        type="primary" @click.native="editSubmit"
                >保存</el-button>
            </div>
        </el-dialog>

     </el-container>
</template>
<script>
    export default {
        name:'vengineering',
        data () {
            return {
                keytitle:"工程",
                FormVisible: false,
                radio:true,
                editForm:{
                    name:"",
                    color: '#409EFF',
                },
                types:{
                    list1:[
                        {
                            title:"木工",
                            color:"#ffdf25"
                        },
                        {
                            title:"钢筋工",
                                color:"#cc33cc"
                        },
                        {
                            title:"架子工",
                                color:"#3399ff"
                        }
                    ],
                    list2:[
                        {
                            title:"钢柱",
                            color:"#ff3300"
                        },
                        {
                            title:"钢梁",
                            color:"#009999"
                        }
                    ],
                    list3:[
                        {
                            title:"塔吊",
                            pic:"http://d100.paixin.com/1779390/1304/i/380/depositphotos_13045783-stock-photo-hand-drawn-abstract-building.jpg",
                        },
                        {
                            title:"起重机",
                            pic:"http://d207.paixin.com/1594308/1073/i/380/depositphotos_10731728-stock-photo-objects-on-workplace.jpg"
                        }
                    ],
                },
                radio3: '上海',
            }
        },
        methods: {
            addType(type){
                this.keytitle=type;
                this.FormVisible=true;
            },
            alert(mengae,icon){
                this.$message({
                    message: mengae,
                    type: icon||"error"
                });
            },
            checkfomr(editForm){
                let result=true;
                var flag = "0";
                var pattern = new RegExp("[~'!@#￥$%^&*()-+_=:]");
                if(editForm.name != "" && editForm.name != null){
                    if(pattern.test(editForm.name)){
                        flag = "1";
                    }
                }
                if(editForm.name.trim().length===0) flag="1";
                if(editForm.name==null||editForm.name=="") flag="0";
                if(flag == "1"){
                    result=false;
                    editForm.name="";//清空
                }
                return result;
            },
            editSubmit () {
                let _this = this;
                if(!_this.checkfomr(_this.editForm)){
                    _this.alert("请勿输入特殊字符");
                }else if(!_this.editForm.name){
                    _this.alert("请输入创建的工程名称");
                }else if(!_this.editForm.color){
                    _this.alert("请输入创建的工程颜色标识");
                }else{
                    let ps={
                        name: _this.editForm.name,
                        remark: _this.editForm.remark,
                        id:_this.editForm.id,
                    };
                    if(!_this.editForm.id){
                        delete  ps.id;
                    }
                    _this.FormVisible = false;
                }
            },
        },
        mounted () {
        },
        components: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .item-botton-p{
        padding: 12px 50px;
    }
   .color-lable{
       width: 20px;
       height: 20px;
   }
    .item-page-rido{
        display: flex;
        position: relative;
        padding: 20px
    }
    .item-page-rido-i{
        position: relative;
        padding: 20px;
    }
   .item-el-radio{
       width: 76px;
   }
   .item-page-rido-b{
       width: 76px;
   }
   .upload-demo{
       display: inline-block;
       position: absolute;
       right: 6px;
       top: 14px;
       .el-button--small {
           padding: 4px 15px !important;
       }
   }
    .item-el-radio-image{
        padding: 10px 0px;
        img{
            width: 90px;
            height: 90px;
        }
    }
    
</style>
