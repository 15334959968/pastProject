<template>
    <el-container>
        <el-main>
            <section> 
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true">
                        <el-form-item>
                            <el-input v-model="jobNumber" placeholder="工号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="searchTitle" placeholder="姓名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="username" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="searchRoles" placeholder="用户类型">
                                <el-option
                                        v-for="item in roles"
                                        :key="item.id"
                                        :label="item.title"
                                        :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="searchCompaniey" placeholder="所属单位">
                                <el-option
                                        v-for="item in companies"
                                        :key="item.id"
                                        :label="item.title"
                                        :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="searchDepartments" placeholder="部门">
                                <el-option
                                        v-for="item in departments"
                                        :key="item.id"
                                        :label="item.title"
                                        :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="searchStatus" placeholder="状态">
                                <el-option
                                        v-for="item in status"
                                        :key="item"
                                        :label="item"
                                        :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <!-- </el-form-item > -->
                        <el-form-item>
                            <el-button type="primary" icon="el-icon-search" @click.native="getFindRoles()">搜索
                            </el-button>
                        </el-form-item>
                        <el-form-item>
                            <div style="float: left">
                                <el-button type="primary" icon="el-icon-plus" @click="handleAdd()">新增</el-button>
                            </div>
                        </el-form-item>
                    </el-form>

                </el-col>
                <!--列表-->
                <el-table :data="searchParamMap" v-loading="listLoading" style="width: 100%;" max-height="600">
                    <el-table-column prop="id" label="ID" width="50">
                    </el-table-column>
                    <el-table-column prop="realname" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="username" label="用户名" width="150">
                    </el-table-column>
                    <el-table-column prop="departmentCode" label="角色" width="120">
                    </el-table-column>
                    <el-table-column prop="companyCode" label="所属单位" width="120">
                    </el-table-column>
                    <el-table-column prop="createDate" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="updateDate" label="更新时间" width="150">
                    </el-table-column>
                    <el-table-column prop="userStatus" label="状态" width="100">
                    </el-table-column>

                    <el-table-column label="操作" min-width="250">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.$index, scope.row)"></el-button>
                            <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="getDeleteRoles(scope.row.id)"></el-button>

                        </template>
                    </el-table-column>
                </el-table>


                <el-col :span="24" class="toolbar">
                    <div style="">
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


                <!--增加界面-->
                <el-dialog title="用户管理" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body>
                    <el-form :model="dialogForm" label-width="80px" :rules="dialogFormRules" ref="dialogForm">
                        <el-form-item label="工号">
                            <el-input v-model="dialogForm.jobNumber" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="dialogForm.realname" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input v-model="dialogForm.username" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="单位">
                                    <el-select v-model="dialogForm.companyCode" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in companies"
                                                :key="item.id"
                                                :label="item.title"
                                                :value="item.title">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="部门">
                                    <el-select v-model="dialogForm.departmentCode" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in dialogForm.roles"
                                                :key="item.id"
                                                :label="item.title"
                                                :value="item.title">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="授权" style="width: 96%">
                            <el-upload style="float: right;"
                                       class="upload-demo"
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       :on-preview="handlePreview"
                                       :on-remove="handleRemove"
                                       :before-remove="beforeRemove"
                                       multiple
                                       :limit="3"
                                       :on-exceed="handleExceed"
                                       :file-list="fileList">
                                <el-button size="small" type="primary">链接打开授权管理</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="FTP用户名">
                            <el-input v-model="dialogForm.email" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="FTP密码">
                            <el-input v-model="dialogForm.password" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="FTP路径">
                            <el-input v-model="dialogForm.label" style="width: 96%"></el-input>
                        </el-form-item>

                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="dialogForm.content" style="width: 96%"></el-input>
                        </el-form-item>

                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="getSaveRoles" :loading="detailLoading">提交</el-button>
                    </div>
                </el-dialog>


                <!--编辑界面-->


                <el-dialog title="用户管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body>
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="工号">
                            <el-input v-model="editForm.jobNumber" style="width: 96%"></el-input>
                        </el-form-item>

                        <el-form-item label="姓名">
                            <el-input v-model="editForm.realname" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input v-model="editForm.username" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="单位">
                                    <el-select v-model="editForm.companyCode" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in companies"
                                                :key="item.id"
                                                :label="item.title"
                                                :value="item.title">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">

                                <el-form-item label="部门">
                                    <el-select v-model="editForm.departmentCode" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in departments"
                                                :key="item.id"
                                                :label="item.title"
                                                :value="item.title">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-form-item label="授权" style="width: 96%">
                            <el-upload style="float: right;"
                                       class="upload-demo"
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       :on-preview="handlePreview"
                                       :on-remove="handleRemove"
                                       :before-remove="beforeRemove"
                                       multiple
                                       :limit="3"
                                       :on-exceed="handleExceed"
                                       :file-list="fileList">
                                <el-button size="small" type="primary">链接打开授权管理</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="FTP用户名">
                            <el-input v-model="editForm.email" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="FTP密码">
                            <el-input v-model="editForm.password" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="FTP路径">
                            <el-input v-model="editForm.label" style="width: 96%"></el-input>
                        </el-form-item>

                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="editForm.content" style="width: 96%"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="getSaveEditRoles" :loading="detailLoading">提交
                        </el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="用户管理" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body>
                    <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                        <el-form-item label="工号">
                            <el-input v-model="detailForm.jobNumber" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>

                        <el-form-item label="姓名" >
                            <el-input v-model="detailForm.realname" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input v-model="detailForm.username" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="单位">
                                    <el-input v-model="detailForm.companyCode" style="width: 96%"
                                              :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">

                                <el-form-item label="部门">
                                    <el-input v-model="detailForm.departmentCode" style="width: 96%"
                                              :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>

                        </el-row>

                        <el-form-item label="授权" style="width: 96%">
                            <el-upload style="float: right;"
                                       class="upload-demo"
                                       action="https://jsonplaceholder.typicode.com/posts/"
                                       :on-preview="handlePreview"
                                       :on-remove="handleRemove"
                                       :before-remove="beforeRemove"
                                       multiple
                                       :limit="3"
                                       :on-exceed="handleExceed"
                                       :file-list="fileList">
                                <el-button size="small" type="primary">链接打开授权管理</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="FTP用户名">
                            <el-input v-model="detailForm.email" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="FTP密码">
                            <el-input v-model="detailForm.password" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="FTP路径">
                            <el-input v-model="detailForm.label" style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="detailForm.content" style="width: 96%"
                                      :disabled="true"></el-input>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </section>
        </el-main>
    </el-container>


