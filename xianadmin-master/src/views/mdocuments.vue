<template>
    <el-container>
        <el-main>
            <section>
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true" >
                        <el-form-item >
                            <el-input v-model="searchTitle" placeholder="文档名称" ></el-input>
                        </el-form-item>
                        <el-form-item >
                             <el-input v-model="searchTitle" placeholder="日会" ></el-input>
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
                <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;"  max-height="600">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column type="index"  width="40">
                    </el-table-column>
                    <el-table-column prop="title" label="模板名称" width="120" >
                    </el-table-column>
                    <el-table-column prop="type" label="版本" width="150" >
                    </el-table-column>
                    <el-table-column prop="personLiable" label="描述" width="120" >
                    </el-table-column>
                    <el-table-column prop="submitter" label="会议类型" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="time2" label="创建时间" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="time2" label="更新时间" width="150" sortable>
                    </el-table-column>
                    <el-table-column prop="personLiable1" label="状态" width="100" >
                    </el-table-column>

                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"  @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                            <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>


                <el-row>
                <el-col :span="4">
                    <el-button type="text" size="small" icon="el-icon-plus" @click="AddDoc()" >新建</el-button>
                </el-col>
                <el-col :span="20" class="toolbar">
                <div style="margin-right: 3rem">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[10, 20, 50]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="60">
                    </el-pagination>
                </div>
                </el-col>
                </el-row>





            </section>
        </el-main>

                  <!--新增界面-->
                 <el-dialog title="会议文档模板管理" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body >
                     <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                         <el-form-item label="会议模板文件名" label-width="2.3rem">
                             <el-input v-model="editForm.title"  style="width: 96%;"></el-input>
                         </el-form-item>
                         <el-form-item label="版本"  label-width="2.3rem">
                             <el-input v-model="editForm.title"  style="width:96%;"></el-input>
                         </el-form-item>
                         <el-form-item label="描述"  label-width="2.3rem">
                             <el-input type="textarea" v-model="editForm.content" style="width: 96%;"></el-input>
                         </el-form-item>
                                 <el-form-item label="会议类型"  label-width="2.3rem">
                                     <el-select v-model="editForm.type1" placeholder="--会议类型--" style="width: 96%;">
                                         <el-option
                                                 v-for="item in editForm.options"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                 </el-form-item>
                                <el-form-item label="附件" prop="title" label-width="2.3rem">
                                    <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="3"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList">
                                        <el-button size="small" type="primary">上传文件</el-button>
                                    </el-upload>
                                </el-form-item>
                                <h1 class="fonts-size">解析字段</h1>
                                <el-row>
                                     <el-form-item label="行" label-width="2.3rem">
                                    <el-col :span="2"><el-input v-model="input" placeholder=""></el-input></el-col>
                                    <el-col :span="1" style="text-align:center;">行</el-col>
                                    <el-col :span="3"><el-input v-model="input" placeholder=""></el-input></el-col>
                                    </el-form-item>
                                </el-row>




                     </el-form>
                     <div slot="footer" class="dialog-footer">
                         <el-button @click.native="addFormVisible = false">返回</el-button>
                          <el-button @click.native="saves()">保存</el-button>
                     </div>
                 </el-dialog>
                  <!--编辑界面-->
                 <el-dialog title="会议文档模板管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                     <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                         <el-form-item label="会议模板文件名" label-width="2.3rem">
                             <el-input v-model="editForm.title"  style="width: 96%;"></el-input>
                         </el-form-item>
                         <el-form-item label="版本"  label-width="2.3rem">
                             <el-input v-model="editForm.title"  style="width:96%;"></el-input>
                         </el-form-item>
                         <el-form-item label="描述"  label-width="2.3rem">
                             <el-input type="textarea" v-model="editForm.content" style="width: 96%;"></el-input>
                         </el-form-item>
                                 <el-form-item label="会议类型"  label-width="2.3rem">
                                     <el-select v-model="editForm.type1" placeholder="--会议类型--" style="width: 96%;">
                                         <el-option
                                                 v-for="item in editForm.options"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                 </el-form-item>
                                <el-form-item label="附件" prop="title" label-width="2.3rem">
                                    <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="3"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList">
                                        <el-button size="small" type="primary">上传文件</el-button>
                                    </el-upload>
                                </el-form-item>
                                <h1 class="fonts-size">解析字段</h1>
                                <el-row>
                                     <el-form-item label="行" label-width="2.3rem">
                                    <el-col :span="2"><el-input v-model="input" placeholder=""></el-input></el-col>
                                    <el-col :span="1" style="text-align:center;">行</el-col>
                                    <el-col :span="3"><el-input v-model="input" placeholder=""></el-input></el-col>
                                    </el-form-item>
                                </el-row>




                     </el-form>
                     <div slot="footer" class="dialog-footer">
                         <el-button @click.native="editFormVisible = false">返回</el-button>
                          <el-button @click.native="savesEdit()">保存</el-button>
                     </div>
                 </el-dialog>
                 <!--详情界面-->
                 <el-dialog title="会议文档模板管理" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                     <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                         <el-form-item label="会议模板文件名" label-width="2.3rem">
                             <el-input v-model="detailForm.title"  style="width: 96%;"></el-input>
                         </el-form-item>
                         <el-form-item label="版本"  label-width="2.3rem">
                             <el-input v-model="detailForm.title"  style="width:96%;" :disabled="true"></el-input>
                         </el-form-item>
                         <el-form-item label="描述"  label-width="2.3rem">
                             <el-input type="textarea" v-model="detailForm.content" style="width: 96%;" :disabled="true"></el-input>
                         </el-form-item>
                                 <el-form-item label="会议类型"  label-width="2.3rem">
                                     <el-select v-model="detailForm.type1" placeholder="--会议类型--" style="width: 96%;" :disabled="true">
                                         <el-option
                                                 v-for="item in detailForm.options"
                                                 :key="item.value"
                                                 :label="item.label"
                                                 :value="item.value">
                                         </el-option>
                                     </el-select>
                                 </el-form-item>
                                <el-form-item label="附件" prop="title" label-width="2.3rem">
                                    <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="3"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList">
                                        <el-button size="small" type="primary">上传文件</el-button>
                                    </el-upload>
                                </el-form-item>
                                <h1 class="fonts-size">解析字段</h1>
                                <el-row>
                                     <el-form-item label="行" label-width="2.3rem">
                                    <el-col :span="2"><el-input v-model="input" placeholder=""></el-input></el-col>
                                    <el-col :span="1" style="text-align:center;">行</el-col>
                                    <el-col :span="3"><el-input v-model="input" placeholder=""></el-input></el-col>
                                    </el-form-item>
                                </el-row>




                     </el-form>
                     <div slot="footer" class="dialog-footer">
                         <el-button @click.native="detailFormVisible = false">返回</el-button>
                          <!-- <el-button @click.native="saves()">保存</el-button> -->
                     </div>
                 </el-dialog>
    </el-container>



