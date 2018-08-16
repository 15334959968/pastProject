<template>
    <el-container>
        <el-main>
            <section>
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true" :model="filters">
                        <el-form-item >
                            <el-input v-model="filters.title" placeholder="查找" ></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in filters.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item  >
                            <div class="timePick">
                                <el-date-picker
                                        v-model="timeValue"
                                        type="daterange"
                                        align="right"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :picker-options="pickerOptions2">
                                </el-date-picker>
                            </div>


                        </el-form-item >
                        <el-form-item >
                            <el-button type="primary" icon="el-icon-search">搜索问题</el-button>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" icon="el-icon-plus" @click="handleAdd()">新增</el-button>
                        </el-form-item>
                    </el-form>

                </el-col>

                <!--列表-->
                <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column type="index" width="50">
                    </el-table-column>
                    <el-table-column prop="title" label="协作问题描述" width="350">
                    </el-table-column>
                    <el-table-column prop="type" label="协作情况" width="180" >
                    </el-table-column>
                    <el-table-column prop="submitter" label="协作进度人" width="120" >
                    </el-table-column>
                    <el-table-column prop="time" label="提交时间" width="220" >
                    </el-table-column>
                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="primary"  @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                            <el-button type="primary"  @click="handleEdit(scope.$index, scope.row)">编辑内容</el-button>
                            <el-button type="danger"  @click="handleDel(scope.$index, scope.row)">删除内容</el-button>
                        </template>
                    </el-table-column>
                </el-table>


                <el-col :span="24" class="toolbar">
                <div style="">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[10, 20,50]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="60">
                    </el-pagination>
                </div>
                </el-col>


                <!--编辑界面-->
                <el-dialog title="编辑问题" :visible.sync="editFormVisible" :before-close="handleClose" :close-on-click-modal="false" append-to-body>
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="标题" prop="title">
                            <el-input v-model="editForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="内容" prop="title">
                            <el-input type="textarea" v-model="editForm.content"></el-input>
                        </el-form-item>
                        <el-form-item label="问题类型">
                            <el-select v-model="editForm.type" placeholder="请选择">
                                <el-option
                                        v-for="item in editForm.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="责任人">
                            <el-select v-model="editForm.personLiable" placeholder="请选择">
                                <el-option
                                        v-for="item in editForm.peoples"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="施工单位">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in editForm.builder"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="提交时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.time"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="上传资料" prop="title">
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
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--增加界面-->
                <el-dialog title="增加问题" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body>
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                        <el-form-item label="施工地点" prop="title">
                            <el-input v-model="addForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="内容">
                            <el-input type="textarea" v-model="addForm.content"></el-input>
                        </el-form-item> -->
                        <el-form-item label="安全标准">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in addForm.options"
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
                        <el-form-item label="施工单位">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in addForm.builder"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="提交时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.time"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="上传资料" prop="title">
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
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="详情" :visible.sync="detailFormVisible" :before-close="handleClose" :close-on-click-modal="false" append-to-body>
                    <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                        <el-form-item label="标题" >
                            <el-input v-model="detailForm.title" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="内容">
                            <el-input type="textarea" v-model="detailForm.content" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="问题类型">
                            <el-input v-model="detailForm.type" :disabled="true">
                            </el-input>.
                        </el-form-item>
                        <el-form-item label="责任人">
                            <el-input v-model="detailForm.personLiable"  :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="施工单位">
                            <el-input v-model="value" :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="提交时间">
                            <el-input  type="date"  v-model="detailForm.time" :disabled="true"></el-input >
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
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'},
              {title:'问题',type:'机电问题',level:'紧急',time:'2018-06-15 下午3:00',submitter:'黄涛',submitter1:'刘明',personLiable:'李四'}

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
        }

    },
    mounted () {
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
