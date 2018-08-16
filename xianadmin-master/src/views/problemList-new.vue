<template>
    <el-container  style="width: 80%">
        <el-main>
            <section>
                <el-col :span="24" style="padding:0px 0px 10px 0px;font-size: .5rem" >问题协同管理</el-col>
                <!--工具条-->
                <xa-search :list="searchList" @search="getProblemList" @plus="handleAdd"></xa-search>

                <el-table :data="problemList" highlight-current-row  v-loading="listLoading" max-height="400">
                    <el-table-column type="selection" width="20"></el-table-column>
                    <el-table-column type="index"></el-table-column>
                    <el-table-column prop="subject" label="问题"></el-table-column>
                    <el-table-column prop="category" label="问题类型"></el-table-column>
                    <el-table-column prop="questionLevel" label="问题级别"></el-table-column>
                    <el-table-column prop="questionStatus" label="问题状态"></el-table-column>
                    <el-table-column prop="submitterCode" label="提交人"></el-table-column>
                    <el-table-column prop="responsibleCode" label="责任人"></el-table-column>
                    <el-table-column prop="completeDate" label="解决时间"></el-table-column>
                    <el-table-column prop="createDate" label="创建时间"></el-table-column>
                    <!-- <el-table-column prop="completeDate" label="更新时间" ></el-table-column> -->
                    <el-table-column label="操作" min-width="250">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-more" circle @click="handleDetail(scope.row)"></el-button>
                            <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.row)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="deleteProblem(scope.row.id)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-col :span="24" class="toolbar">
                    <el-pagination
                            @size-change="getProblemList"
                            @current-change="getProblemList"
                            :current-page.sync="currentPage"
                            :page-sizes="[5, 10, 20]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total=total>
                    </el-pagination>
                </el-col>

                <!--编辑界面-->
                <el-dialog title="编辑问题" :visible.sync="editFormVisible" :close-on-click-modal="false" append-to-body>
                    <xa-dialog-form :model="editForm" label-width="80px" :rules="rules" ref="editForm"></xa-dialog-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="saveProblem(editForm, updateId)" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--增加界面-->
                <el-dialog title="增加问题" :visible.sync="addFormVisible" :close-on-click-modal="false" append-to-body>
                    <xa-dialog-form :model="addForm" label-width="80px" :rules="rules" ref="addForm"></xa-dialog-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="saveProblem(addForm)" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--详情界面-->
                <el-dialog title="详情" :visible.sync="detailFormVisible" append-to-body>
                    <xa-dialog-form
                            label-width="80px"
                            :model="detailForm"
                            :rules="rules"
                            :disabled="true"
                            ref="detailForm">
                    </xa-dialog-form>
                </el-dialog>

            </section>
        </el-main>
    </el-container>
