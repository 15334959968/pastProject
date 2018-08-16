<template>
    <div class="problemupdata-page">
        <div class="pro-form-left">
            <el-form class="pro-form" ref="form" :model="form" label-width="120px">
                <el-form-item label="任务名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="任务描述">
                    <el-input type="textarea" v-model="form.text"></el-input>
                </el-form-item>





                <div class="form-icons">
                    <!--<span class="hujiao-icon">@</span>-->
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList2"
                            list-type="picture">
                        <icon class="el-icon-picture"></icon>
                    </el-upload>

                </div>
                <el-form-item class="botton-model">
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="pro-form-right">
            <div class="pro-form-right-top">
                <el-radio-group v-model="form.isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">未完成</el-radio-button>
                    <el-radio-button :label="true">已完成</el-radio-button>
                </el-radio-group>
            </div>
            <div class="pro-form-right-item">
                <div class="pro-right-item-name">紧急程度</div>
                <div class="pro-right-item-select">
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            紧急<i class="el-icon-setting el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>紧急</el-dropdown-item>
                            <el-dropdown-item>重要</el-dropdown-item>
                            <el-dropdown-item>普通</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>

            <div class="pro-form-right-item">
                <div class="pro-right-item-name">提交人</div>
                <div class="pro-right-item-select">
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            王冬<i class="el-icon-setting el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>王陈远</el-dropdown-item>
                            <el-dropdown-item>陈颖</el-dropdown-item>
                            <el-dropdown-item>杨云帆</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>

            <div class="pro-form-right-item">
                <div class="pro-right-item-name">处理人</div>
                <div class="pro-right-item-select">
                    <el-dropdown>
                          <span class="el-dropdown-link">
                            王冬<i class="el-icon-setting el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>王陈远</el-dropdown-item>
                            <el-dropdown-item>陈颖</el-dropdown-item>
                            <el-dropdown-item>杨云帆</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>

            <div class="pro-form-right-item">
                <div class="pro-right-item-name">任务日期</div>
                <div class="pro-right-item-select">
                </div>
            </div>
            <div class="pro-form-right-item">
                <el-date-picker
                        v-model="form.time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="起止日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            name:"missionBrief"
            return {
                form: {
                    isCollapse:false,
                    name: '',
                    text:"",
                    time:""
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style lang="scss">
    .problemupdata-page{
        display: flex;
        .pro-form{
            padding: 20px 0px;
        }
        .pro-form-left{
            width: 45%;
            height: fit-content;
            .form-icons{
                display: flex;
                text-align: left;
                font-size: 20px;
                color: #aaaab4;
                margin-left: 100px;
                height: 30px;
                line-height: 30px;
                margin-bottom: 10px;
                .hujiao-icon{
                    margin-left: 10px;
                    margin-right: 20px;
                }
            }
            .botton-model{
                padding-top: 20px;
            }
        }
        .el-textarea__inner {
            height: 205px;
        }
        .el-textarea{
            width: 100%;
        }
        .pro-form-right{
            background-color: #f5f5f5;
            width: 380px;
            margin-left:60px;
            padding: 20px;
            margin-top: 20px;
            .pro-form-right-top{
                text-align: center;
            }
            .pro-form-right-item{
                border-bottom: 1px solid #e5e5e5;
                padding-bottom: 10px;
                margin: 10px;
                display: flex;
                width: 100% ;
                .pro-right-item-name{
                    display: inline-flex;
                    flex: 1;
                    width: 80%;
                    padding-left: 20px;
                }
                .pro-right-item-select{
                    flex: 1;
                    width: 70px  ;
                    display: inline-flex;
                }
            }
        }
    }
</style>