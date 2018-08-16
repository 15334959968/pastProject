<template>
    <div class="modeltree-page">
        <div class="tree-item item-title">
            <div class="tree-item-col col col-name">
                任务名称
            </div>
            <div class="tree-item-col col col-times">
                任务工期
            </div>
            <div class="tree-item-col col col-user">
                验收人
            </div>
            <div class="tree-item-col col col-renwu">
                前置任务
            </div>
            <div class="tree-item-col col col-jindu" style="padding-left: 30px;">
                <div v-for="(item,index) in times" class="col-jindu-item" :key="index" >{{(index+1)*10}}天</div>
            </div>
            <div class="tree-item-col col col-mens">

            </div>
        </div>
        <div class="tree-item" v-for="(item,index) in treedatas" :key="index">
            <div class="tree-item-col col col-name">
                {{item.title}}
            </div>
            <div class="tree-item-col col col-times">
                {{item.timenums}}
            </div>
            <div class="tree-item-col col col-user">
                {{item.user}}
            </div>
            <div class="tree-item-col col col-renwu">
                {{item.nums||'/'}}
            </div>
            <div class="tree-item-col col col-jindu">
                <vprogress
                        :title="title"
                        :text-inside="true"
                        :stroke-width="20"
                        :type="line"
                        :percentage="item.nums"
                        :color="colors[item.start]"
                >
                </vprogress>
            </div>
            <div class="tree-item-col col col-mens">
            </div>
        </div>
    </div>
</template>
<script>
    import  vprogress from '../components/vprogress'
    export default {
        name:'modeltree',
        data () {
            return {
                title:"天",
                colors:{
                    "1":"#409eff",
                    "2":"#8e71c7b3",
                    "3":"#67c23a",
                    "4":"#f56c6c",
                },
                times:new Array(10),
                treedatas:[
                    {
                        timenums:546,
                        title:"G地块区域地下空间施工",
                        starttime:"2018年1月1日",
                        endtime:"2019年6月30日",
                        nums:parseInt(Math.random()*100),
                        user:"张泽鹏",
                        start:1,
                        child:[
                            {
                                timenums:135,
                                title:"地下一层结构施工（顶板）",
                                starttime:"2018年1月1日",
                                endtime:"2018年5月15日",
                                nums:parseInt(Math.random()*100),
                                user:"张泽鹏",
                                start:2

                            },
                        ]
                    },
                    {
                        timenums:65,
                        title:"G1区地下结构出正负零",
                        starttime:"2018年5月15日",
                        endtime:"2018年5月15日",
                        nums:parseInt(Math.random()*100),
                        user:"张泽鹏",
                        start:2
                    },
                    {
                        timenums:135,
                        title:"G1区地下结构施工",
                        starttime:"2018年1月1日",
                        endtime:"2018年5月15日",
                        nums:parseInt(Math.random()*100),
                        user:"张泽鹏",
                        start:3,
                        child:[
                            {
                                timenums:135,
                                title:"G2-3地下结构施工",
                                starttime:"2018年1月1日",
                                endtime:"2018年5月15日",
                                nums:parseInt(Math.random()*100),
                                user:"张泽鹏",
                                start:2
                            },
                            {
                                timenums:30,
                                title:"G2-2地下结构施工",
                                starttime:"2018年4月16日",
                                endtime:"2018年6月30日",
                                nums:parseInt(Math.random()*100),
                                user:"张泽鹏",
                                start:1
                            },

                        ]
                    },
                    {
                        timenums:269,
                        nums:parseInt(Math.random()*100),
                        title:"G2区地下结构出正负零",
                        starttime:"2018年6月30日",
                        endtime:"2018年6月30日",
                        user:"张泽鹏",
                        start:2,
                        child:[
                        ]
                    },
                    {
                        timenums:31,
                        title:"沉降后浇带封闭施工",
                        starttime:"2018年12月1日",
                        endtime:"2018年12月31日",
                        nums:parseInt(Math.random()*100),
                        user:"张泽鹏",
                        start:1,
                        child:[
                        ]
                    },
                    {
                        timenums:0,
                        title:"G地块沉降后浇带封闭施工",
                        starttime:"2018年12月31日",
                        endtime:"2018年12月31日",
                        nums:parseInt(Math.random()*100),
                        user:"张泽鹏",
                        start:3,
                        child:[
                        ]
                    },
                    {
                        timenums:135,
                        title:"地下一层结构施工（顶板）",
                        starttime:"2018年1月1日",
                        endtime:"2018年5月15日",
                        nums:parseInt(Math.random()*100),
                        user:"张泽鹏",
                        start:4,
                        child:[
                        ]
                    },
                ]
            }
        },
        methods: {
        },
        mounted () {
            this.$parent.loadmodelkey="growth";
            this.$parent.loadmodelkeyt="";
            this.t.onWindowResize(three);
            this.t.onWindowResize(threet);
        },
        components: {
            vprogress
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .modeltree-page{
        position: absolute;
        width: 100%;
        z-index: 2;
        font-size: 14px;
        background-color: #3f4c5a;
        padding-right: 50px;
        padding-bottom: 10px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        left: 0px;
        top:60%;
        .tree-top{
            .tree-top-title{
                padding: 20px 20px;
                font-size: 26px;
                font-weight: 700;
                color: red;
                text-align: center;
            }
        }
        .item-title{
            border-top:1px #8c939d solid;
        }
        .tree-item{
            color: #fff;
            background-color: transparent;
            height: 39px;
            line-height: 39px;
            border-bottom:1px #8c939d solid;
            flex: 1;
            .tree-item-col{
                display: inline-flex;
            }
            .col{
                   padding: 0px 10px;
            }
            .col-name{
                width: 300px;
                text-align: left;
                border-right: 2px #8c939d solid;
            }
            .col-user{
                width: 5%;
            }
            .col-times{
                width: 5%;
            }
            .col-renwu{
                width: 5%;
                border-right: 2px #8c939d solid;
            }
            .col-jindu{
                width:600px;
                overflow: hidden;
                display: inline-flex;
                .col-jindu-item{
                    display:inline-block;
                    width:60px;
                }
            }
            .col-mens{
                width: 100px;
            }
        }
        .el-progress-bar__inner,.el-progress-bar__outer{
            border-radius: 0px;
        }
        .el-progress{
            width: 100%;
            cursor: pointer;
            left: -10px;
        }
    }
    .modeltree-back + .page-main{
        background-color: #3f4c5a;
    }

</style>
