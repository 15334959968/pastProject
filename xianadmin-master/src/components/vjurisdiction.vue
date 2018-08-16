<template>
    <div class="v-page">
        <div class="v-page-item">
            <div class="v-page-item-left">
                基本权限
            </div>
            <div class="v-page-item-right" style="    padding-left: 20px;">
                    <div class="v-page-item-right-i" v-for="(item,index) in quanxuan.jibens">
                        <el-checkbox v-model="item.check" :label="item.name" :key="index">
                            {{item.name}}
                        </el-checkbox>
                </div>
            </div>
        </div>
        <div class="v-page-item">
            <div class="v-page-item-left">
                表单
            </div>
            <div class="v-page-item-right">
                <div class="v-page-item-right-row" v-for="(item,index) in quanxuan.forms">
                   <div>
                       <el-checkbox v-model="item.check" :label="item.name" :key="index">
                           {{item.name}}
                       </el-checkbox>
                   </div>
                    <div>
                        <div class="v-page-item-right-i" v-for="(citem,cindex) in item.list">
                            <el-checkbox v-model="citem.check" :label="citem.name" :key="cindex">
                                {{citem.name}}
                            </el-checkbox>
                        </div>
                        <div class="clear"></div>
                    </div>

                </div>
            </div>
        </div>
        <div class="foter-padding">
            <el-button type="primary" @click="onadd">更新</el-button>
        </div>
    </div>
</template>
<script>

    export default {
        name:'vjurisdiction',
        data () {
            return {
               quanxuan:{
                   jibens:[
                       {
                           check:false,
                           name:"上传模型",
                       },
                       {
                           check:false,
                           name:"更新模型",
                       },
                       {
                           check:false,
                           name:"设置项目",
                       },
                       {
                           check:false,
                           name:"设置构建",

                       }
                   ],
                   forms:[
                       {
                            check:false,
                            name:"质量",
                            list:[
                                {
                                    check:false,
                                    name:"新建表单",
                                },
                                {
                                    check:false,
                                    name:"导入表单模型",
                                },
                                {
                                    check:false,
                                    name:"查看表单模型",
                                },
                            ]
                        },
                       {
                           check:false,
                           name:"安全",
                           list:[
                               {
                                   check:false,
                                   name:"新建表单",
                               },
                               {
                                   check:false,
                                   name:"导入表单模型",
                               },
                               {
                                   check:false,
                                   name:"查看表单模型",
                               },
                           ]
                       },
                       {
                           check:false,
                           name:"材料",
                           list:[
                               {
                                   check:false,
                                   name:"新建表单",
                               },
                               {
                                   check:false,
                                   name:"导入表单模型",
                               },
                               {
                                   check:false,
                                   name:"查看表单模型",
                               },
                           ]
                       },
                       {
                           check:false,
                           name:"进度",
                           list:[
                               {
                                   check:false,
                                   name:"新建表单",
                               },
                               {
                                   check:false,
                                   name:"导入表单模型",
                               },
                               {
                                   check:false,
                                   name:"查看表单模型",
                               },
                           ]
                       },
                       {
                           check:false,
                           name:"变更",
                           list:[
                               {
                                   check:false,
                                   name:"新建表单",
                               },
                               {
                                   check:false,
                                   name:"导入表单模型",
                               },
                               {
                                   check:false,
                                   name:"查看表单模型",
                               },
                           ]
                       }

                   ]
               }
            }
        },
        methods: {

        },
        mounted () {
        },
        components: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .v-page{
        margin-bottom: 150px;
        .v-page-item{
            position: relative;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
            border: 1px solid #ebebeb;
            border-radius: 3px;
            margin-bottom: 35px;
            overflow: hidden;
            .v-page-item-left{
                position: absolute;
                width: 10%;
                color: #000000;
                font-size: 16px;
                font-weight: 700;
                background-color: #f8f8f8;
                height: 100%;
                display: inline-flex;
                justify-content: center;
                align-items: flex-start;
                padding-top: 15px;
            }
            .v-page-item-right{
                width: 80%;
                display: inline-block;
                padding: 10px;
                margin-left: 10%;
                .v-page-item-right-i{
                    width: 30%;
                    float: left;
                    padding: 20px 20px 20px 0px;
                }
            }
            .v-page-item-right-row{
                padding: 10px;
                border-bottom: 1px solid #ebebeb;
                height: initial;
            }
            .clear{
                clear: both;

            }
        }
    }

</style>
