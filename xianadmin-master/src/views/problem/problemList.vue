<template>
    <el-main>
            <section>
                <!--工具条-->
                <xa-search :list="searchList" @search="getProblemList" @ontoggelshowtype="ontoggelshowtype" @plus="handleAdd"></xa-search>
                <div class="problemlist-page image-models" v-if="showmodeltype=='tr'">
                    <div class="image-model-item" v-bind:key="index" v-for="(item,index) in problemList">
                        <img :src="item.url" class="image">
                        <div class="padding">
                            <p class="title">{{ item.subject }}</p>
                            <p class="name">{{ item.completeDate||wxformatDate }}</p>
                            <p class="name">创建人：{{item.cteatename}}</p>
                        </div>
                        <div class="icon-botton">
                           <div class="icons">
                            <a class="icon-i" @click="add(item)">提交</a>
                            <!-- <a title="查看讨论" class="el-icon-edit-outline" @click="handleAdd(item)">编辑</a> -->
                            <a class="icon-i" @click="handleEdit(item)">编辑</a>
                            <a class="icon-i"  @click="deleteProblem(item.id)">删除</a>
                           </div>
                        </div>

                        <div class="icon-botton-top">
                          已闭合
                        </div>
                    </div>
                </div>


                <div class="problemlist-page page-tables" v-if="showmodeltype=='table'" >
                  <el-table
                    :data="problemList"
              
                   >
                    <el-table-column
                      label="标题"
                      width="380">
                      <template slot-scope="scope">
                         <div class="flex1">
                            {{scope.row.subject}}
                         </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                      prop="massif"
                      label="地块类型"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="type"
                      label="问题类型">
                    </el-table-column>
                     <el-table-column
                      prop="department"
                      label="负责部门">
                    </el-table-column>
                     <el-table-column
                      prop="start"
                      label="紧急程度">
                    </el-table-column>
                     <el-table-column label="" min-width="180">
                        <template slot-scope="scope">
                         <div class="scope-bottons">
                             <div class="table-botton-item start start-buld">已闭合</div>
                            <div class="table-botton-item " @click="add(scope.row)">提交</div>
                            <div class="table-botton-item"  @click="handleEdit(scope.row)">编辑</div>
                            <div class="table-botton-item"  @click="deleteProblem(scope.row.id)">删除</div>
                         </div>
                        </template>
                    </el-table-column>

                    
                  </el-table>
                </div>


                <div class="el-pagination-model"  >
                    <el-pagination
                            @size-change="getProblemList"
                            @current-change="getProblemList"
                            :current-page.sync="currentPage"
                            :page-sizes="[5, 10, 20]"
                            :page-size="pageSize"
                            background
                            layout="prev, pager, next"
                            :total=100>
                    </el-pagination>
                </div>

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
</template>
<script>
import axios from "axios";
const problemData = {
  type: [],
  level: [],
  status: [],
  submitter: [],
  principal: []
};

