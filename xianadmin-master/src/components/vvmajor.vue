<template>
    <el-container>
        <el-main>
            <section>
                <!--工具条-->
                <el-col :span="24" class="" style="padding-bottom: 0px;">
                    <el-form :inline="true" >
                        <el-form-item >
                            <el-input v-model="selectResult.searchParamMap['title']" placeholder="分类名称" ></el-input>
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
                            <el-button type="primary" icon="el-icon-search" @click.native="getList()">查询</el-button>
                            <el-button type="primary" icon="el-icon-plus" @click="addrole()">新建</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <!--列表-->
                <el-table :data="selectResult.paging.list" highlight-current-row v-loading="listLoading" style="width: 100%;"  max-height="600">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column type="index"  width="40">
                    </el-table-column>
                    <el-table-column prop="name" label="专业名称" width="150" >
                    </el-table-column>
                    <el-table-column prop="remark" label="专业描述" width="320" >
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
                        <el-form-item label="专业名称" >
                            <el-input v-model="editForm.title"  style="width: 96%"></el-input>
                        </el-form-item>

                        <el-form-item label="专业描述">
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
        name:'vmajor',
        data () {
            return {
                pageSize:10,
                selectResult:{
                    searchParamMap:{},
                    paging:{
                        list:[]
                    },
                    status:[]
                },
                dialogTitle:"专业信息",
                FormVisible: false,
                editForm:{
                    name:"",
                    remark:"",
                },
                currentPage: 1,
            }
        },
        methods: {
            addrole(){
                this.editForm={
                    name:"",
                    remark:"",
                }
                this.FormVisible=true;
            },
            DeleteByID(index,item){
                let _this=this;
                _this.FormVisible=false;
            },
            SelectByID(index,item){
                let _this=this;
                _this.editForm=item;
                _this.FormVisible=true;
            },
            //提交编辑
            checkfomr(editForm){
                let result=true;
                var flag = "0";
                var pattern = new RegExp("[~'!@#￥$%^&*()-+_=:]");
                if(editForm.name != "" && editForm.name != null){
                    if(pattern.test(editForm.name)){
                        flag = "1";
                    }
                }
                if(editForm.name.trim().length===0) flag="1";
                if(editForm.name==null||editForm.name=="") flag="0";
                if(flag == "1"){
                    result=false;
                    editForm.name="";//清空
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
                }else if(!_this.editForm.name){
                    _this.alert("请输入创建的专业名称");
                }else if(!_this.editForm.remark){
                    _this.alert("请输入创建的专业描述");
                }else{
                    let ps={
                        name: _this.editForm.name,
                        remark: _this.editForm.remark,
                        id:_this.editForm.id,
                    };
                    if(!_this.editForm.id){
                        delete  ps.id;
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
            sizechange(size){
                this.pageSize=size;
                this.getList();
            },
            currentchange(page){
                this.currentPage=page;
                this.getList();
            },
            getList(){
                let _this = this;
                let searchParamMap=this.selectResult.searchParamMap;
                searchParamMap['status']=searchParamMap['statu']||0;
                let ps={
                    page: this.currentPage,
                    size: this.pageSize,
                    searchParamMap:searchParamMap
                }
                _this.selectResult.paging.list=Array(10).fill({
                    id: new Date().getTime().toString().toLocaleUpperCase().substr(0, 10),
                    createtime: new Date().toISOString(),
                    createname: ["土建", "机电", "成本","合约","建筑","结构"][parseInt(Math.random(3) * 3)],
                    remark: '西岸专业描述',
                })
                // _this.$servers.SelectVmajorList(ps)
                //     .then(data => {
                //         _this.selectResult=data;
                //     })
                //     .then(error => {
                //     })
            }
        },
        mounted () {
            this.getList();
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
