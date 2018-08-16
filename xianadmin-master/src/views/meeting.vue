<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <!--列表-->
                <!-- <div class="flex-ad"> -->
              <el-row class="loc-ud">
                <el-col :span="3"><el-input v-model="input" placeholder="会议名称"></el-input></el-col>
                <el-col :span="2">
                  <el-select v-model="value" placeholder="会议类型">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="2">
                  <el-select v-model="value" placeholder="问题级别">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                  </el-select>
                </el-col>
                <el-col :span="2">
                  <el-select v-model="value" placeholder="状态">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                  </el-select>
                </el-col>
                <el-col :span="2"><el-input v-model="input" placeholder="发起人"></el-input></el-col>
                <el-col :span="2"><el-input v-model="input" placeholder="参会人"></el-input></el-col>
                <el-col :span="3">
                    <el-date-picker type="date" placeholder="开始时间" v-model="editForm.time"></el-date-picker>
                </el-col>
                <el-col :span="3">
                    <el-date-picker type="date" placeholder="结束时间" v-model="editForm.time"></el-date-picker>
                </el-col>
                <el-col :span="3">
                    <el-date-picker type="date" placeholder="解决时间" v-model="editForm.time"></el-date-picker>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary">查询</el-button>
                </el-col>
              </el-row>
                  <el-row>
                    <el-col :span="24">
                        <el-table :data="users" highlight-current-row v-loading="listLoading" :fit="true" style="width: 100%;" max-height="650">
                        <el-table-column type="selection">
                        </el-table-column>
                        <el-table-column type="index">
                        </el-table-column>
                          <el-table-column prop="title" label="会议名称">
                          </el-table-column>
                          <el-table-column prop="type" label="会议类型">
                          </el-table-column>
                          <el-table-column prop="submitter" label="发起人">
                          </el-table-column>
                          <el-table-column prop="personLiable1" label="会议模型">
                           </el-table-column>
                          <el-table-column prop="personLiable" label="会议文件">
                          </el-table-column>
                          <el-table-column prop="personLiable1" label="纪要文件">
                          </el-table-column>
                          <el-table-column prop="time" label="会议时间">
                          </el-table-column>
                          <el-table-column prop="time" label="创建时间">
                          </el-table-column>
                          <el-table-column prop="time" label="更新时间">
                          </el-table-column>
                          <el-table-column prop="personLiable2" label="状态">
                                                </el-table-column>
                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"   @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                            <el-button type="text" size="small"   @click="handleEdit(scope.$index, scope.row)">编辑内容</el-button>
                            <el-button type="text" size="small"   @click="handleDel(scope.$index, scope.row)">删除内容</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- </div> -->
                </el-col>
              </el-row>

                <el-col :span="24" class="toolbar">
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


                <!--编辑界面-->
                <el-dialog title="提交会议" :visible.sync="editFormVisible" :before-close="handleClose" :close-on-click-modal="false" append-to-body>
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="会议名称" prop="title">
                            <el-input v-model="editForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="会议时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.time"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="会议地点" prop="title">
                            <el-input v-model="editForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="会议类型">
                            <el-select v-model="editForm.type" placeholder="请选择">
                                <el-option
                                        v-for="item in editForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="模板附件" prop="title">
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
                                <el-button size="small" type="primary">点击下载</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="会议文件" prop="title">
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
                                <el-button size="small" type="primary">点击下载</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="纪要文件" prop="title">
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
                                <el-button size="small" type="primary">点击下载</el-button>
                            </el-upload>
                        </el-form-item>
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
                                <el-button size="small" type="primary">上传文件</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="问题描述">
                            <el-select v-model="editForm.type" placeholder="问题类型">
                                <el-option
                                        v-for="item in editForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="描述" prop="title">
                            <el-input type="textarea" v-model="editForm.content"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                 <!--详情界面-->
                 <el-dialog title="增加问题" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                     <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                                                <el-form-item label="会议名称" prop="title">
                            <el-input v-model="editForm.title" auto-complete="off" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="会议时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.time" :disabled="true"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="会议地点" prop="title">
                            <el-input v-model="editForm.title" auto-complete="off" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="会议类型">
                            <el-select v-model="editForm.type" placeholder="请选择" :disabled="true">
                                <el-option
                                        v-for="item in editForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="模板附件" prop="title">
                            <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
                                    :disabled="true">
                                <el-button size="small" type="primary" :disabled="true">点击下载</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="会议文件" prop="title">
                            <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
                                    :disabled="true">
                                <el-button size="small" type="primary" :disabled="true">点击下载</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="纪要文件" prop="title">
                            <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
                                    :disabled="true"
                                    >
                                <el-button size="small" type="primary" :disabled="true">点击下载</el-button>
                            </el-upload>
                        </el-form-item>
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
                                    :file-list="fileList"
                                    :disabled="true"> 
                                <el-button size="small" type="primary" :disabled="true">上传文件</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="问题描述">
                            <el-select v-model="editForm.type" placeholder="问题类型" :disabled="true">
                                <el-option
                                        v-for="item in editForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="描述" prop="title">
                            <el-input type="textarea" v-model="editForm.content" :disabled="true"></el-input>
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
          value:'',
          timeValue: '',
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
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'完成'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'取消'},
              {title:'会议名称',type:'周会',time:'2018-06-10',submitter:'刘明',personLiable:'',personLiable1:'',personLiable2:'取消'}

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
