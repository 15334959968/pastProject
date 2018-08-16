<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <!--列表-->
                <!-- <div class="flex-ad"> -->
                <el-row>
                    <el-col :span="24">
                        <el-table :data="questatus" highlight-current-row v-loading="listLoading" :fit="true" style="width: 100%;" max-height="500" >
                            <el-table-column type="selection" min-width="30"> </el-table-column>
                            <el-table-column prop="id" min-width="30"> </el-table-column>
                            <el-table-column prop="title" label="分类名称" min-width="150"> </el-table-column>
                            <el-table-column prop="remark" label="描述" min-width="150"> </el-table-column>
                            <el-table-column prop="createDate" label="创建时间" min-width="150"> </el-table-column>
                            <el-table-column prop="updateDate" label="更新时间" min-width="150"> </el-table-column>
                            <el-table-column prop="status" label="状态" min-width="60"> </el-table-column>
                            <el-table-column label="操作" min-width="300">
                                <template slot-scope="scope">
                                    <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.$index, scope.row)"></el-button>
                                    <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
                                    <el-button type="danger" icon="el-icon-delete" circle @click="handleDel(scope.$index, scope.row)"></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    <!-- </div> -->
                    </el-col>
                </el-row>

                <el-col :span="24" class="">
                <div style="margin-top: 0.3rem;">
                    <div style="float: left"><el-button type="text" size="small" icon="el-icon-plus" @click="handleAdd()" >新增问题</el-button></div>
                    <div style="float: left ;margin-left:0.7rem">
                        <el-pagination
                                @size-change="getListData(1, arguments[0])"
                                @current-change="getListData(arguments[0])"
                                :current-page.sync="currentPage4"
                                :page-sizes="[5, 10, 20]"
                                :page-size="10"
                                background
                                layout="prev, pager, next"
                                :total="pageTotal">
                        </el-pagination>
                        </div>
                </div>
                </el-col>


                <!--增加界面-->
                <el-dialog title="增加问题" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="addForm" label-width="80px" :rules="rules" ref="addForm">
                        <el-form-item label="名称" >
                            <el-input v-model="addForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="addForm.content" style="width: 96%"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>
                
                 <!--编辑界面-->
                <el-dialog title="编辑问题" :visible.sync="editFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="editForm" label-width="80px" :rules="rules" ref="editForm">
                        <el-form-item label="名称" >
                            <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="editForm.remark" style="width: 96%"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="问题详情" :visible.sync="detailFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="detailForm" label-width="80px" :rules="rules" ref="detailForm">
                        <el-form-item label="名称" >
                            <el-input v-model="detailForm.title"  style="width: 96%" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="detailForm.remark" style="width: 96%" :disabled="true"></el-input>
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
          questatus: [],
          total: 0,
          page: 1,
          currentPage4: 1,
          pageTotal:0,
          listLoading: false,
          sels: [],//列表选中列

          editFormVisible: false,//编辑界面是否显示
          editLoading: false,
          rules: {
              title: [
                  { required: true, message: '请输入姓名', trigger: 'blur' }
              ]
          },
          //编辑界面数据
          editForm: {},

          editFormVisible: false,//编辑界面是否显示
          editLoading: false,
          //详情界面数据
          detailForm: {},

          detailFormVisible: false,//编辑界面是否显示
          detailLoading: false,
          addFormVisible: false,//新增界面是否显示
          addLoading: false,
          //新增界面数据
          addForm: {
              title: '',
              content: ''
          }
          }
    },
    methods: {
        // handleCurrentChange(pages){
        // this.getListData(pages);
        // },
        //提交编辑
        editSubmit: function () {
            this.$servers.addSave({title:this.editForm.title,remark:this.editForm.remark,id:1})
            .then(res => {
            console.log(res);
            if (res == '保存成功') {
                this.editFormVisible = false;
                this.getListData();
                this.$message({
                message: '保存成功',
                type: 'success'
            });
            }
        })
        },

        handleDetail(index, row){
            this.detailFormVisible = true;
            this.detailForm = Object.assign({}, row);
            console.log(this.detailForm);
        },
        //显示编辑
        handleEdit: function (index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },
        //显示增加
        handleAdd(){
            this.addFormVisible = true;
        },
        //增加提交
        addSubmit () {
        this.$servers.addSave({title:this.addForm.title,remark:this.addForm.content})
        .then(res => {
            console.log(res);
            if (res == '保存成功') {
                this.addFormVisible = false;
                this.addForm.title = "";
                this.addForm.content = "";
                this.$message({
                message: '保存成功',
                type: 'success'
                });
                this.getListData();
            }
        })
        },
        getListData (page = 1,size = 10) {
            this.$servers.getPageList({
                status:-999,
                page,
                size
            }).then(res => {
                this.questatus = res.paging.list;
                this.pageTotal = res.paging.count;
                for (const [items,values] of Object.entries(this.questatus)) {
                    if (values.status == 1) {
                        values.status = "正常";
                    }
                }
            })
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
        handleDel(id){
            console.log(id);
            this.$servers.deleteLine({ id }).then(del => {
                console.log(del);
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.getListData();
            })
        }

    },
    mounted () {
        this.getListData();
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
