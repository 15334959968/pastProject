<template>
    <el-container>
        <el-main>
            <section>
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true" >
                        <el-form-item >
                            <el-input v-model="searchTitle" placeholder="名称" ></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-select v-model="searchType" placeholder="用户类型">
                                <el-option
                                        v-for="item in userType"
                                        :key="item.value"
                                        :label="item"
                                        :value="item">
                                </el-option>
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item >
                            <el-date-picker v-model="startTime" type="date" placeholder="开始时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item >
                            <el-date-picker v-model="endTime" type="date" placeholder="结束时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="searchStatus" placeholder="请选择">
                                <el-option
                                        v-for="item in status "
                                        :key="item.value"
                                        :label="item"
                                        :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" icon="el-icon-search" @click.native="find()">查询</el-button>
                        </el-form-item>
                    </el-form>

                </el-col>
                <!--列表-->
                <el-table :data="departmentlist" highlight-current-row v-loading="listLoading" style="width: 100%;"  max-height="600">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column type="index"  width="40">
                    </el-table-column>
                    <el-table-column prop="title" label="名称" width="120" >
                    </el-table-column>
                    <el-table-column prop="remark" label="描述" width="120" >
                    </el-table-column>
                    <el-table-column prop="companyType" label="用户类型" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="createDate" label="创建时间" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="updateDate" label="更新时间" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="companyStatus" label="状态" width="100" >
                    </el-table-column>

                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"   @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                            <el-button type="text" size="small"   @click="handleEdit(scope.row.id)">编辑</el-button>
                            <el-button type="text" size="small"   @click.native="handleDel(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-col :span="24" style="margin-top:0.3rem ">
                    <div style="display:inline-block ;margin-left: 1rem ">
                        <el-button type="primary" plain  @click="handleAdd()">新增</el-button>
                    </div>
                    <div style="display:inline-block;margin-left: 3rem">
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage"
                                :page-sizes="[5,10,20]"
                                :page-size="10"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total=total>
                        </el-pagination>
                    </div>
                </el-col>
                <!--新增界面-->
                <el-dialog title="会议类型管理" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                        <el-form-item label="标题" >
                            <el-input v-model="addForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="addForm.remark" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-from-item>
                            <el-upload
                                    style="margin-left:9%"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-change="handleChange"
                                    :file-list="fileList3">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-from-item>

                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>
                <!--编辑界面-->
                <el-dialog title="部门管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="名称" >
                            <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="editForm.remark" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="用户类型">
                                    <el-select v-model="editForm.userType1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in userType"
                                                :key="item.value"
                                                :label="item"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="所属单位">
                                    <el-select v-model="editForm.companiesName" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in companies"
                                                :key="item.value"
                                                :label="item"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="部门管理" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                        <el-form-item label="名称" >
                            <el-input v-model="detailForm.title"  style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="detailForm.remark" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="用户类型">
                                    <el-input type="textarea" v-model="detailForm.userType" style="width: 96%" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="所属单位">
                                    <el-input type="textarea" v-model="detailForm.companiesName" style="width: 96%" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>



                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="detailFormVisible = false">取消</el-button>
                    </div>
                </el-dialog>

            </section>
        </el-main>
    </el-container>


