 <template>
    <el-container>
        <el-main>
            <section class="management-page">
               <div class="page-left">
                 <div class="page-left-icon">
                  <el-button icon="el-icon-circle-plus-outline" type="primary" >新建</el-button>
                  <el-button icon="el-icon-edit" type="primary" >修改</el-button>
                  <el-button icon="el-icon-delete" type="danger" >删除</el-button>
                 </div>
                   <el-tree
                           :data="data3"
                           node-key="id"
                           class="filter-tree"
                           :props="defaultProps"
                           default-expand-all
                           :render-content="renderContent"
                           >
                   </el-tree>
               </div>
                <div class="page-right">
                    <!--工具条-->
                    <el-col :span="24" class="" style="padding-bottom: 0px;">
                        <el-form :inline="true" >
                            <el-form-item >
                                <el-input v-model="selectResult.searchParamMap['title']" :placeholder="keytitle+'名称'" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-date-picker v-model="selectResult.searchParamMap['starttime']" type="date" placeholder="开始时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item >
                                <el-date-picker v-model="selectResult.searchParamMap['endtime']" type="date" placeholder="结束时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="selectResult.searchParamMap['class']" :placeholder="keytitle+'分类'" >
                                    <el-option
                                            v-for="item in selectResult.searchParamMap.options"
                                            :key="item"
                                            :label="item"
                                            :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item >
                                <el-button type="primary" icon="el-icon-search" @click.native="getList()">查询</el-button>
                                <el-button type="primary" icon="el-icon-plus" @click="addrole()">添加资料</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <!--列表-->
                    <el-table :data="selectResult.paging.list" highlight-current-row v-loading="listLoading" style="width: 100%;"  max-height="600">
                        <el-table-column type="selection" width="40">
                        </el-table-column>
                        <el-table-column type="index"  width="40">
                        </el-table-column>
                        <el-table-column prop="name" :label="keytitle+'名称'" width="180" >
                        </el-table-column>
                        <el-table-column prop="remark" :label="keytitle+'描述'" width="220" >
                        </el-table-column>
                        <el-table-column prop="url" :label="keytitle+'文件'" width="380" >
                            <template slot-scope="scope">
                                <a target="_blank" :href="scope.row.url"> {{scope.row.url}}</a>
                            </template>
                        </el-table-column>

                        <el-table-column  label="创建时间" width="150" sortable>
                            <template slot-scope="scope">
                                {{scope.row.createtime | wxformatDate}}
                            </template>
                        </el-table-column>


                        <el-table-column label="操作" min-width="300">
                            <template slot-scope="scope">
                                <el-button type="primary" icon="el-icon-edit" circle  @click="SelectByID(scope.$index, scope.row)"></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle @click="DeleteByID(scope.$index,scope.row)"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>


                    <div class="el-pagination-model">
                        <el-pagination
                                @size-change="sizechange"
                                @current-change="currentchange"
                                :current-page.sync="currentPage"
                                :page-sizes="[5, 10, 20]"
                                :page-size="pageSize"
                                background
                                layout="prev, pager, next"
                                :total=500>
                        </el-pagination>
                    </div>
                </div>
            </section>
            <!--编辑界面-->
            <el-dialog :title="keytitle+'信息'" width="200"  :visible.sync="FormVisible" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false" append-to-body >
                <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                    <el-form-item :label="keytitle+'名称'" >
                        <el-input v-model="editForm.name"  style="width: 96%"></el-input>
                    </el-form-item>

                    <el-form-item :label="keytitle+'描述'">
                        <el-input type="textarea"  v-model="editForm.remark" style="width: 96% "></el-input>
                    </el-form-item>

                    <el-form-item :label="keytitle+'文件'">
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="editForm.url" alt="">
                        </el-dialog>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="FormVisible=false">取消</el-button>
                    <el-button
                            type="primary" @click.native="editSubmit"
                    >保存</el-button>
                </div>
            </el-dialog>


        </el-main>
    </el-container>