</template>
<script>

  export default {
    data () {
      return {
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
                  label: '正常'
              },{
                  value: '选项2',
                  label: '禁用'
              }, {
                  value: '选项3',
                  label: '删除'
              }],
              value: ''
          },
          users:'',
          users1: [
              {title:'日会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'日会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'},
              {title:'周会议模板',type:'20180619_01',time1:'2018-06-10',time2:'2018-06-10',submitter:'周会',personLiable:'',personLiable1:'正常'}


          ],
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
                  { required: false, message: '请输入姓名', trigger: 'blur' }
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
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
        //新增页面保存
        saves () {
            this.$refs.addForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                    let para = Object.assign({}, this.addForm);
                    this.$refs.addForm.resetFields();
                    this.addFormVisible = false;

                });

                }
            });
        },
        //编辑页面保存
        savesEdit () {
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
        handleEdit(index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },
        //显示增加
        AddDoc(){
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
        this.total1();
        this.handleSizeChange(10)


    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .title-des {
      padding:0px 0px 10px 0px;
      &.el-col-24 {
        font-size: .6rem;
        border-bottom:1px solid #000;
        margin-bottom:.24rem;
      }
  }
    .fonts-size {
        font-size: .3rem;
        display: flex;
        justify-content: center;
    }

  .toolbar {
      margin-top: .24rem;
      display: inline-flex;
      justify-content: flex-end;
  }
</style>
