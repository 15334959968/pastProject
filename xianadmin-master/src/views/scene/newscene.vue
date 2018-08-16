<template>
    <div class="newscene-padding">
        <div class="newscene-bottoms">
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button label="E">E地块</el-radio-button>
                <el-radio-button label="J">J地块</el-radio-button>
                <el-radio-button label="K">K地块</el-radio-button>
                <el-radio-button label="G">G地块</el-radio-button>
                <el-radio-button label="N">N地块</el-radio-button>
                <el-radio-button label="O">O地块</el-radio-button>
            </el-radio-group>

            <div>
                <el-button icon="el-icon-upload2" style="margin-left: 50px" type="primary" @click="submitForm('ruleForm')">立即更新</el-button>
            </div>
        </div>
       <div class="new ">
           <div class="new-left">
               <el-alert
                       title="北区大型机械设备"
                       type="warning"
                       @close="hello">
               </el-alert>
               <div class="new-left-item" v-for="(item,index) in form.tops">
                   <div class="new-left-item-top" >
                       <div class="item-name">{{item.name}}</div>
                       <div class="item-name-input">
                           <el-input-number v-model="item.value" :step="1"></el-input-number>
                       </div>
                   </div>
                   <div class="new-left-item-botton">
                       <img src="../../../static/images/default.png">
                   </div>
               </div>
               <div style="clear: both"></div>
           </div>
           <div class="new-left">
               <el-alert
                       title="南区大型机械设备"
                       type="warning"
                       @close="hello">
               </el-alert>
               <div class="new-left-item" v-for="(item,index) in form.tops">
                   <div class="new-left-item-top" >
                       <div class="item-name">{{item.name}}</div>
                       <div class="item-name-input ">
                           <el-input-number v-model="item.value" :step="1"></el-input-number>
                       </div>
                   </div>
                   <div class="new-left-item-botton">
                       <img src="../../../static/images/default.png">
                   </div>
               </div>
               <div style="clear: both"></div>
           </div>
       </div>


        <div class="new new-botton">
            <div class="new-left">
                <el-alert
                        title="北区材料到场情况"
                        type="warning"
                        @close="hello">
                </el-alert>
                <div class="new-left-item" v-for="(item,index) in form.tops">
                    <div class="new-left-item-top" >
                        <div class="item-name">{{item.name}}</div>
                        <div class="item-name-input item-inline-flex">
                            <el-input-number v-model="item.value" :step="1"></el-input-number>
                            <el-select v-model="item.start" placeholder="到场情况">
                                <el-option label="——到场情况——" value="1"></el-option>
                                <el-option label="运输" value="运输"></el-option>
                                <el-option label="安装" value="安装"></el-option>
                            </el-select>
                        </div>
                    </div>

                </div>
                <div style="clear: both"></div>
            </div>
            <div class="new-left">
                <el-alert
                        title="南区材料到场情况"
                        type="warning"
                        @close="hello">
                </el-alert>
                <div class="new-left-item" v-for="(item,index) in form.tops">
                    <div class="new-left-item-top" >
                        <div class="item-name">{{item.name}}</div>
                        <div class="item-name-input item-inline-flex">
                            <el-input-number v-model="item.value" :step="1"></el-input-number>
                            <el-select v-model="item.start" placeholder="到场情况">
                                <el-option label="——到场情况——" value="1"></el-option>
                                <el-option label="运输" value="运输"></el-option>
                                <el-option label="安装" value="安装"></el-option>
                            </el-select>
                        </div>
                    </div>

                </div>
                <div style="clear: both"></div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:"newscene",
        data () {
            return {
                tabPosition:"E",
                form: {
                    tops:[
                        {
                            name:"塔吊",
                            value:1,
                            start:1
                        },
                        {
                            name:"履带吊",
                            value:2,
                            start:1
                        },
                        {
                            name:"塔式起重机",
                            value:3,
                            start:1
                        },
                        {
                            name:"汽车吊",
                            value:4,
                            start:1
                        }

                    ],
                    activeName:"E"
                }
            }
        },
        methods: {
            handleClick(){

            }
        },
        mounted () {
        },
        components: {
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .newscene-padding{
        margin: 25px;
        .newscene-bottoms{
            text-align: center;
            position: absolute;
            margin-bottom: 20px;
            top: 10px;
            display: flex;
        }
        .new{
            display: inline-flex;
            margin-top: 65px;
        }
        .new-botton{

        }
        .new-left{
            margin-right: 30px;
            width: 547px;
            background-color: #f2f2f3;
            .new-left-item-top{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .new-left-item{
                width: 253px;
                float: left;
                 padding: 10px;
                .el-input-number{
                    width: 123px;
                }
            }
            .item-name{
                margin-right: 10px;
                display: inline-block;
                width: 63px;
                text-align: center;
            }
            .item-name-input{
                display: inline-block;
                width: 100px;
            }
            .item-inline-flex{
                display: inline-flex;
            }
            .new-left-item-botton{
                text-align: center;
                padding-top: 10px;
                img{
                    width: 136px;
                    height: 105px;
                }
            }
        }
        .new-right{
            width: 50%;
        }

    }
</style>