</template>
<script>
    import axios from 'axios'
    const problemData = {
        type: [],
        level: [],
        status: [],
        submitter: [],
        principal: []
    };

  export default {
    data () {
        return {
            problemList: [],
            currentPage: 1,
            pageSize: 10,
            total: 0,
            listLoading: false,
            editFormVisible: false,//编辑界面是否显示
            editLoading: false,
            editForm: this.generateForm(),
            //详情界面数据
            detailFormVisible: false,//编辑界面是否显示
            detailLoading: false,
            detailForm: this.generateForm(),
            addFormVisible: false,//新增界面是否显示
            addLoading: false,
            addForm: this.generateForm(),
            rules: {
                subject: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ]
            },
            //新增界面数据
            searchList: {
                title: {
                    value: '',
                    placeholder: '问题标题'
                },
                type: {
                    value: '',
                    inputType: 'select',
                    placeholder: '问题类型',
                    option: problemData.type
                },
                level: {
                    value: '',
                    inputType: 'select',
                    placeholder: '问题级别',
                    option: problemData.level
                },
                status: {
                    value: '',
                    inputType: 'select',
                    placeholder: '状态',
                    option: problemData.status
                },
                submitter: {
                    value: '',
                    placeholder: '提交人',
                    inputType: 'select',
                    option: problemData.submitter
                },
                responsible: {
                    value: '',
                    placeholder: '责任人',
                    inputType: 'select',
                    option: problemData.principal
                },
                date: {
                    value: [],
                    inputType: 'date',
                    type: 'daterange'
                }
            },
            updateId: ''
        };
    },
    methods: {
        //提交编辑
        editSubmit () {
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
        handleDetail (problem) {
            this.detailFormVisible = true;
            this.detailForm = this.generateForm(problem, ['load', 'area', 'model']);
        },
        //显示编辑
        handleEdit (problem) {
            this.editFormVisible = true;
            this.updateId = problem.id;
            this.editForm = this.generateForm(problem);
        },
        //显示增加
        handleAdd () {
            this.addFormVisible=true
            this.addForm = this.generateForm();
        },
        //上传文件
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleDel (index) {
            console.log(index)
            this.$message({
                message: '删除成功',
                type: 'success'
            });
        },
        // 生成 form
        generateForm (problem = {}, filters = [], required) {
            if (required === undefined) {
                required = ['subject', 'content', 'categoryCode', 'level', 'statusCode', 'submitter', 'principal'];
            }
            const form = [
                { key: 'subject', label: '标题' },
                { key: 'content', label: '内容', inputType: 'textarea' },
                { key: 'categoryCode', label: '问题类型', inputType: 'select', option: problemData.type, inputSize: 'half' },
                { key: 'level', label: '问题级别', inputType: 'select', option: problemData.level, inputSize: 'half' },
                { key: 'statusCode', label: '问题状态', inputType: 'select', option: problemData.status, inputSize: 'half' },
                { key: 'date', label: '解决时间', inputType: 'date', inputSize: 'half' },
                { key: 'submitter', label: '提交人', inputSize: 'half', inputType: 'select', option: problemData.submitter },
                { key: 'principal', label: '责任人', inputSize: 'half', inputType: 'select', option: problemData.principal },
                { key: 'area', label: '问题地块', inputType: 'select', option: [], inputSize: 'half' },
                { key: 'model', label: '模型图层', inputType: 'select', option: [], inputSize: 'half' },
                { key: 'load', label: '上传附件', inputType: 'load', action: 'https://jsonplaceholder.typicode.com/posts/' },
                { key: 'sign', label: '模型标注' }
            ];
            const list = form.filter(item => !filters.includes(item.key));
            const map = {
                submitter: 'submitterCode',
                principal: 'responsibleCode',
                date: 'completeDate'
            };
            for (const item of list) {
                const key = map[item.key] || item.key;
                item.value = `${problem[key] || ''}`;
                if (required.includes(item.key)) {
                    item.required = true;
                }
            }
            return list;
        },
        getProblemList () {
            this.listLoading = true;
            const setProblemData = (key, data) => {
                const list = Object.entries(data).map(([value, label]) => ({ value, label }));
                problemData[key].splice(0, problemData[key].length, ...list);
            };
            this.$servers.getProblemList({
                page: this.currentPage,
                size: this.pageSize,
                subject: this.searchList.title.value,
                categoryCode: this.searchList.type.value,
                level: this.searchList.level.value,
                statusCode: this.searchList.status.value,
                submitter: this.searchList.submitter.value,
                responsible: this.searchList.responsible.value,
                startDate: this.searchList.date.value[0],
                endDate: this.searchList.date.value[1]
            }).then(data => {
                this.total = data.paging.count;
                this.problemList = data.paging.list;
            }).catch(error => {
                console.log('error', error);
            }).finally(() => {
                this.listLoading = false;
            });
        },
        saveProblem (form, id) {
            console.log(form.map(item => `${item.key} - ${item.value}`));
            const map = {};
            for (const item of form) {
                if (item.required && !item.value) {
                    this.$message.error(`${item.label}不能为空！`);
                    return;
                }
                map[item.key] = item.value;
            }
            const option = {
                subject: map['subject'],
                content: map['content'],
                categoryCode: map['categoryCode'],
                level: map['level'],
                statusCode: map['statusCode'],
                submitterCode: map['submitter'],
                responsibleCode: map['principal'],
                completeDate: new Date(map['date']),
                iconFile: new ArrayBuffer(),
                resourceFiles: new ArrayBuffer()
            };
            if (id) {
                option.id = id;
            }
            this.$servers.saveProblem(option).then(data => {
                this.addFormVisible = this.editFormVisible = false;
                this.getProblemList();
            }).catch(error => {
                this.$message.error(`保存失败，请稍候重试！`);
            });
        },
        viewProblem (id) {
            const setProblemData = (key, data) => {
                const list = Object.entries(data).map(([value, label]) => ({ value, label }));
                problemData[key].splice(0, problemData[key].length, ...list);
            };
            this.$servers.viewProblem({ id: id || null }).then(data => {
                setProblemData('type', data.categories);
                setProblemData('status', data.statuses);
                setProblemData('level', data.level);
                setProblemData('submitter', data.userType);
                const principal = {};
                (data.users.properties || []).forEach(item => {
                    principal[item.code] = item.realname;
                });
                setProblemData('principal', principal);
            }).catch(error => {
                console.log('viewProblem error', error);
            });
        },
        deleteProblem (id) {
            this.$confirm('确定删除？').then(() => {
                this.$servers.deleteProblem({ id }).then(data => {
                    this.getProblemList();
                }).catch(error => {
                    console.log(error);
                });
            }).catch(() => {
                console.log('算了算了，不删除了');
            });
        }
    },
    mounted () {
        this.viewProblem();
        this.getProblemList();
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
