<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <!--工具条-->
                <xa-search :list="searchList" @search="handleSizeChange" @plus="AddForms"></xa-search>
                <el-row>
                    <el-col :span="24">
                        <el-table :data="users" highlight-current-row v-loading="listLoading" :fit="true" style="width: 100%;">
                            <el-table-column type="selection"> </el-table-column>
                            <el-table-column type="index"> </el-table-column>
                            <el-table-column prop="title" label="状态名称"> </el-table-column>
                            <el-table-column prop="type" label="描述"> </el-table-column>
                            <el-table-column prop="time" label="创建时间"> </el-table-column>
                            <el-table-column prop="time" label="更新时间"> </el-table-column>
                            <el-table-column prop="personLiable2" label="状态"> </el-table-column>
                            <el-table-column label="操作" min-width="300">
                                <template slot-scope="scope">
                                    <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.$index, scope.row)"></el-button>
                                    <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
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
                <!-- 编辑页面 -->
                <el-dialog title="编辑问题" :visible.sync="editFormVisible" :before-close="handleClose" :close-on-click-modal="false" append-to-body>
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--新增界面-->
                <el-dialog title="进度状态管理" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                    <el-form-item label="名称" >
                    <el-input v-model="detailForm.title"  style="width: 96%;"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                    <el-input type="textarea" v-model="detailForm.content" style="width: 96%;"></el-input>
                    </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--编辑界面-->
                <el-dialog title="进度状态管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="名称" >
                            <el-input v-model="detailForm.title"  style="width: 96%;"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="detailForm.content" style="width: 96%;"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="进度状态管理" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                        <el-form-item label="名称" >
                            <el-input v-model="detailForm.title"  style="width: 96%;" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="detailForm.content" style="width: 96%;" :disabled="true"></el-input>
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
          },
          value:'',
          timeValue: '',
          addLoading: false,
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
              {title:'完成',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'迟滞',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'迟滞',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'迟滞',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'迟滞',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'迟滞',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'迟滞',type:'',time:'2018-06-10',submitter:'张三',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},

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
        handleSizeChange(){

        },
        AddForms () {
            this.addFormVisible = true;
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
        addSubmit(){
            this.$refs.addForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                    let para = Object.assign({}, this.addForm);
                    this.$refs.addForm.resetFields();
                    this.addFormVisible = false;
                    })
                }
            })
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
            this.addFormVisible = true
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
  }
  .toolbar {
      margin-top: .24rem;
      display: inline-flex;
      justify-content: flex-end;
  }
</style>
