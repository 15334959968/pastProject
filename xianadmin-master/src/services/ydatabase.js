//
/**
 * 杨云海 个人数据源
 */
export const mianconfig={
    //首页底部按钮
    icons:[
        {
            text:"机电层",
            icon:"jidianceng",
            G_G1_JD:"G_G1_GL",
            G_G2_JD:"G_G2_GL",


            K_K1_JD:"K_K1_JD_JD",
            K_K2_JD:"K_K2_JD_JD",

            N_N1_JD:"N_N1_JD_JD",
            N_N2_JD:"N_N2_JD_JD",

            F_F1_JD:"F_F1_JD_JD",
            F_F2_JD:"F_F2_JD_JD",
        },
        {
            text:"结构层",
            icon:"jiegouceng",
            G_G1_JD:"G_G1_JD_JG",
            G_G2_JD:"G_G2_JD_JG",

            K_K1_JD:"K_K1_JD_JG",
            K_K2_JD:"K_K2_JD_JG",

            N_N1_JD:"N_N1_JD_JG",
            N_N2_JD:"N_N2_JD_JG",


            F_F1_JD:"F_F1_JD_JG",
            F_F2_JD:"F_F2_JD_JG",

        },
        {
            text:"建筑层",
            icon:"jianzhuceng",
            G_G1_JD:"G_G1_JD_JZ",
            G_G2_JD:"G_G1_JD_JZ",

            K_K1_JD:"K_K1_JD_JZ",
            K_K2_JD:"K_K2_JD_JZ",

            N_N1_JD:"N_N1_JD_JZ",
            N_N2_JD:"N_N2_JD_JZ",

            F_F1_JD:"F_F1_JD_JZ",
            F_F2_JD:"F_F2_JD_JZ",
        }
    ],


    //首页头部分类按钮
    F_F2_JD_bottons:[
        {text:"机械火警设备",code:"jixiehuojingshebei"},
        {text:"管道",code:"guandaofujian"},
        {text:"封管道",code:"fengguan"},
        {text:"电缆桥架配件",code:"dianlanqiaojiapeijian"},
   ],
    F_F1_JD_bottons:[
        {text:"机械火警设备",code:"jixiehuojingshebei"},
        {text:"管道",code:"guandaofujian"},
        {text:"封管道",code:"fengguan"},
        {text:"电缆桥架配件",code:"dianlanqiaojiapeijian"},
    ],
    //首页头部分类按钮
    N_N2_JD_bottons:[
        {text:"消防栓",code:"xiaofang"},
        {text:"强电",code:"qiaojia"},
        {text:"排水",code:"paishui"},
        {text:"暖通水",code:"nuantongshui"},
        {text:"能源中心",code:"nengyuanzhongxin"},
    ],
    N_N1_JD_bottons:[
        {text:"消防栓",code:"xiaohuoshuan"},
        {text:"市政管廊",code:"shizhengguanlang"},
        {text:"强电",code:"qiangdian"},
        {text:"弱电",code:"ruodian"},
        {text:"消防喷淋",code:"penlin"},
        {text:"排风管",code:"fengguan"},
    ],
    K_K2_JD_bottons:[
        {text:"排风管",code:"PIP_FB2"},
        {text:"强电",code:"MAC_FB2"},
        {text:"弱电",code:"MAC_FB2"},
        {text:"基垫",code:"FB2_XH"},
        {text:"消防喷淋",code:"ELE_L_FB2"},
        {text:"消防栓",code:"ELE_H_FB2"},
    ],
    K_K1_JD_bottons:[
        {text:"排风管",code:"PIP_FB1"},
        {text:"强电",code:"MAC_FB1"},
        {text:"弱电",code:"FIR_FB1_ZP"},
        {text:"基垫",code:"FIR_FB1_XH"},
        {text:"消防喷淋",code:"ELE_L_FB1"},
        {text:"消防栓",code:"ELE_H_FB1"},
    ],
    G_G1_JD_bottons:[
        {text:"排水",code:"paishui"},
        {text:"积水",code:"jishui"},
        {text:"桥架",code:"qiaojia"},
        {text:"消防喷淋",code:"xiaofang"},
        {text:"消防栓",code:"xfs"},
    ],
    G_G2_JD_bottons:[
        {text:"排风管",code:"paifeng"},
        {text:"强电",code:"qiangdian"},
        {text:"弱电",code:"ruodian"},
        {text:"消防喷淋",code:"xiaofang"},
        {text:"消防栓",code:"xiaofangshuan"},
        {text:"基垫",code:"xiang"}
    ]
}
//光缆分类
export const modelbottons={
    "M_guandao1_pian":[
        {"title":"电力管线",models:["M_dianli_T_dianli"]},
        {"title":"信息管线",models:["M_tongxin_T_tongxin"]},
        {"title":"燃气管线",models:["M_ranqi_T_ranqi"]},
        {"title":"给水管线",models:["M_jishui_T_jishui"]},
        {"title":"雨水管线",models:["M_paishui_yushui_T_paishui_yushui"]},
        {"title":"污水管线",models:["M_paishui_wushui_T_paishui_wushuis"]},
    ],
    "M_guandao2_pian":[
        {"title":"电力管线",models:["M_dianli2_T_dianli"]},
        {"title":"信息管线",models:["M_tongxin2_T_tongxin"]},
        {"title":"燃气管线",models:["M_ranqi2_T_ranqi"]},
        {"title":"给水管线",models:["M_jishui2_T_jishui"]},
        {"title":"雨水管线",models:["M_paishui_yushui2_T_paishui_yushui"]},
        {"title":"污水管线",models:["M_paishui_wushui2_T_paishui_wushuis"]},
    ]
}
//每个页面模型显示独立样式   每个模型会针对给个背景图 所以先这样写
//暂时这样用 后面该数据结构
export const pagesback={
    "youzu":"shizhen-back",
    "growth":"growth-back",
    "modeltree":"modeltree-back",
    "modeltreet":"modeltree-back",
    "main":"main-page-back",
}



