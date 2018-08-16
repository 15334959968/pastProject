<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <!--列表-->
                <!-- <div class="flex-ad"> -->
                                    <el-row>
                    <el-col :span="24">
                        <el-table :data="users" highlight-current-row v-loading="listLoading" :fit="true" style="width: 100%;">
                        <el-table-column type="selection">
                        </el-table-column>
                        <el-table-column type="index">
                        </el-table-column>
                        <el-table-column prop="title" label="计划标题">
                        </el-table-column>
                        <el-table-column prop="type" label="计划类型">
                        </el-table-column>
                         <el-table-column prop="submitter" label="级别">
                        </el-table-column>

                        <el-table-column prop="time" label="计划时间">
                        </el-table-column>
                         <el-table-column prop="time" label="验收时间">
                          </el-table-column>
                        <el-table-column prop="time" label="创建时间">
                        </el-table-column>
                         <el-table-column prop="time" label="更新时间">
                          </el-table-column>
                        <el-table-column prop="personLiable2" label="状态">
                        </el-table-column>
                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"   @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                            <el-button type="text" size="small"   @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button type="text" size="small"   @click="handleDel(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- </div> -->
                </el-col>
</el-row>

                <el-col :span="24" class="">
                <div style="">
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


                <!--增加界面-->
                <el-dialog title="增加" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                        <el-form-item label="计划标题" >
                            <el-input v-model="addForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="计划内容">
                            <el-input type="textarea" v-model="addForm.content" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划类型">
                                    <el-select v-model="addForm.type1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="计划级别">
                                    <el-select v-model="addForm.level1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.level"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划状态">
                                    <el-select v-model="addForm.state1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.state"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="解决时间" >
                                    <el-date-picker
                                            v-model="addForm.settlingTime"
                                            type="date"
                                            placeholder="解决日期" style="width: 90%" >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12" >
                                <el-form-item label="提交人">
                                    <el-select v-model="addForm.submitter" placeholder="选择提交人" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" >
                                <el-form-item label="责任人" >
                                    <el-select v-model="addForm.submitter1" placeholder="选择责任人" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划地块">
                                    <el-select v-model="addForm.ground1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.ground"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="模型图层" >
                                    <el-select v-model="addForm.value" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in addForm.layer"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="上传附件" style="width: 96%">
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
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="模型标注">
                            <el-input v-model="addForm.label" style="width: 96%"></el-input>
                        </el-form-item>






                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>


                <!--编辑界面-->
                <el-dialog title="编辑计划" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="计划标题" >
                            <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="计划内容">
                            <el-input type="textarea" v-model="editForm.content" style="width: 96%"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划类型">
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
                                <el-form-item label="计划级别">
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
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划状态">
                                    <el-select v-model="editForm.state1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in editForm.state"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="解决时间" >
                                    <el-date-picker
                                            v-model="editForm.settlingTime"
                                            type="date"
                                            placeholder="解决日期" style="width: 90%" >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12" >
                                <el-form-item label="提交人">
                                    <el-select v-model="editForm.submitter" placeholder="选择提交人" style="width: 90%">
                                        <el-option
                                                v-for="item in editForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" >
                                <el-form-item label="责任人" >
                                    <el-select v-model="editForm.submitter1" placeholder="选择责任人" style="width: 90%">
                                        <el-option
                                                v-for="item in editForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划地块">
                                    <el-select v-model="editForm.ground1" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in editForm.ground"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="模型图层" >
                                    <el-select v-model="editForm.value" placeholder="请选择" style="width: 90%">
                                        <el-option
                                                v-for="item in editForm.layer"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="上传附件" style="width: 96%">
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
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="模型标注">
                            <el-input v-model="editForm.label" style="width: 96%"></el-input>
                        </el-form-item>






                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="计划详情" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="detailForm" label-width="80px" :rules="detailFormRules" ref="detailForm">
                        <el-form-item label="计划标题" >
                            <el-input v-model="detailForm.title"  style="width: 96%":disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="计划内容">
                            <el-input type="textarea" v-model="detailForm.content" style="width: 96%":disabled="true"></el-input>
                        </el-form-item>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划类型">
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
                                <el-form-item label="计划级别">
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

                        <el-row>
                            <el-col :span="12" >
                                <el-form-item label="提交人">
                                    <el-select v-model="detailForm.submitter" placeholder="选择提交人" style="width: 90%":disabled="true">
                                        <el-option
                                                v-for="item in detailForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" >
                                <el-form-item label="责任人" >
                                    <el-select v-model="detailForm.submitter1" placeholder="选择责任人" style="width: 90%":disabled="true">
                                        <el-option
                                                v-for="item in detailForm.users"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划状态">
                                    <el-select v-model="detailForm.state1" placeholder="请选择" style="width: 90%":disabled="true">
                                        <el-option
                                                v-for="item in detailForm.state"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="解决时间":disabled="true" >
                                    <el-date-picker
                                            v-model="detailForm.settlingTime"
                                            type="date"
                                            placeholder="解决日期" style="width: 90%":disabled="true" >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计划地块">
                                    <el-select v-model="detailForm.ground1" placeholder="请选择" style="width: 90%":disabled="true">
                                        <el-option
                                                v-for="item in detailForm.ground"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="模型图层" >
                                    <el-select v-model="detailForm.value" placeholder="请选择" style="width: 90%":disabled="true">
                                        <el-option
                                                v-for="item in detailForm.layer"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-form-item label="模型标注">
                            <el-input v-model="detailForm.label" style="width: 96%":disabled="true"></el-input>
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
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'},
              {title:'计划',type:'类型1',time:'2018-06-10',submitter:'一级',personLiable:'李四',personLiable1:'李四',personLiable2:'正常'}

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
  }
  .toolbar {
      margin-top: .24rem;
      display: flex;
      justify-content: flex-end;
  }
</style>
