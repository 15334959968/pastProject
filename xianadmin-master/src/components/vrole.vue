<template>
    <el-container>
        <el-main>
            <section>
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true" >
                        <el-form-item >
                            <el-input v-model="selectResult.searchParamMap['title']" placeholder="角色名称" ></el-input>
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
                          <el-select v-model="selectResult.searchParamMap['statu']" placeholder="正常">
                              <el-option
                                v-for="item in selectResult.status"
                                :key="item"
                                :label="item"
                                :value="item">
                              </el-option>
                          </el-select>
                          </el-form-item>
                        <el-form-item >
                            <el-button type="primary" icon="el-icon-search" @click.native="getAdminList()">查询</el-button>
                            <el-button type="primary"  @click="addrole()">新建</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <!--列表-->
                <el-table :data="selectResult.paging.list" highlight-current-row v-loading="listLoading" style="width: 100%;"  max-height="600">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column type="index"  width="40">
                    </el-table-column>
                    <el-table-column prop="title" label="角色名称" width="150" >
                    </el-table-column>
                    <el-table-column prop="remark" label="角色描述" width="320" >
                    </el-table-column>

                    <el-table-column  label="创建时间" width="150" sortable>
                        <template slot-scope="scope">
                            {{scope.row.createDate | wxformatDate}}
                        </template>
                     </el-table-column>
                    <el-table-column label="更新时间" width="150" sortable>
                        <template slot-scope="scope">
                            {{scope.row.updateDate | wxformatDate}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="userRoleStatus" label="状态" width="100" >
                    </el-table-column>
                    <el-table-column label="操作" min-width="300">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" circle @click="SelectRoleByID(scope.$index,scope.row)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="DeleteRole(scope.$index,scope.row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-col :span="24" class="toolbar">
                <div style="margin-right: 3rem">
                    <el-pagination
                            @size-change="sizechange()"
                            @current-change="currentchange()"
                            :current-page.sync="currentPage"
                            :page-sizes="[5, 10, 20]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total=selectResult.paging.count>
                    </el-pagination>
                </div>
                </el-col>

                  <!--编辑界面-->
                <el-dialog :title="dialogTitle" width="200"  :visible.sync="FormVisible" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false" append-to-body >
                      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                          <el-form-item label="角色名称" >
                              <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                          </el-form-item>

                          <el-form-item label="角色描述">
                              <el-input type="textarea"  v-model="editForm.remark" style="width: 96% "></el-input>
                          </el-form-item>
                  </el-form>

                  <div slot="footer" class="dialog-footer">
                                <el-button @click.native="FormVisible=false">取消</el-button>
                                <el-button
                                           type="primary" @click.native="editSubmit"
                                           >保存</el-button>
                            </div>
                  </el-dialog>



            </section>
        </el-main>
    </el-container>


</template>
<script>

  export default {
    data () {
        name:"vrole"
      return {
          pageSize:10,
          selectResult:{
              searchParamMap:{},
              paging:{},
              status:[]
          },
          dialogTitle:"角色信息",
          FormVisible: false,
          editForm:{
              title:"",
              remark:"",
          },
          currentPage: 1,
      }
    },
    methods: {
        addrole(){
            this.editForm={
                title:"",
                remark:"",
            }
            this.FormVisible=true;
        },
        DeleteRole(index,item){
          let _this=this;
          _this.$servers.DeleteRole({
              id:item.id
          }).then(data => {
              _this.checkresult(_this,data);
              _this.FormVisible=false;
              _this.getAdminList();
          })
       },
        SelectRoleByID(index,item){
            let _this=this;
            _this.$servers.SelectRoleByID({
                id:item.id
              }).then(data => {
                  _this.editForm=data.role;
                  _this.FormVisible=true;
                })

        },
        //提交编辑
        checkfomr(editForm){
            let result=true;
            var flag = "0";
            var pattern = new RegExp("[~'!@#￥$%^&*()-+_=:]");
            if(editForm.title != "" && editForm.title != null){
                if(pattern.test(editForm.title)){
                    flag = "1";
                }
            }
            if(editForm.title.trim().length===0) flag="1";
            if(editForm.title==null||editForm.title=="") flag="0";
            if(flag == "1"){
                result=false;
                editForm.title="";//清空
            }
            return result;
        },
        alert(mengae,icon){
            this.$message({
                message: mengae,
                type: icon||"error"
            });
        },
        checkresult(_this,data){
            if(typeof(data)=='string'){
                _this.alert(data,'success');
            }else {
                _this.alert(data.data.errorMessage);
            }
        },
        editSubmit () {
            let _this = this;
            if(!_this.checkfomr(_this.editForm)){
                _this.alert("请勿输入特殊字符");
            }else if(!_this.editForm.title){
                _this.alert("请输入创建的角色名称");
            }else if(!_this.editForm.remark){
                _this.alert("请输入创建的角色描述");
            }else{
                let ps={
                    title: _this.editForm.title,
                    remark: _this.editForm.remark,
                    id:_this.editForm.id,
                };
                if(!_this.editForm.id){
                    delete  ps.id;
                }
                _this.$servers.AddRole(ps)
                .then(data => {
                    _this.checkresult(_this,data);
                    _this.FormVisible = false;
                    _this.getAdminList();
                })
                .then(data => {
                })
            }
        },
        sizechange(size){
            this.pageSize=size;
            this.getAdminList();
        },
        currentchange(page){
            this.currentPage=page;
            this.getAdminList();
        },
        getAdminList(){
            let _this = this;
            let searchParamMap=this.selectResult.searchParamMap;
            searchParamMap['status']=searchParamMap['statu']||0;
            let ps={
                page: this.currentPage,
                size: this.pageSize,
                searchParamMap:searchParamMap
            }
            _this.$servers.SelectRoleList(ps)
              .then(data => {
                 _this.selectResult=data;
              })
              .then(error => {
              })
        }
    },
    mounted () {
        this.getAdminList();
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .title-des {
      padding:0px 0px 10px 0px;
      &.el-col-24 {
        font-size: .6rem;
        border-bottom:1px solid #000;
        margin-bottom:.24rem;
      }
  }

</style>