//生产楼层数据
let newloucengs=((size,st)=>{
    let result=[];
    for(var i=size;i>0;i--){
        result.push({
            modelname:"",
            code:st+i
        });
    }
    return result;
});
//模拟数据库返回数据
export const menudata = {
    headerlist:[
       
    ],
    selectmenuList: [
        {
            id: "1-1",
            title: "首页",
            icon: "shouye",
            path: "/main",
            list:[]
        },

        {
            id: "3-1",
            title: "问题管理",
            icon: "wenti",
            path:"/problemList",
            list: [

            ]
        },
        {
            id: "4-1",
            title: "资料管理",
            icon: "ziliao",
            path:"/management",
            list: [

            ]
        },
        {
            id: "5-1",
            title: "任务管理",
            icon: "renwu",
            path: '/mission',

        },
        {
            id:"6-1",
            title:"计划管理",
            icon:"jihua",
            list:[


                {
                    id: "6-1-1",
                    title:'进度计划管理',
                    path:'/scene',
                },
                {
                    id: "6-1-2",
                    title:'生长进度模拟',
                    path:'/growth',
                },
                {
                    id: "6-1-3",
                    title:'进度汇总模拟',
                    path:'/modeltree',
                },

            ]},

        {
            id: "8-1",
            title: "会议管理",
            icon: "huiyi",
            path: '/madmin',
            list: [
                // {
                //     id: "8-1-0",
                //     title: '会议文档模板',
                //     path: '/mdocuments'
                // },
                // {
                //     id: "8-1-1",
                //     title: '会议类型管理',
                //     path: '/mtype'
                // },
                // {
                //     id: "8-1-2",
                //     title: '会议管理',
                //     path: '/madmin'
                // },
                // {
                //     id: "8-1-3",
                //     title: '我的会议',
                //     path: '/meeting'
                // }

            ]
        },
        {
            id: "9-1",
            title: "系统管理",
            icon: "xitong",
            path:"system",
            list: [

                // {
                //     id: "9-1-0",
                //     title: '用户管理',
                //     path: '/admin'
                // },
                // {
                //     id: "9-1-1",
                //     title: '产权方管理',
                //     path:'/synergy'
                // },
                // {
                //     id: "9-1-2",
                //     title: '施工方管理',
                //     path:'/contractor'
                // },
                // {
                //     id: "9-1-3",
                //     title: '部门管理',
                //     path: '/department'
                // },
                // {
                //     id: "7-1-4",
                //     title: '角色管理',
                //     path: '/role'
                // },
                // {
                //     id: "9-1-5",
                //     title: '权限管理',
                //     path: '/rights'
                // }

            ]
        },
        {
            id: "10-1",
            title: "西岸应用系统",
            icon: "app",
            list: [

                {
                    id: "9-1-0",
                    title: '西岸运维系统',
                    path: '/sysapp?appid=w'
                },
                {
                    id: "9-1-1",
                    title: '远程招租系统',
                    path:'/sysapp?appid=y'
                },
               

            ]
        },
        {
            id: "11-1",
            title: "数据分析",
            icon: "shuju",
            path:"/syscount",
            list: [
            ]
        },
    ],
    selectProblems: Array(20).fill({
        id: new Date().getTime().toString().toLocaleUpperCase().substr(0, 10),
        createtime: new Date().toISOString(),
        createname: ["魔卡", "张子龙", "张飞"][parseInt(Math.random(3) * 3)],
        text: '游族地下基垫D区块F2排风问题',
        start: ["未处理", "已处理", "待处理"][parseInt(Math.random(3) * 3)],
        colsename: "张三",
        colsetime: new Date().toISOString()
    }),
    selectlouByCode:{
        youzu:{
            loucengs:newloucengs(16,'F').concat([{
                code:"",
                title:"地下",
                modelname:"M_B3_T_tujian_008"
            }]).concat([
                {
                    code:"B1",
                    modelname:"M_B3_T_tujian_008"
                },
                {
                    code:"B2",
                    modelname:"M_B3_T_tujian_009"},
                {
                    code:"B3",
                    modelname:"M_B3_T_tujian_010"
                },
            ]),
            modelkey:"dishangyanse_T_dl_zifaguang_01",
            pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1932523917,1037723591&fm=11&gp=0.jpg",
            menage:"游族网络是中国领先的互动娱乐供应商，立足全球化游戏研发与发行，知名IP管理，大数据与智能化，泛娱乐产业投资四大业务全面发展，整合上下游产业链打造精品内容，推出少年三国志、西游女儿国、三十六计、射雕英雄传、天使纪元等优秀产品，与全世界分享简单的快乐！\n" +
            "                    游族网络是中国领先的互动娱乐供应商，立足全球化游戏研发与发行，知名IP管理，大数据与智能化，泛娱乐产业投资四大业务全面发展，整合上下游产业链打造精品内容，推出少年三国志、西游女儿国、三十六计、射雕英雄传、天使纪元等优秀产品，与全世界分享简单的快乐！"
        },
        xiangmangguo:{
            loucengs:newloucengs(16,'F').concat([{
                code:"",
                title:"地下",
                modelname:"M_B3_T_tujian_008"
            }]).concat([
                {
                    code:"B1",
                    modelname:"M_B3_T_tujian_008"
                },
                {
                    code:"B2",
                    modelname:"M_B3_T_tujian_009"},
                {
                    code:"B3",
                    modelname:"M_B3_T_tujian_010"
                },
            ]),
            modelkey:"dishangyanse_T_dl_zifaguang_01",
            pic:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=195688195,2120911927&fm=15&gp=0.jpg",
            menage:`上海湘芒果文化投资有限公司于2013年1月6日在徐汇区市场监督管理局登记成立。法定代表人陈刚，公司经营范围包括文化行业投资，实业投资，文化艺术交流策划（除经纪）等
            游族网络是中国领先的互动娱乐供应商，立足全球化游戏研发与发行，知名IP管理，大数据与智能化，泛娱乐产业投资四大业务全面发展，整合上下游产业链打造精品内容，推出少年三国志、西游女儿国、三十六计、射雕英雄传、天使纪元等优秀产品，与全世界分享简单的快乐！`
        }
    }
}

//区块
export let kuaiqs={
    tops:{
        qus1:["E","J","K","F","L","M","G","N","0"],
        qus2:["E","J","K","F","L","M","G","N","0"],
    },
    bottoms:{
        qus1:["E","J","K","F","L","M","G","N","0"],
        qus2:["E","J","K","F","L","M","G","N","0"],
    }
}
export const dixiaclickmodelconfig={
    "M_T_B2_PIAN_B306":{
        colors:[],
    }
}


export  default {
    kuaiqs,
    menudata,
    modelbottons,
    mianconfig,
    pagesback
}