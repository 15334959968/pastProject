<template>
    <el-container class="mission" >
        <section>
            <!--工具条-->
            <xa-search :list="searchList" @search="find" @plus="handleAdd"></xa-search>
            <div class="image-models">
                <div class="image-model-item" v-for="(item,index) in users">
                    <img :src="item.url||'http://img95.699pic.com/photo/50058/8723.jpg_wh300.jpg'" class="image">
                    <div class="padding">
                        <p class="title">{{item.title}}</p>
                        <p>{{ item.creationTime||wxformatDate }}</p>
                        <p class="name">创建人:{{item.submitter}}</p>
                    </div>
                    <div class="icon-botton">
                        <icon title="查看详情" class="el-icon-more-outline" @click="handleAdd(item)"></icon>
                        <icon title="编辑任务" class="el-icon-edit-outline" @click="handleAdd(item)"></icon>
                        <icon title="删除任务" class="el-icon-close" @click="deleteProblem(item.id)"></icon>
                    </div>
                </div>
            </div>
            <div class="el-pagination-model">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-sizes="[5, 10, 20]"
                        :page-size="pageSize"
                        background
                        layout="prev, pager, next"
                        :total=10>
                </el-pagination>
            </div>



        </section>
    </el-container>
</template>
<script>

    export default {
        data () {
            return {
                //新增界面数据
                users: Array(10).fill({
                    title:"西岸施工",
                    submitter:"诸婧",
                    creationTime:new Date().toDateString(),
                 }),
                searchList: {
                    title: {
                        value: '',
                        placeholder: '任务名称'
                    },
                    users: {
                        value: '',
                        inputType: 'select',
                        placeholder: '任务类型',
                        option:[]
                    },


                    status: {
                        value: '',
                        inputType: 'select',
                        placeholder: '紧急程度',
                        option: []
                    },
                    submitter: {
                        value: '',
                        placeholder: '提交人',
                        inputType: 'select',
                        option: []
                    },
                    date: {
                        value: [],
                        inputType: 'date',
                        type: 'daterange'
                    }
                },
            }
        },
        methods :{
            find(){

            },
            handleAdd(){
               this.$router.push("/missionBrief")
            },
            handleCurrentChange(){

            },
            handleSizeChange(){

            }
        },
        components: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .mission{
        padding: 15px 20px;
    }

</style>
