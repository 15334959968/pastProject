<template>
    <el-container>
        <el-main>
            <section>
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true" :model="filters">
                        <el-form-item >
                            <el-input v-model="filters.title" placeholder="名称" ></el-input>

                        </el-form-item>

                        <el-form-item  >
                            <div class="timePick">
                                <el-date-picker
                                        v-model="timeValue"
                                        type="daterange"
                                        align="right"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始时间"
                                        end-placeholder="结束时间"
                                        :picker-options="pickerOptions2">
                                </el-date-picker>
                            </div>


                        </el-form-item >
                        <el-form-item >
                            <el-button type="primary" icon="el-icon-search">查询</el-button>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" icon="el-icon-plus" @click="handleAdd()">新增</el-button>
                        </el-form-item>
                    </el-form>

                </el-col>

                <!--列表-->
                <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;" max-height="600">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column type="index" width="50">
                    </el-table-column>
                    <el-table-column prop="title" label="施工方名称" width="150" >
                    </el-table-column>
                    <el-table-column prop="type" label="描述" width="180" >
                    </el-table-column>
                    <el-table-column prop="time" label="创建时间" width="220" >
                    </el-table-column>
                    <el-table-column prop="time1" label="更新时间" width="220" >
                    </el-table-column>
                    <el-table-column prop="submitter" label="状态" width="120" >
                    </el-table-column>
                    <!-- <el-table-column prop="personLiable" label="第一责任人" width="120" >
                    </el-table-column>
                    <el-table-column prop="personLiable1" label="第二责任人" width="100" >
                    </el-table-column>
                    <el-table-column prop="personLiable2" label="处理情况" width="100" >
                    </el-table-column> -->
                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"   @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                            <el-button type="text" size="small"   @click="handleEdit(scope.$index, scope.row)">编辑内容</el-button>
                            <el-button type="text" size="small"   @click="handleDel(scope.$index, scope.row)">删除内容</el-button>
                        </template>
                    </el-table-column>
                </el-table>


                <el-col :span="24" class="toolbar">
                <div style="margin-right: 3rem">
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
                                 <el-dialog title="施工方管理" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                                     <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                                         <el-form-item label="问题标题" >
                                             <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                                         </el-form-item>
                                         <el-form-item label="颜色">
                                             <color-picker></color-picker>
                                         </el-form-item>

                                         <el-form-item label="问题内容">
                                             <el-input type="textarea" v-model="editForm.content" style="width: 96%"></el-input>
                                         </el-form-item>


                                     </el-form>
                                     <div slot="footer" class="dialog-footer">
                                         <el-button @click.native="editFormVisible = false">取消</el-button>
                                         <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                                     </div>
                                 </el-dialog>

                 <!--详情界面-->
                 <el-dialog title="施工方管理" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                     <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                         <el-form-item label="名称" >
                             <el-input v-model="detailForm.title"  style="width: 96%":disabled="true"></el-input>
                         </el-form-item>
                         <el-form-item label="颜色">
                                <color-picker></color-picker>
                         </el-form-item>
                         <el-form-item label="描述">
                             <el-input type="textarea" v-model="detailForm.content" style="width: 96%":disabled="true"></el-input>
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
import colorPicker from '../components/colorPicker'

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
          users:Array(20).fill({
              title:'上海设计院',
              type:'机电问题',
              time:'2018-06-10 下午:3:00',
              time1:'2018-06-10 下午:3:00',
              submitter:'正常',
              personLiable:'李四'},
          ),
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
        handleSizeChange () {

        },
        handleCurrentChange () {

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
    components: {
    'colorPicker':colorPicker
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