</template>
<script>
export default {
  name: "vinformation",
  data() {
    return {
      
      data3: [
        {
          id: 1,
          label: "地上单体文件夹",
          children: [
            {
              id: 3,
              label: "上海梦中心文件夹 ",
              children: [
                
              ]
            },
            {
              id: 4,
              label: "诺布置业文件夹",
              disabled: true,
              children: [
               
              ]
            },
            {
              id: 5,
              label: "大众交通文件夹",
              disabled: true,
              children: [
                
              ]
            }
          ]
        },
         {
          id: 2,
          label: "地下单体文件夹",
          children: [
            {
              id: 3,
              label: "上海梦中心文件夹 ",
              children: [
                
              ]
            },
            {
              id: 4,
              label: "诺布置业文件夹",
              disabled: true,
              children: [
               
              ]
            },
            {
              id: 5,
              label: "大众交通文件夹",
              disabled: true,
              children: [
                
              ]
            }
          ]
        },
         {
          id: 3,
          label: "内部资料文件夹",
          children: [
            {
              id: 3,
              label: "上海梦中心文件夹 ",
              children: [
                
              ]
            },
            {
              id: 4,
              label: "诺布置业文件夹",
              disabled: true,
              children: [
               
              ]
            },
            {
              id: 5,
              label: "大众交通文件夹",
              disabled: true,
              children: [
                
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      keytitle: "资料",
      pageSize: 10,
      selectResult: {
        searchParamMap: {
          options: ["施工图纸", "施工工艺"]
        },
        paging: {
          list: []
        },
        status: []
      },
      FormVisible: false,
      editForm: {
        name: "",
        remark: "",
        url:
          "https://bpic.588ku.com/element_water_img/18/06/12/f3e9b5d836863d8013067125371184bb.jpg"
      },
      currentPage: 1
    };
  },
  methods: {
      renderContent(h, { node, data, store }) {
        return (
          <div class="custom-tree-node">
            <span class="tree-back">{node.label}</span>
          </div>);
      },
    addrole() {
      this.editForm = {
        name: "",
        remark: ""
      };
      this.FormVisible = true;
    },
    DeleteByID(index, item) {
      let _this = this;
      _this.FormVisible = false;
    },
    SelectByID(index, item) {
      let _this = this;
      _this.editForm = item;
      _this.FormVisible = true;
    },
    //提交编辑
    checkfomr(editForm) {
      let result = true;
      var flag = "0";
      var pattern = new RegExp("[~'!@#￥$%^&*()-+_=:]");
      if (editForm.name != "" && editForm.name != null) {
        if (pattern.test(editForm.name)) {
          flag = "1";
        }
      }
      if (editForm.name.trim().length === 0) flag = "1";
      if (editForm.name == null || editForm.name == "") flag = "0";
      if (flag == "1") {
        result = false;
        editForm.name = ""; //清空
      }
      return result;
    },
    alert(mengae, icon) {
      this.$message({
        message: mengae,
        type: icon || "error"
      });
    },
    checkresult(_this, data) {
      if (typeof data == "string") {
        _this.alert(data, "success");
      } else {
        _this.alert(data.data.errorMessage);
      }
    },
    editSubmit() {
      let _this = this;
      if (!_this.checkfomr(_this.editForm)) {
        _this.alert("请勿输入特殊字符");
      } else if (!_this.editForm.name) {
        _this.alert("请输入创建名称");
      } else if (!_this.editForm.remark) {
        _this.alert("请输入描述信息");
      } else {
        let ps = {
          name: _this.editForm.name,
          remark: _this.editForm.remark,
          id: _this.editForm.id
        };
        if (!_this.editForm.id) {
          delete ps.id;
        }
        // _this.$servers.AddRole(ps)
        //     .then(data => {
        //         _this.checkresult(_this,data);
        //         _this.FormVisible = false;
        //         _this.getList();
        //     })
        //     .then(data => {
        //     })
        _this.FormVisible = false;
      }
    },
    sizechange(size) {
      this.pageSize = size;
      this.getList();
    },
    currentchange(page) {
      this.currentPage = page;
      this.getList();
    },
    getList() {
      let _this = this;
      let searchParamMap = this.selectResult.searchParamMap;
      searchParamMap["status"] = searchParamMap["statu"] || 0;
      let ps = {
        page: this.currentPage,
        size: this.pageSize,
        searchParamMap: searchParamMap
      };
      _this.selectResult.paging.list = Array(7).fill({
        id: new Date()
          .getTime()
          .toString()
          .toLocaleUpperCase()
          .substr(0, 10),
        name: ["上海梦中心地下施工工艺", "上海梦中心地下施工图纸"][
          parseInt(Math.random(3) * 2)
        ],
        createtime: new Date().toISOString(),
        remark: "上海梦中心描述信息",
        url:
          "https://bpic.588ku.com/element_water_img/18/06/12/f3e9b5d836863d8013067125371184bb.jpg"
      });
      // _this.$servers.SelectVmajorList(ps)
      //     .then(data => {
      //         _this.selectResult=data;
      //     })
      //     .then(error => {
      //     })
    }
  },
  mounted() {
    this.getList();
  },
  components: {}
};
</script>

<style lang="scss" rel="stylesheet/scss">
.tree-back{
  background: url('../../static/images/tree-back.png') no-repeat 0px 3px;
    padding-left: 21px;
    background-position: center;
    background-size: contain;
    background-position-x: 2px;
}
.title-des {
  padding: 0px 0px 10px 0px;
  &.el-col-24 {
    font-size: 0.6rem;
    border-bottom: 1px solid #000;
    margin-bottom: 0.24rem;
  }
}
.management-page {
  height: 100%;
  .page-left {
    width:250px;
    background-color: #f3f3f4;
    height: 100%;
    position: absolute;
    padding: 20px 0px 
  }
  .el-tree {
        padding-top: 15px;
    background-color: #f3f3f4;
    .is-current{
 
    .el-tree-node__content{
         color: #fff;
    padding: 5px 0px;
     background-color: #f56c6c;
    //  font-size: 16px;
    }
    }
  }
  .page-right {
    height:80%;

         margin-left: 296px;
  }
}
.page-left-icon{
  display: flex;
  justify-content: center;
  > .el-button{
        padding: 7px 10px;
  }

}
</style>