</template>
<script>
    import {chineseToUtf} from '../assets/js/utf'

    export default {

        data () {
            return {
                //搜索框
                pagesize:'',
                page:'',
                userType: '',
                status: '',
                companies: '',
                departmentlist: '',
                editId:'',
                searchTitle: '',
                searchValue: '',
                searchType:'',
                searchStatus:'',
                startTime:'',
                endTime:'',
                currentPage: 1,
                pageSize: 5,
                value: '',
                timeValue: '',
                users: '',
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    title: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //编辑界面数据
                editForm:{},
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    title: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //详情界面数据
                detailForm: {},
                detailFormVisible: false,//编辑界面是否显示
                detailLoading: false,
                detailFormRules: {
                    title: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    title: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //新增界面数据
                addForm: {}
            }

        },
        methods: {
            //获取列表
            getMeeting(){
                let option ={
                    page:this.page||1,
                    size:this.size||10,
                    status:1
                };
                this.$servers.getMeetingList(option).then(
                        (res) =>{
                    let s=res.type;
                this.userType=res.type;
                this.status=res.status;
                this.companies=res.companies;
                this.departmentlist=res.paging.list;
                this.total=res.paging.list.length;
                console.log('department',res)
            }).catch((err)=>{
                    console.log('error',err)
            })

            },

            addSubmit(){
                this.$refs.addForm.validate((valid) => {
                    let para = Object.assign({}, this.addForm);

                let option ={

                    remark:para.remark,
                    title:para.title

                };
                console.log('option',option)
                this.$servers.getaddMeeting(option).then(res=>{
                    this.$message(res);

                this.$refs.addForm.resetFields();
                this.addFormVisible = false;
                setTimeout(function(){window.location.reload()},3000)
            })





            });
            },
            handleSizeChange(val){
                this.pagesize=val;
                this.getUserList()
            },
            handleCurrentChange(val){
                this.page=val;
                this.getUserList()
            },
            //提交编辑
            editSubmit: function () {

                this.$refs.editForm.validate((valid) => {
                    if (valid) {

                        let para = Object.assign({}, this.editForm);
                        console.log('para',para)
                        let option ={
                            id:para.id,
                            remark:para.remark,
                            title:para.title,


                        };

                        console.log('option',option)
                        this.$servers.editMeetingList(option).then(res=>{
                            this.$message(res);
                        this.$refs.editForm.resetFields();
                        this.editFormVisible = false;
                        console.log('res',res)
                        //setTimeout(function(){window.location.reload()},3000)
                    }).catch((err)=>{
                            console.log('error',err)
                    })





                    }
                });

            },

            handleDetail(index, row){
                this.detailFormVisible = true;
                this.detailForm = Object.assign({}, row);
                console.log(Object.assign({}, row))
            },
            //显示编辑
            handleEdit: function (id) {
                this.editFormVisible = true;
                this.$servers.editFromMeetingList({id}).then(res=>{
                    console.log('edit',res.category)
                    this.editForm = res.category;
                    }).catch(err=>{
                            console.log('err',err)
                    })
            },
            //显示增加
            handleAdd(){
                this.addFormVisible=true
            },
            handleDel(id){
                console.log(id);
                this.$servers.deleteMeeting({ id })
                        .then(data => {
                    this.$message(data);
                //console.log('11111111',data);
                setTimeout(function(){window.location.reload()},3000)

            }).catch(error => {
                    console.log("error ", error);
            })
            },
            handleSizeChange(it){
                this.pageSize=it||10;
                let obj =this.users1;
                let newArr=[];
                let b;
                let c=it;
                obj.forEach(function (item,index,arr) {
                    var a =Math.floor(index/c)
                    if(b!==a){
                        b=a;
                        newArr[a]=new Array();
                    }
                    newArr[a].push(item);
                })
                let currentPage1=this.currentPage;
                this.users=newArr[currentPage1-1];
                console.log('11111',this.users);
            },
            handleCurrentChange(it){console.log(it);
                let obj=this.users1;
                let b;
                let newArr=[];
                let pageSize =this.pageSize||10;
                obj.forEach(function (item,index,arr) {
                    var a =Math.floor(index/pageSize)
                    if(b!==a){
                        b=a;
                        newArr[a]=new Array();
                    }
                    newArr[a].push(item);
                })
                this.users=newArr[it-1];
            },

            find(){
                let title=this.searchTitle.replace(/(^\s*)|(\s*$)/g, "");
                let utitle=chineseToUtf(title);
                let option ={
                    title:11,
                    page:this.page ||1,
                    size:this.pagesize ||10
                };
                console.log(option)
                this.$servers.queryMeetingList(option).then((res)=>{
                   /* this.departmentlist=res.departments;
                this.total=res.departments.length;*/
                console.log('querry',res)
            })

            },




        },
        mounted () {
            this.getMeeting();



        },
        components: {}
    }
</script>

<style lang="scss">
    .title-des {
        padding:0px 0px 10px 0px;
    &.el-col-24 {
         font-size: .6rem;
         border-bottom:1px solid #000;
         margin-bottom:.24rem;
     }
    }
</style>
