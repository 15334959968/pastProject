<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <!--工具条-->
                <xa-search :list="searchList"  :addtitle="'新增进度计划'" @search="getProblemList" @plus="handleAdd"></xa-search>
                  <el-row>
                    <el-col :span="24">
                        <el-table :data="users" highlight-current-row v-loading="listLoading" :fit="true" style="width: 100%;" max-height="580">
                            <el-table-column  min-width="120" label="进度文件">
                                <template slot-scope="scope">
                                    <img :src="scope.row.personLiable1" style="height: 75px;width: 118px;"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ismoni" label="模拟计划" min-width="120">
                                <template slot-scope="scope">
                                    {{scope.row.ismoni?'是':"否"}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="type" label="更新地块" min-width="100"> </el-table-column>
                            <el-table-column prop="submitter" label="创建人" min-width="100"> </el-table-column>
                            <el-table-column prop="time" label="创建时间" min-width="100"> </el-table-column>
                            <el-table-column prop="personLiable"  min-width="130"label="进度描述"> </el-table-column>
                            <el-table-column prop="personLiable2" min-width="100" label="状态"> </el-table-column>
                            <el-table-column label="操作" min-width="300">
                                <template slot-scope="scope">
                                    <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.$index, scope.row)"></el-button>
                                    <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
                                    <el-button type="primary" icon="el-icon-edit-outline" circle @click="handleNew(scope.$index, scope.row)"></el-button>
                                    <el-button type="danger" icon="el-icon-delete" circle @click="deleteProblem(scope.$index, scope.row)"></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
              </el-row>

                <div class="el-pagination-model">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage4"
                            :page-sizes="[5, 10, 20]"
                            :page-size="10"
                            background
                            layout="prev, pager, next"
                            :total=10>
                    </el-pagination>
                </div>


                <!--编辑界面-->
                    <el-dialog title="进度进度管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body>
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="进度名称" prop="title">
                            <el-input v-model="addForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="进度内容">
                            <el-input type="textarea" v-model="addForm.content"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-form-item label="进度状态" :span="12">
                            <el-select v-model="value" placeholder="进度状态">
                                <el-option
                                        v-for="item in addForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="进度时间" :span="12">
                            <el-date-picker type="date" placeholder="" v-model="addForm.time"></el-date-picker>
                        </el-form-item>
                        </el-row>
                        <el-form-item label="附件" prop="title">
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
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="提交人">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in addForm.peoples"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="责任人">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in addForm.peoples"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="优先级">
                            <el-select v-model="value" placeholder="--优先级--">
                                <el-option
                                        v-for="item in addForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click.native="editFormVisible = false">保存</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="addLoading">更新状态</el-button>
                                                <el-button @click.native="editFormVisible = false">返回</el-button>
                    </div>
                </el-dialog>
                <!--更新界面-->
                <el-dialog title="进度进度管理" :visible.sync="newFormVisible" :before-close="handleClose" append-to-body>
                    <el-form :model="newForm" label-width="80px" :rules="addFormRules" ref="newForm">
                        <el-form-item label="进度名称" prop="title">
                            <el-input v-model="addForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="进度内容">
                            <el-input type="textarea" v-model="addForm.content"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-form-item label="进度状态" :span="12">
                            <el-select v-model="value" placeholder="进度状态">
                                <el-option
                                        v-for="item in addForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="进度时间" :span="12">
                            <el-date-picker type="date" placeholder="" v-model="addForm.time"></el-date-picker>
                        </el-form-item>
                        </el-row>
                        <el-form-item label="附件" prop="title">
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
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="提交人">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in addForm.peoples"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="责任人">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in addForm.peoples"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="优先级">
                            <el-select v-model="value" placeholder="--优先级--">
                                <el-option
                                        v-for="item in addForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="进度汇总模拟" label-width="2rem">
                            <el-radio v-model="radio" label="1">是</el-radio>
                        </el-form-item>

                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="newFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="进度进度管理" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                        <el-form-item label="进度名称" >
                            <el-input v-model="detailForm.title"  style="width: 96%;" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="进度内容">
                            <el-input type="textarea" v-model="detailForm.content" style="width: 96%;" :disabled="true"></el-input>
                        </el-form-item>
                            <el-col :span="12">
                                <el-form-item label="进度状态">
                                    <el-select v-model="detailForm.type1" placeholder="进度状态" style="width: 90%;" :disabled="true">
                                        <el-option
                                                v-for="item in detailForm.options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="进度时间">
                                    <el-date-picker
                                            v-model="detailForm.settlingTime"
                                            type="date"
                                            placeholder="" style="width: 90%" :disabled="true">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="附件" prop="title">
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
                                        <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="提交人">
                                    <el-select v-model="detailForm.submitter" placeholder="选择提交人" style="width: 90%;" :disabled="true">
                                        <el-option
                                                v-for="item in detailForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-row>
                            <el-col :span="12">
                                <el-form-item label="责任人" >
                                    <el-select v-model="detailForm.submitter1" placeholder="选择责任人" style="width: 90%;" :disabled="true">
                                        <el-option
                                                v-for="item in detailForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        <el-col :span="12">
                                <el-form-item label="优先级">
                                    <el-select v-model="detailForm.type1" placeholder="--优先级--" style="width: 90%;" :disabled="true">
                                        <el-option
                                                v-for="item in detailForm.options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="进度汇总模拟" label-width="2rem">
                            <el-radio v-model="radio" :label="1">是</el-radio>

                        </el-form-item>






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
          //新增界面数据
          searchList: {
              name: {
                  value: '',
                  placeholder: '进度名称'
              },
              type: {
                  value: '',
                  inputType: 'select',
                  placeholder: '进度类型',
                  option: []
              },
              level: {
                  value: '',
                  inputType: 'select',
                  placeholder: '处理进程',
                  option: []
              },
              status: {
                  value: '',
                  inputType: 'select',
                  placeholder: '进度状态',
                  option: []
              },
              submitter: {
                  value: '',
                  placeholder: '创建人',
                  inputType: 'select',
                  option:[]
              },
              responsible: {
                  value: '',
                  placeholder: '责任人',
                  inputType: 'select',
                  option: []
              },
              date: {
                  value: [],
                  inputType: 'date',
                  type: 'daterange'
              }
          },
          value:'',
          timeValue: '',
          radio: 1,
          filters: {
              title: '',
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
              value: ''
          },
          users: [
              {ismodel:true,title:'2018年07月09日进度更新',type:'G地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'已验收'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'G地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'已验收'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'N地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'已验收'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'F地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'已验收'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'K地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'审批中'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'E地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'审批中'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'G地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'审批中'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'E地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'审批中'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'G地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'审批中'},
              {ismodel:true,title:'2018年07月09日进度更新',type:'F地块',time:'2018-06-10',submitter:'西岸管理员',personLiable:'每日进度更新',personLiable1:'http://img95.699pic.com/photo/00003/0102.jpg_wh300.jpg',personLiable2:'审批中'}

          ],
          total: 0,
          page: 1,
          listLoading: false,
          sels: [],//列表选中列

          editFormVisible: false,//编辑界面是否显示
          newFormVisible: false,
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

          detailFormVisible: false,//新增界面是否显示
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
        getProblemList(){

        },
        handleSizeChange(){

        },
        handleCurrentChange(){

        },
        handleAdd(){
          this.$router.push("/newscene")
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
        handleNew (index, row) {
            this.newFormVisible = true;
            this.newForm = Object.assign({}, row);
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
        }

    },
    mounted () {
    },
    components: {}
  }
</script>

<style lang="scss">
  .all-size {
      width: 82%;
    .title-des {
      padding:0px 0px 10px 0px;
      &.el-col-24 {
        font-size: .6rem;
        border-bottom:1px solid #000;
        margin-bottom:.24rem;
      }
  }
  .loc-ud {
      margin: .24rem 0;

  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
      width: 88%;
  }
  .el-input {
      width: 88%;
  }

  }
  .toolbar {
      margin-top: .24rem;
      display: flex;
      justify-content: flex-end;
  }
</style>