export default {
  data() {
    return {
      showmodeltype:'tr',
      problemList: [
          {
        subject: "严禁在含水率过大的腐殖土、亚粘土、泥炭土、淤泥等原状土上填方",
        cteatename: "张力弘",
        submitterCode: "诸婧",
        start:"中等",
         department:"工程管理部",
         type:"施工问题",
         massif:"G地块",
         
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50089/0779.jpg_wh300.jpg"
      },
      {
        subject: "翻晒、晾干后进行夯实",
       cteatename: "张力弘",
        submitterCode: "诸婧",
        start:"中等",
         department:"工程管理部",
         type:"施工问题",
         massif:"G地块",
         
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50058/8738.jpg_wh300.jpg"
      },
      {
        subject: "换土。将橡皮土挖除，换上 干性土，或回填级配砂石；",
        cteatename: "张力弘",
        submitterCode: "诸婧",
        start:"中等",
         massif:"G地块",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50028/5229.jpg_wh300.jpg"
      },
      {
        subject: "用干土、生石灰粉、碎砖等吸水性强的材料掺入橡皮土中，吸收土中的水分，减少土的含水率。",
        cteatename: "张竞予",
        submitterCode: "诸婧",
         massif:"G地块",
        start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50079/2254.jpg_wh300.jpg"
      },
      {
        subject: "严格控制回填土选用的土料和含水率",
        cteatename: "张天合",
         massif:"G地块",
        submitterCode: "诸婧",
         start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50028/5223.jpg_wh300.jpg"
      },
      {
        subject: "填方必须分层铺土和压实；铺土厚度及压实遍数，应符合设计要求和规范规定",
        cteatename: "张天弘",
        submitterCode: "诸婧",
         massif:"G地块",
         start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50089/0763.jpg_wh300.jpg"
      },
       {
        subject: "回填土选用的土料含水率大",
        cteatename: "张梦琪",
        submitterCode: "诸婧",
         massif:"G地块",
        start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50046/3701.jpg_wh300.jpg"
      },
      {
        subject: "如选用的土料为粘土时因含水率过大，夯击时变成“橡皮土”，在这种基土上作混凝土垫层，易产生开裂。",
        cteatename: "张筱宇",
        submitterCode: "诸婧",
         massif:"G地块",
          start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50051/1574.jpg_wh300.jpg"
      },
      {
        subject: "回填土未作分层夯(压)实，或夯实密实度不符合规定，导致下沉量过大，而造成回填土下沉。",
        cteatename: "张力弘",
        submitterCode: "诸婧",
        start:"中等",
         massif:"G地块",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50087/6474.jpg_wh300.jpg"
      },
      {
        subject: "基底存在橡皮土，未做处理",
        cteatename: "张竞予",
        submitterCode: "诸婧",
         start:"中等",
          massif:"G地块",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50013/8832.jpg_wh300.jpg"
      },
      {
        subject: "严格控制回填土选用的土料和含水率",
        cteatename: "张天合",
        submitterCode: "诸婧",
         massif:"G地块",
         start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50028/5223.jpg_wh300.jpg"
      },
      {
        subject: "填方必须分层铺土和压实；铺土厚度及压实遍数，应符合设计要求和规范规定",
        cteatename: "张天弘",
        submitterCode: "诸婧",
         massif:"G地块",
       start:"中等",
         department:"工程管理部",
         type:"施工问题",
        completeDate: new Date().toDateString(),
        url: "http://img95.699pic.com/photo/50089/0763.jpg_wh300.jpg"
      }
      ],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      listLoading: false,
      editFormVisible: false, //编辑界面是否显示
      editLoading: false,
      editForm: this.generateForm(),
      //详情界面数据
      detailFormVisible: false, //编辑界面是否显示
      detailLoading: false,
      detailForm: this.generateForm(),
      addFormVisible: false, //新增界面是否显示
      addLoading: false,
      addForm: this.generateForm(),
      rules: {
        subject: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      //新增界面数据
      searchList: {
        title: {
          value: "",
           inputType: "input",
          placeholder: "问题标题"
        },
        users: {
          value: "",
          inputType: "select",
          placeholder: "讨论组",
          option: [
           
            { label: "北区施工总包", value: "北区施工总包" }
          ]
        },
       usertype: {
          value: "",
          inputType: "select",
          placeholder: "负责部门",
          option: [
          
            { label: "工程管理部", value: "工程管理部" }
          ]
        },
        dikuais: {
          value: "",
          inputType: "select",
          placeholder: "地块类型",
          option: [
            
            { label: "K地块", value: "K地块" }
          ]
        },
         zhuanyes: {
          value: "",
          inputType: "select",
          placeholder: "专业类型",
          option: [
           
            { label: "土建", value: "土建" }
          ]
        },
      status: {
          value: "",
          inputType: "select",
          placeholder: "紧急程度",
          option: [
          
            { label: "紧急", value: "紧急" }
            ]
        },

       submitter: {
          value: "",
          placeholder: "负责人",
          inputType: "select",
          option: [
          
            { label: "王万里", value: "王万里" }
          ]
        },
      times: {
          value: "",
          inputType: "select",
          placeholder: "时间排序",
          icon:"time.png",
          option: [
          
            { label: "最近一个月", value: "最近一个月" },
            { label: "最近两周", value: "最近两周" },
         
          ]
        },
        time: {
          value: "",
          inputType: "botton",
          placeholder: "清除筛选",
          icon:"delete-icon.png"
        },
        usericon: {
          value: "",
          inputType: "check",
          placeholder: "与我相关",
        },
        usericon: {
          value: "",
          inputType: "check",
          placeholder: "与我相关",
        },
        zhankai: {
          icon:"zhankai.png",
          value: "",
          inputType: "icon",
          showmodeltype:'tr'
        },
        icons: {
          icon:"icons.png",
          value: "",
          inputType: "icon",
          showmodeltype:'table'
        },
      },
      updateId: ""
    };
  },
  methods: {
    ontoggelshowtype(type){
      console.log(type);
         this.showmodeltype=type;
    },  
    add() {
      this.$confirm("是否创建为任务?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      });
    },

    //提交编辑
    editSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            let para = Object.assign({}, this.editForm);
            this.$refs.editForm.resetFields();
            this.editFormVisible = false;
          });
        }
      });
    },
    handleDetail(problem) {
      this.detailFormVisible = true;
      this.detailForm = this.generateForm(problem, ["load", "area", "model"]);
    },
    //显示编辑
    handleEdit(problem) {
      // this.editFormVisible = true;
      // this.updateId = problem.id;
      // this.editForm = this.generateForm(problem);
       this.$router.push("/problemselect");
    },
    //显示增加
    handleAdd() {
      this.$router.push("/problemupdata");
    },
    //上传文件
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleDel(index) {
      console.log(index);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    // 生成 form
    generateForm(problem = {}, filters = [], required) {
      if (required === undefined) {
        required = [
          "subject",
          "content",
          "categoryCode",
          "level",
          "statusCode",
          "submitter",
          "principal"
        ];
      }
      const form = [
        { key: "subject", label: "标题" },
        { key: "content", label: "内容", inputType: "textarea" },
        {
          key: "categoryCode",
          label: "问题类型",
          inputType: "select",
          option: problemData.type,
          inputSize: "half"
        },
        {
          key: "level",
          label: "处理进程",
          inputType: "select",
          option: problemData.level,
          inputSize: "half"
        },
        {
          key: "statusCode",
          label: "问题状态",
          inputType: "select",
          option: problemData.status,
          inputSize: "half"
        },
        {
          key: "date",
          label: "解决时间",
          inputType: "date",
          inputSize: "half"
        },
        {
          key: "submitter",
          label: "创建人",
          inputSize: "half",
          inputType: "select",
          option: problemData.submitter
        },
        {
          key: "principal",
          label: "责任人",
          inputSize: "half",
          inputType: "select",
          option: problemData.principal
        },
        {
          key: "area",
          label: "问题地块",
          inputType: "select",
          option: [],
          inputSize: "half"
        },
        {
          key: "model",
          label: "模型图层",
          inputType: "select",
          option: [],
          inputSize: "half"
        },
        {
          key: "load",
          label: "上传附件",
          inputType: "load",
          action: "https://jsonplaceholder.typicode.com/posts/"
        },
        { key: "sign", label: "模型标注" }
      ];
      const list = form.filter(item => !filters.includes(item.key));
      const map = {
        submitter: "submitterCode",
        principal: "responsibleCode",
        date: "completeDate"
      };
      for (const item of list) {
        const key = map[item.key] || item.key;
        item.value = `${problem[key] || ""}`;
        if (key === "load") {
          item.value = [];
        }
        if (required.includes(item.key)) {
          item.required = true;
        }
      }
      return list;
    },
    getProblemList() {
      this.listLoading = true;
      const setProblemData = (key, data) => {
        const list = Object.entries(data).map(([value, label]) => ({
          value,
          label
        }));
        problemData[key].splice(0, problemData[key].length, ...list);
      };
      this.$servers
        .getProblemList({
          page: this.currentPage,
          size: this.pageSize
          // subject: this.searchList.title.value,
          // categoryCode: this.searchList.type.value,
          // level: this.searchList.level.value,
          // statusCode: this.searchList.status.value,
          // submitter: this.searchList.submitter.value,
          // responsible: this.searchList.responsible.value,
          // startDate: this.searchList.date.value[0],
          // endDate: this.searchList.date.value[1]
        })
        .then(data => {
          this.total = data.paging.count;
          if (data.paging.list.length) {
            this.problemList = data.paging.list;
          }
        })
        .catch(error => {
          console.log("error", error);
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    saveProblem(form, id) {
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
        subject: map["subject"],
        content: map["content"],
        categoryCode: map["categoryCode"],
        level: map["level"],
        statusCode: map["statusCode"],
        submitterCode: map["submitter"],
        responsibleCode: map["principal"],
        completeDate: new Date(map["date"]),
        iconFile: new ArrayBuffer(),
        resourceFiles: new ArrayBuffer()
      };
      if (id) {
        option.id = id;
      }
      this.$servers
        .saveProblem(option)
        .then(data => {
          this.addFormVisible = this.editFormVisible = false;
          this.getProblemList();
        })
        .catch(error => {
          this.$message.error(`保存失败，请稍候重试！`);
        });
    },
    viewProblem(id) {
      const setProblemData = (key, data) => {
        const list = Object.entries(data).map(([value, label]) => ({
          value,
          label
        }));
        problemData[key].splice(0, problemData[key].length, ...list);
      };
      this.$servers
        .viewProblem({ id: id || null })
        .then(data => {
          setProblemData("type", data.categories);
          setProblemData("status", data.statuses);
          setProblemData("level", data.level);
          setProblemData("submitter", data.userType);
          const principal = {};
          (data.users.properties || []).forEach(item => {
            principal[item.code] = item.realname;
          });
          setProblemData("principal", principal);
        })
        .catch(error => {
          console.log("viewProblem error", error);
        });
    },
    deleteProblem(id) {
      this.$confirm("确定删除？")
        .then(() => {
          this.$servers
            .deleteProblem({ id })
            .then(data => {
              this.getProblemList();
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(() => {
          console.log("算了算了，不删除了");
        });
    }
  },
  mounted() {
    this.viewProblem();
    this.getProblemList();
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.timePick {
  margin-left: 1rem;
}
.toolbar {
  margin-left: 3rem;
  margin-top: 0.3rem;
}

.problemlist-page {
   
}



</style>
