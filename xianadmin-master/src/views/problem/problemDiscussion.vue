<template>
    <el-container>
        <el-main>
            <section class="all-size">
                <!--<el-row>-->
                    <!--工具条-->
                    <xa-search :isadd="false" :list="searchList" @search="getProblemList" @plus="handleAdd"></xa-search>
                    <!--<el-col :span="24">-->
                        <!--<el-table :data="problemList" highlight-current-row v-loading="listLoading"  style="width: 100%;"  max-height="400">-->
                            <!--<el-table-column type="selection" min-width="30"> </el-table-column>-->
                            <!--<el-table-column type="index" min-width="30"> </el-table-column>-->
                            <!--<el-table-column prop="completeDate" label="处理时间" min-width="60"> </el-table-column>-->
                            <!--<el-table-column prop="questionStatus" label="讨论状态" min-width="50"> </el-table-column>-->
                            <!--<el-table-column label="附件" min-width="50">-->
                                <!--<template slot-scope="users">-->
                                    <!--<el-button type="text" size="small"   @click="handleDown(users.$index, users.row)">{{users.row.content}}</el-button>-->
                                <!--</template>-->
                            <!--</el-table-column>-->
                            <!--<el-table-column prop="createDate" label="创建时间" min-width="50"> </el-table-column>-->
                            <!--<el-table-column prop="updataDate" label="更新时间" min-width="50" > </el-table-column>-->
                            <!--<el-table-column label="操作" min-width="300">-->
                                <!--<template slot-scope="scope">-->
                                    <!--<el-button type="text" size="small" @click="handleDetail(scope.row)">查看</el-button>-->
                                    <!--<el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>-->
                                    <!--<el-button type="text" size="small" @click="deleteProblem(scope.row.id)">删除</el-button>-->
                                <!--</template>-->
                            <!--</el-table-column>-->
                        <!--</el-table>-->
                        <!--&lt;!&ndash; </div> &ndash;&gt;-->
                    <!--</el-col>-->
                <!--</el-row>-->


                <div class="image-models">
                    <div class="image-model-item" v-for="(item,index) in problemList">
                        <img :src="item.url||'http://img95.699pic.com/photo/50074/3033.jpg_wh300.jpg'" class="image">
                        <div class="padding">
                            <p class="title">{{item.subject}}</p>
                            <p>{{ item.completeDate||wxformatDate }}</p>
                            <p class="name">创建人:{{item.submitterCode}}</p>
                        </div>
                        <div class="icon-botton">
                            <icon title="为添到讨论" class="el-icon-circle-plus-outline" @click="updateItemstart(item)"></icon>
                            <icon title="查看详情" class="el-icon-more-outline" @click="handleDetail(item)"></icon>
                            <icon title="编辑讨论" class="el-icon-edit-outline" @click="handleEdit(item)"></icon>
                            <icon title="删除讨论" class="el-icon-close" @click="deleteProblem(item.id)"></icon>
                        </div>
                    </div>
                </div>

                <div class="el-pagination-model">
                    <el-pagination
                            @size-change="getProblemList"
                            @current-change="getProblemList"
                            :current-page.sync="currentPage"
                            :page-sizes="[5, 10, 20]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next"
                            :total=total>
                    </el-pagination>
                </div>




                <!--增加界面-->
                <el-dialog title="增加讨论" :visible.sync="addFormVisible" :close-on-click-modal="false" append-to-body>
                    <xa-dialog-form :model="addForm" label-width="80px" :rules="rules" ref="addForm"></xa-dialog-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="saveProblem(addForm)" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>


                <!--编辑界面-->
                <el-dialog title="编辑讨论" :visible.sync="editFormVisible" :close-on-click-modal="false" append-to-body>
                    <xa-dialog-form :model="editForm" label-width="80px" :rules="rules" ref="editForm"></xa-dialog-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="saveProblem(editForm, updateId)" :loading="editLoading">提交</el-button>
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
                //seach 显示
                problemList: [],
                currentPage: 1,
                pageSize: 10,
                total: 0,
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
                editForm: this.generateForm(),
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                //详情界面数据
                detailForm: this.generateForm(),
                detailFormVisible: false,//编辑界面是否显示
                detailLoading: false,
                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                //新增界面数据

                addForm: this.generateForm(),
                    //新增界面数据
                searchList: {
                    title: {
                        value: '',
                        placeholder: '讨论标题'
                    },
                    type: {
                        value: '',
                        inputType: 'select',
                        placeholder: '讨论类型',
                        option: problemData.type
                    },
                    level: {
                        value: '',
                        inputType: 'select',
                        placeholder: '讨论级别',
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
                        placeholder: '提交人'
                    },
                    responsible: {
                        value: '',
                        placeholder: '责任人'
                    },
                    date: {
                        value: [],
                        inputType: 'date',
                        type: 'daterange'
                    }
                },
                updateId: ''
            }
        },
        methods: {
            handleDown(index,item){

                console.log(index,item);
                let message = item.content;
                this.$message({
                    type:'success',
                    message:`恭喜你${message}成功`
                })
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
            // 生成 form
            generateForm (problem = {}, filters = [], required) {
                if (required === undefined) {
                    required = ['subject', 'content', 'categoryCode', 'level', 'statusCode', 'submitter', 'principal'];
                }
                const form = [
                    { key: 'subject', label: '标题' },
                    { key: 'content', label: '内容', inputType: 'textarea' },
                    { key: 'categoryCode', label: '讨论类型', inputType: 'select', option: problemData.type, inputSize: 'half' },
                    { key: 'level', label: '讨论级别', inputType: 'select', option: problemData.level, inputSize: 'half' },
                    { key: 'statusCode', label: '讨论状态', inputType: 'select', option: problemData.status, inputSize: 'half' },
                    { key: 'date', label: '解决时间', inputType: 'date', inputSize: 'half' },
                    { key: 'submitter', label: '提交人', inputSize: 'half', inputType: 'select', option: problemData.submitter },
                    { key: 'principal', label: '责任人', inputSize: 'half', inputType: 'select', option: problemData.principal },
                    { key: 'area', label: '讨论地块', inputType: 'select', option: [], inputSize: 'half' },
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
        },
        components: {
        }
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
        justify-content: center;
    }
    .el-pagination-model{
        clear: both;
        padding-top: 10px;
        margin-left: -10px;
    }
</style>
