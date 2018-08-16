<template>
    <el-container style="margin: 20px">
        <el-main>
            <section>
                <!--工具条-->
                <xa-search :list="searchList" @search="getProblemList" @plus="handleAdd"></xa-search>
                <div class="image-models">
                    <div class="image-model-item" v-for="(item,index) in problemList">
                        <img :src="item.url" class="image">
                        <div class="padding">
                            <p class="title">{{item.subject}}</p>
                            <p>{{ item.completeDate||wxformatDate }}</p>
                            <p class="name">创建人:{{item.cteatename}}</p>
                        </div>
                        <div class="icon-botton">
                            <icon title="编辑会议" class="el-icon-edit" @click="handleAdd(item)"></icon>
                            <icon title="删除会议" class="el-icon-close" @click="deleteProblem(item.id)"></icon>
                        </div>
                    </div>
                </div>

                <div class="el-pagination-model">
                    <el-pagination
                            @size-change="getProblemList"
                            @current-change="getProblemList"
                            :current-page.sync="currentPage"
                            :page-sizes="[5, 10, 20]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next"
                            :total=10>
                    </el-pagination>
                </div>

            </section>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data () {
            return {
                problemList: Array(10).fill({
                    subject:"诸婧",
                    cteatename:"诸婧",
                    completeDate:new Date().toDateString(),
                    url:"http://img95.699pic.com/photo/00019/6796.jpg_wh300.jpg",
                }),
                searchList: {
                    title: {
                        value: '',
                        placeholder: '会议标题'
                    },
                    name: {
                        value: '',
                        placeholder: '会议创建人'
                    },
                    users: {
                        value: '',
                        inputType: 'select',
                        placeholder: '会议组',
                        option:[]
                    },
                    responsible: {
                        value: '',
                        placeholder: '负责部门',
                        inputType: 'select',
                        option: []
                    },
                    date: {
                        value: [],
                        inputType: 'date',
                        type: 'daterange'
                    }
                },
                updateId: ''
            };
        },
        methods: {
            handleAdd(){
               this.$router.push("/madminup");
            },
            getProblemList(){

            },
            handleEdit(){

            },
            deleteProblem(){

            }
        },
        mounted () {
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .timePick{
        margin-left: 1rem;
    }
    .toolbar{
        margin-left: 3rem;
        margin-top: .3rem;
    }


</style>
