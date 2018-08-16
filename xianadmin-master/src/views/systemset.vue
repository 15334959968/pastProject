<template>
    <div class="systemset-page">
        <el-tabs v-model="tab" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="second">
                <el-tabs type="card">
                    <el-tab-pane label="地块类型">
                        <div>
                            <div class="tab-pane-left">
                                <el-alert title="地上单体" type="success"></el-alert>
                            </div>
                            <div class="tab-pane-right">
                                <el-form ref="tops" label-width="80px" class="checkboxform">
                                    <el-form-item label="北区">
                                        <el-checkbox-group v-model="tops.qus1">
                                            <el-checkbox v-for="(item,index) in kuaiqs.tops.qus1"
                                                         border
                                                         :size="medium"
                                                         :label="item+'块'"
                                                         :name="'qukuai_tops_qus1'+index">
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item label="南区">
                                        <el-checkbox-group v-model="tops.qus2">
                                            <el-checkbox v-for="(item,index) in kuaiqs.tops.qus2"
                                                         border
                                                         :size="medium"
                                                         :label="item+'块'"
                                                         :name="'qukuai_tops_qus2'+index">
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div>
                            <div class="tab-pane-left">
                                <el-alert title="地下单体" type="success"></el-alert>
                            </div>
                            <div class="tab-pane-right">
                                <el-form ref="bottoms" label-width="80px" class="checkboxform">
                                    <el-form-item label="北区">
                                        <el-checkbox-group v-model="bottoms.qus1">
                                            <el-checkbox :size="medium" v-for="(item,index) in kuaiqs.bottoms.qus1"
                                                         :label="item+'块'"
                                                         border
                                                         :name="'qukuai_bottoms_qus1'+index">
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item label="南区">
                                        <el-checkbox-group v-model="bottoms.qus2">
                                            <el-checkbox v-for="(item,index) in kuaiqs.bottoms.qus2"
                                                         :size="medium"
                                                         :label="item+'块'"
                                                         border
                                                         :name="'qukuai_bottoms_qus2'+index">
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div class="foter-padding">
                            <el-button type="primary" @click="onadd">更新</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="专业类型">
                        <vmajor></vmajor>
                    </el-tab-pane>
                    <el-tab-pane label="紧急程度">
                        <vdegree></vdegree>
                    </el-tab-pane>
                    <el-tab-pane label="部门管理">
                        <department></department>
                    </el-tab-pane>
                    <el-tab-pane label="问题状态">
                        <questatus></questatus>
                    </el-tab-pane>
                    <el-tab-pane label="问题类型">
                        <questype></questype>
                    </el-tab-pane>
                    <el-tab-pane label="资料分类">
                        <vclassification></vclassification>
                    </el-tab-pane>


                </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="人员权限" name="third">
                <el-tabs type="card">
                    <el-tab-pane label="组织架构">
                        <vframework ></vframework>
                    </el-tab-pane>
                    <el-tab-pane label="权限分配">
                        <vjurisdiction></vjurisdiction>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理">
                        <vrole></vrole>
                    </el-tab-pane>
                    <el-tab-pane label="用户管理">
                        <admin></admin>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="工程概况管理" name="fourth">
                <vengineering></vengineering>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import department from './department';
    import vmajor from '../components/vmajor';
    import vdegree from '../components/vdegree';
    import vengineering from '../components/vengineering';
    import vjurisdiction from '../components/vjurisdiction';
    import vrole from '../components/vrole';
    import admin from './admin';
    import vframework from '../components/vframework';
    import  questatus  from "./problem/questatus";
    import  questype  from "./problem/questype";vclassification
    import  vclassification  from "../components/vclassification";
    import {kuaiqs} from '../services/ydatabase.js';
    export default {
        name: 'systemset',
        data () {
            return {
                kuaiqs:kuaiqs,
                tops:{
                    qus1:[],
                    qus2:[],
                },
                bottoms:{
                    qus1:[],
                    qus2:[],
                },
                tab:'second'
            }
        },
        components: {
            'department':department,
            'vmajor':vmajor,
            'vdegree':vdegree,
            'vengineering':vengineering,
            'vjurisdiction':vjurisdiction,
            'vrole':vrole,
            'admin':admin,
            'vframework':vframework,
            'questatus':questatus,
            'questype':questype,
            'vclassification':vclassification,


        },
        computed: {},
        mounted () {},
        methods: {
            onadd(){

            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .systemset-page{
        position: relative;
        padding: 10px 25px;
        .checkboxform{padding-top: 20px;}
        .foter-padding{
           display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
        }
        .zuzhu-page{
            display: flex;
            width: 100%;
            .zuzhu-page-left{
                width: 40%;
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
                border-radius: 4px;
                border: 1px solid #ebeef5;
                background-color: #fff;
            }
            .zuzhu-page-right{
                width: 40%;
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
                border-radius: 4px;
                border: 1px solid #ebeef5;
                background-color: #fff;
            }
            .zuzhu-page-left-padd{
                margin: 20px;
                text-align: right;
                .padd-botton{
                    margin-left: 20px;
                }
                .delete{
                    color: #fff;
                    background-color: #d9534f;
                    border-color: #d43f3a;
                }
                .update{
                    color: #fff;
                    background-color: #337ab7;
                    border-color: #2e6da4;
                }
                .add{
                    color: #fff;
                    background-color: #5cb85c;
                    border-color: #4cae4c;
                }
            }
        }
    }

</style>
