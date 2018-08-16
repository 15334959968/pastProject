<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <el-row>
                    <el-col :span="24">
                        <el-table :data="statueData" highlight-current-row v-loading="listLoading"  style="width: 100%;"  max-height="500">
                            <el-table-column type="selection" min-width="30"> </el-table-column>
                            <el-table-column type="index" min-width="30"> </el-table-column>
                            <el-table-column prop="title" label="问题状态名称" min-width="160"> </el-table-column>
                            <el-table-column prop="remark" label="描述" min-width="100"> </el-table-column>
                            <el-table-column prop="createDate" label="创建时间" min-width="120"> </el-table-column>
                            <el-table-column prop="updateDate" label="更新时间" min-width="70" > </el-table-column>
                            <el-table-column prop="status" label="状态" min-width="50"> </el-table-column>
                            <el-table-column label="操作" min-width="300">
                                <template slot-scope="scope">
                                    <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.$index, scope.row)"></el-button>
                                    <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
                                    <el-button type="danger" icon="el-icon-delete" circle @click="handleDel(scope.$index, scope.row)"></el-button>
                                </template>

                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>

                <div class="el-pagination-model">
                    <div style="float: left">
                        <el-button type="text" size="small" icon="el-icon-plus" @click="handleAdd()" >新增问题</el-button>
                    </div>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage4"
                            :page-sizes="[5, 10, 20]"
                            :page-size="10"
                            background
                            layout="prev, pager, next"
                            :total="60">
                    </el-pagination>
                </div>



                <!--增加界面-->
                <el-dialog title="增加问题" :visible.sync="addFormVisible" :before-close="handleClose" append-to-body >
                    <el-form :model="addForm" label-width="80px" :rules="rules" ref="addForm">
                        <el-form-item label="名称" >
                            <el-input v-model="addForm.title"  style="width: 96%"></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea" v-model="addForm.remark" style="width: 96%"></el-input>
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
                        <el-button type="primary" @click.native="statusEditSubmit" :loading="editLoading">提交</el-button>
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
                statueData: [],
                total: 0,
                page: 1,
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
                    time: '',
                    content: '',
                }
        }
        },
        methods: {
            handleSizeChange(){

            },
            handleCurrentChange(){

            },
            statusListData(page = 1,size = 10) {
            this.$servers.statusPageList({
                status:-999,
                page,
                size
            }).then(res => {
                this.statueData = res.paging.list;
                this.pageTotals = res.paging.count;
                for (const [items,values] of Object.entries(this.statueData)) {
                    if (values.status == 1) {
                        values.status = "正常";
                    }
                }
            })
            },
            addSubmit () {
                this.$servers.statusSave({title:this.addForm.title,remark:this.addForm.remark}).then(data => {
                    console.log(data);
                    this.addFormVisible = false;
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    });
                    this.addForm.title = "";
                    this.addForm.remark = "";
                    this.statusListData();
                })
            },
            //提交编辑
            statusEditSubmit: function () {
                this.$servers.statusSave({title:this.editForm.title,remark:this.editForm.remark,id:1}).then(save => {
                    if (save == '保存成功') {
                    this.editFormVisible = false;
                    this.$message({
                    message: '保存成功',
                    type: 'success'
                });
                this.statusListData();
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
                this.addFormVisible = true;
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
            this.statusListData();
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
