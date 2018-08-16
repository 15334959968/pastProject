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
                          <el-select v-model="typeValue" placeholder="用户类型">
                                v-for="item in userType"
                                :key="item"
                                :label="item"
                                :value="item">
                              </el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item >
                          <el-date-picker v-model="value1" type="date" placeholder="开始时间">
                          </el-date-picker>
                        </el-form-item>
                        <el-form-item >
                          <el-date-picker v-model="value1" type="date" placeholder="结束时间">
                          </el-date-picker>
                        </el-form-item>
                          <el-form-item>
                          <el-select v-model="searchValue" placeholder="正常">
                              <el-option
                                v-for="item in filters.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
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
                    <el-table-column prop="title" label="模板名称" width="120" >
                    </el-table-column>
                    <el-table-column prop="personLiable" label="描述" width="120" >
                    </el-table-column>
                    <el-table-column prop="submitter" label="用户类型" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="time2" label="创建时间" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="time2" label="更新时间" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="personLiable1" label="状态" width="100" >
                    </el-table-column>

                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.$index, scope.row)"></el-button>
                            <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="handleDel(scope.$index, scope.row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>


                <el-col :span="24" class="toolbar">
                <div style="margin-right: 3rem">
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



                  <!--编辑界面-->
                                 <el-dialog title="部门管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                                     <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                                         <el-form-item label="名称" >
                                             <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                                         </el-form-item>
                                         <el-form-item label="描述">
                                             <el-input type="textarea" v-model="editForm.content" style="width: 96%"></el-input>
                                         </el-form-item>
                                         <el-row>
                                             <el-col :span="12">
                                                 <el-form-item label="用户类型">
                                                     <el-select v-model="editForm.type1" placeholder="请选择" style="width: 90%">
                                                         <el-option
                                                                 v-for="item in editForm.options"
                                                                 :key="item.value"
                                                                 :label="item.label"
                                                                 :value="item.value">
                                                         </el-option>
                                                     </el-select>
                                                 </el-form-item>
                                             </el-col>
                                             <el-col :span="12">
                                                 <el-form-item label="所属单位">
                                                     <el-select v-model="editForm.level1" placeholder="请选择" style="width: 90%">
                                                         <el-option
                                                                 v-for="item in editForm.level"
                                                                 :key="item.value"
                                                                 :label="item.label"
                                                                 :value="item.value">
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
                             <el-input v-model="detailForm.title"  style="width: 96%":disabled="true"></el-input>
                         </el-form-item>
                         <el-form-item label="描述">
                             <el-input type="textarea" v-model="detailForm.content" style="width: 96%":disabled="true"></el-input>
                         </el-form-item>
                         <el-row>
                             <el-col :span="12">
                                 <el-form-item label="用户类型">
                                     <el-select v-model="detailForm.type1" placeholder="请选择" style="width: 90%":disabled="true">
                                         <el-option
                                                 v-for="item in detailForm.options"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                 </el-form-item>
                             </el-col>
                             <el-col :span="12">
                                 <el-form-item label="所属单位">
                                     <el-select v-model="detailForm.level1" placeholder="请选择" style="width: 90%":disabled="true">
                                         <el-option
                                                 v-for="item in detailForm.level"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
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

  export default {

    data () {
      return {
          //搜索框
          userType:'',
          departmentlist:'',
          searchTitle:'',
          searchValue:'',
          currentPage:1,
          pageSize:5,
          value:'',
          timeValue: '',
          filters: {
              title: '',
              options: [{
                  value: '选项1',
                  label: '正常',
                  type: '1',
                  typeName: '产权方'
              },{
                  value: '选项2',
                  label: '禁用',
                  type: '2',
                  typeName: '施工方'
              }, {
                  value: '选项3',
                  label: '删除'
              }],
              value: ''
          },
          users:'',
          users1: [ ],
          total: 0,
          page: 1,
          listLoading: false,
          sels: [],//列表选中列

          editFormVisible: false,//编辑界面是否显示
          editLoading: false,
          editFormRules: {
              title: [
                  { required: true, message: '请输入姓名', trigger: 'blur' }
              ]
          },
          //编辑界面数据
          editForm: {
              title: '',
              time: '',
              content: '',
              options: [{
                  value: '选项1',
                  label: '结构问题'
              },{
                  value: '选项2',
                  label: '进度问题'
              }, {
                  value: '选项3',
                  label: '机电问题'
              }],
              peoples: [{
                  value: '选项1',
                  label: '张三'
              },{
                  value: '选项2',
                  label: '李四'
              }, {
                  value: '选项3',
                  label: '王五'
              }],
              builder: [{
                  value: '选项1',
                  label: '施工单位一'
              },{
                  value: '选项2',
                  label: '施工单位二'
              }, {
                  value: '选项3',
                  label: '施工单位三'
              }],

          },

          editFormVisible: false,//编辑界面是否显示
          editLoading: false,
          editFormRules: {
              title: [
                  { required: true, message: '请输入姓名', trigger: 'blur' }
              ]
          },
          //详情界面数据
          detailForm: {
              title: '',
              time: '',
              content: '',
              options: [{
                  value: '选项1',
                  label: '结构问题'
              },{
                  value: '选项2',
                  label: '进度问题'
              }, {
                  value: '选项3',
                  label: '机电问题'
              }],
              peoples: [{
                  value: '选项1',
                  label: '张三'
              },{
                  value: '选项2',
                  label: '李四'
              }, {
                  value: '选项3',
                  label: '王五'
              }],
              builder: [{
                  value: '选项1',
                  label: '施工单位一'
              },{
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
                  { required: true, message: '请输入姓名', trigger: 'blur' }
              ]
          },

          addFormVisible: false,//新增界面是否显示
          addLoading: false,
          addFormRules: {
              title: [
                  { required: true, message: '请输入姓名', trigger: 'blur' }
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
              },{
                  value: '选项2',
                  label: '进度问题'
              }, {
                  value: '选项3',
                  label: '机电问题'
              }],
              peoples: [{
                  value: '选项1',
                  label: '张三'
              },{
                  value: '选项2',
                  label: '李四'
              }, {
                  value: '选项3',
                  label: '王五'
              }],
              builder: [{
                  value: '选项1',
                  label: '施工单位一'
              },{
                  value: '选项2',
                  label: '施工单位二'
              }, {
                  value: '选项3',
                  label: '施工单位三'
              }]

          }}
    },
    methods: {
        //获取部门列表
        getDepartment(){
            let option ={
                page:this.page||1,
                size:this.size||10,
                status:1
            };
            this.$servers.getDepartmentList(option).then(
                    (res) =>{
                            let s=res.type;
                            let s1=JSON.parse(JSON.stringify(s));
                            this.userType=s1;
                            this.departmentlist=res.paging.list;
                            console.log('department',res)
            console.log('wwwwwww',this.userType[this.schema_key].filter(() => true))
            }
            ).catch((err)=>{
                console.log('error',err)
            })

        },
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
        //提交编辑
        editSubmit: function () {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.editLoading = true;
                    let para = Object.assign({}, this.editForm);
                    this.$refs.editForm.resetFields();
                    this.editFormVisible = false;

                });

                }
            });
        },

        handleDetail(index, row){
            this.detailFormVisible = true;
            this.detailForm = Object.assign({}, row);
        },
        //显示编辑
        handleEdit: function (index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },
        //显示增加
        handleAdd(){
            this.addFormVisible=true
        },
        //上传文件
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleDel(it){
            this.$message({
                message: '删除成功',
                type: 'success'
            });
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
        total1(){
            let obj=this.users1;
            this.total=obj.length
        },
        find(){


            let obj1=this.users1;
            let obj=[...obj1];

           let s=this.searchTitle
            var r = obj.filter(function (x) {
                return x.title ==s;
            });
            this.users=r


        }




    },
    mounted () {
        this.getDepartment();
        //this.total1();
      //  this.handleSizeChange(10)


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