</template>
<script>

  export default {
      data () {
          return {
              //公司下拉框
              dialogFormtype: '',
              username: '',
              companies: [],
              searchCompaniey: '',
              //用户类型
              searchRoles: '',
              roles: [],
              //部门
              departments: [],
              searchDepartments: '',
              //status
              status: '',
              searchStatus: '',
              //searchParamMap
              searchParamMap: '',
              //增加状态
              addFormVisible: false,
              //dialog
              dialogForm: {},
              //page
              page: '',
              pagesize: '',
              //editId
              editFormId: '',

              searchTitle: '',
              searchValue: '',
              currentPage: 1,
              pageSize: 5,
              value: '',
              timeValue: '',
              filters: {
                  title: '',
                  options: [{
                      value: '选项1',
                      label: '管理部'
                  }, {
                      value: '选项2',
                      label: '技术部'
                  }, {
                      value: '选项3',
                      label: '市场部'
                  }],
                  value: ''
              },
              users: '',
              // users1:[],
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
              editForm: {},
              //详情界面数据
              detailForm: {
                  title: '111',
                  time: '',
                  content: '',
                  options: [{
                      value: '选项1',
                      label: '结构问题'
                  }, {
                      value: '选项2',
                      label: '进度问题'
                  }, {
                      value: '选项3',
                      label: '机电问题'
                  }],
                  peoples: [{
                      value: '选项1',
                      label: '张三'
                  }, {
                      value: '选项2',
                      label: '李四'
                  }, {
                      value: '选项3',
                      label: '王五'
                  }],
                  builder: [{
                      value: '选项1',
                      label: '施工单位一'
                  }, {
                      value: '选项2',
                      label: '施工单位二'
                  }, {
                      value: '选项3',
                      label: '施工单位三'
                  }],

              },
              detailFormVisible: false,//编辑界面是否显示
              detailLoading: false,
              detailFormRules: {
                  title: [
                      {required: true, message: '请输入姓名', trigger: 'blur'}
                  ]
              },


              addLoading: false,
              addFormRules: {
                  title: [
                      {required: true, message: '请输入姓名', trigger: 'blur'}
                  ]
              },
              //新增界面数据
              addForm: {
                  title: '',
                  time: '',
                  content: '',
                  options: [{
                      value: '选项1',
                      label: '结构问题'
                  }, {
                      value: '选项2',
                      label: '进度问题'
                  }, {
                      value: '选项3',
                      label: '机电问题'
                  }],
                  peoples: [{
                      value: '选项1',
                      label: '张三'
                  }, {
                      value: '选项2',
                      label: '李四'
                  }, {
                      value: '选项3',
                      label: '王五'
                  }],
                  builder: [{
                      value: '选项1',
                      label: '施工单位一'
                  }, {
                      value: '选项2',
                      label: '施工单位二'
                  }, {
                      value: '选项3',
                      label: '施工单位三'
                  }]

              }
          }
      },
      filters:{
          filersStatus:function(val) {
          }
      },
    methods: {
        handleSizeChange(val){
            this.pagesize=val;
            this.getUserList()
        },
        handleCurrentChange(val){
            this.page=val;
            this.getUserList()
        },
        handleDetail(index, row){
            this.detailFormVisible = true;
            this.detailForm = Object.assign({}, row);
        },
        //显示编辑
        handleEdit: function (index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
            this.editFormId =row.id

        },
        //显示增加
        handleAdd(){
            this.addFormVisible=true;
            this.getNewRoles()
        },
        //上传文件
        //获取列表
        getUserList(){
            let option={
                page:this.page ||1,
                size:this.pagesize ||10
            };
            console.log('option',option);
            this.$servers.getRoleList(option).then(data => {
                this.searchParamMap=data.paging.list;
                this.companies=data.companies;
                this.roles=data.roles;
                this.departments=data.departments;
                this.status=data.status;
                this.total=data.paging.count;


        }).catch(error => {
                console.log("error", error);
        })
        },
//获取新增
        getNewRoles(){
            this.$servers.getNewRole()
                    .then(data => {
                this.dialogForm=data;
        }).catch(error => {
                console.log("error", error);
        })
        },
        //保存
        getSaveRoles(){
            this.$refs.dialogForm.validate((valid) => {
                let para = Object.assign({}, this.dialogForm);
                let option = {
                    username:para.username,
                    realname:para.realname,
                    password:para.password,
                    email:para.email,
                    jobNumber:para.jobNumber,
                    departmentCode:para.departmentCode,
                    companyCode:para.companyCode
                };
            this.$servers.saveRoles(option).then(data => {
                this.$message(data);
                this.addFormVisible=false;
                setTimeout(function(){window.location.reload()},3000)
        }).catch(error => {
                console.log("error", error);
        })
        })
        },


        //delete
        getDeleteRoles(id){
            this.$servers.deleteRoles({ id })
                    .then(data => {
                this.$message(data);
            setTimeout(function(){window.location.reload()},3000)

        }).catch(error => {
                console.log("error ", error);
        })
        },
        //query
        getFindRoles(){
            let option={
                page:this.page ||1,
                size:this.pagesize ||10,
                username:this.username,
                searchTitle:this.searchTitle,
            };
            this.$servers.findRoles(option)
                    .then(data => {
                this.searchParamMap=data.paging.list;
                 this.total=data.paging.count;
            console.log("huoqu ", data);

        }).catch(error => {
                console.log("err", error);
        })
        },
        getSaveEditRoles(){

            let Id =this.editFormId;
            this.$refs.editForm.validate((valid) => {
                let para = Object.assign({}, this.editForm);
            let option = {
                id:Id,
                username:para.username,
                realname:para.realname,
                password:para.password,
                email:para.email,
                jobNumber:para.jobNumber,
                departmentCode:para.departmentCode,
                companyCode:para.companyCode
            };
            this.$servers.saveRoles(option).then(data => {
                this.editFormVisible=false;
                this.$message(data);

                setTimeout(function(){window.location.reload()},3000)
        }).catch(error => {
                console.log("error", error);
        })
        })
    }},
    mounted () {
        this.getUserList();

        //this.total1();
        this.handleSizeChange(10)


    },
    components: {}
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
