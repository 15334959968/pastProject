/***
 *  大连软件前端周期估算：
 *  首页表盘界面界面开发:3/天/人
 *  地球旋转界面:4/天/人
 *  大连三期界面:10/天/人
 *  大连三期界面具体三期11栋楼模型显示(每栋楼2/天/人):20/天/人
 *  大连三期界面具体三期11栋楼设施设备(每栋楼0.5/天/人):5/天/人
 *  产业运营主界面:  5/天/人
 *  同比数据对比展示界面5/天/人
 *  招商数据展示: 4/天/人
 *  物业数据展示: 4/天/人
 *  运营数据展示: 4/天/人
 *  智慧党建展示: 13/天/人
 *  易达云图数据对接(数据接口开发完成的前提下):7/天/人
 *  总计：79/天/人
 *
 *
 *
所有跟模型数据有关的数据源
 */
//暂用
export  const models={
    huandao:[
        {
            name: "Tt_ercengpingtai_MEP_02",
            img: 'Tt_ercengpingtai_MEP_02.png'
        },
        {
            name: "Tt_ercengpingtai_MEP_01",
            img: 'Tt_ercengpingtai_MEP_01.png'
        },
        {
            name: "T_ercengpingtai_MEP_03",
            img: 'T_ercengpingtai_MEP_03.jpg'
        },
        {
            name: "M_xiaofangshuan_MEP_G_B1_xfs",
            img: 'G_B1_xfs.png'
        },
        {
            name: "M_ercengpingtai_ST_zuo_Tt_ercengpingtai_03",
            img: 'Tt_ercengpingtai_03.png'
        },
        {
            name: "M_ercengpingtai_ST_you_Tt_ercengpingtai_05",
            img: 'Tt_ercengpingtai_05.png'
        },

        {
            name: "M_ercengpingtai_ST_you_T_ercengpingtai_01",
            img: 'T_ercengpingtai_01.jpg'
        },
        {
            name: "M_ercengpingtai_AR_zuo_Tt_ercengpingtai_02",
            img: 'Tt_ercengpingtai_MEP_02.png'
        },
        {
            name: "M_ercengpingtai_AR_zuo_T_ercengpingtai_01",
            img: 'T_ercengpingtai_01.jpg'
        },
        {
            name: "M_ercengpingtai_AR_you_Tt_ercengpingtai_04",
            img: 'Tt_ercengpingtai_04.png'
        },

        {
            name: "M_ercengpingtai_AR_you_T_pj_lanse_01_btm",
            img: 'pj_lanse_01.png'
        },
        {
            name: "M_ercengpingtai_AR_you_T_ercengpingtai_01",
            img: 'T_ercengpingtai_01.jpg'
        },

   ],
    huanxing:[
    {
        name: "M_XA_huandaoS_wall",
        img: 'T_tujian_009.jpg'
    },
    // {
    //     name: "M_XA_huandaoS_Top",
    //     img: 'T_tujian_006.jpg'
    // },
    {
        name: "M_XA_huandaoS_hengliang",
        img: 'huandao_S_hengliang.png'
    },
    {
        name: "M_XA_huandaoA_wall",
        img: 'T_tujian_005.jpg'
    },
    {
        name: "M_XA_huandaoA_floor",
        img: 'T_tujian_006.jpg'
    },
    {
        name: "M_XA_huandaoA_door",
        img: 'F_B1A_door.png'
    },




        {
            name: "M_XA_huandaoMEP_zhaoming",
            img: 'huandao_MEP_zhaoming.png'
        },
        {
            name: "M_XA_huandaoMEP_xiaofangshuan",
            img: 'G_B1_xfs.png'
        },
        {
            name: "M_XA_huandaoMEP_xiaofang",
            img: 'huandao_MEP_xiaofang.png'
        },
        {
            name: "M_XA_huandaoMEP_ruodian",
            img: 'huandao_MEP_ruodian.png'
        },
        {
            name: "M_XA_huandaoMEP_qiangdian",
            img: 'huandao_MEP_qiangdian.png'
        },
        {
            name: "M_XA_huandaoMEP_penlin",
            img: 'huandao_MEP_penlin.png'
        },
        {
            name: "M_XA_huandaoMEP_nuantong",
        }

    ],
    jidian:[
        {
        name: "M_T_B2_PIAN_B309",
        img: 'T_B2_PIAN_01.png'
       },
        {
            name: "M_T_B2_PIAN_B308",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B307",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B306",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B305",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B304",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B303",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B302",
            img: 'T_B2_PIAN_01.png'
        },
        {
            name: "M_T_B2_PIAN_B301",
            img: 'T_B2_PIAN_01.png'
        }],
    tingche:[
        {name: "M_T_B2_PIAN_B201", img: 'T_B2_PIAN_01.png'},
        {name: "M_T_B2_PIAN_B201_2", img: 'T_B2_PIAN_01.png'}
    ],
    dixaiceng1:[
        {
            name: "M_T_B2_PIAN_B309",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B308",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B307",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B306",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B305",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B304",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B303",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B302",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B301",
            img: 'T_B2_PIAN_01.png'
        }
    ],
    dixaiceng2:[
        {
            name: "M_T_B2_PIAN_B309",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B308",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B307",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B306",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B305",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B304",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B303",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B302",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B301",
            img: 'T_B2_PIAN_01.png'
        }
    ],
    dixaiceng3:[
        {
            name: "M_T_B2_PIAN_B309",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B308",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B307",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B306",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B305",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B304",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B303",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B302",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B301",
            img: 'T_B2_PIAN_01.png'
        }
    ],
    dixaiceng4:[
        {
            name: "M_T_B2_PIAN_B309",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B308",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B307",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B306",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B305",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B304",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B303",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B302",
            img: 'T_B2_PIAN_01.png'
        }, {
            name: "M_T_B2_PIAN_B301",
            img: 'T_B2_PIAN_01.png'
        }
    ],
    F_F2_JD:[
        {name: "M_XA_F_B2S_zhuzi",img:"T_tujian_006.jpg"},
        // {name: "M_XA_F_B2S_Top",img:"F_B2S_Top.png"},
        {name: "M_XA_F_B2S_hengliang",img:"F_B2S_hengliang.png"},

        {name: "M_XA_F_B2A_wenzi",img:"Tt_F_XA_AS_wenzi.png"},
        {name: "M_XA_F_B2A_qiang002",img:"T_F_B2A_qiang.jpg"},
        {name: "M_XA_F_B2A_qiang",img:"T_F_B2A_qiang_002.jpg"},
        {name: "M_XA_F_B2A_meng002",img:"F_B1A_door.png"},
        {name: "M_XA_F_B2A_meng",img:"T_tujian_004.jpg"},
        {name: "M_XA_F_B2A_louban",img:"Tt_F_B2A_louban.png"},
        {name: "M_XA_F_B2A_chuang",img:"Tt_XA_AS_jishuikeng.png"},
    ],
    F_F2_JD_GL:[
        {name: "M_XA_F_MEP_B2_jixiehuojingshebei",img:"F_B2_jixiehuojingshebei.png"},
        {name: "M_XA_F_MEP_B2_guandao",img:"F_B2_guandao.png"},
        {name: "M_XA_F_MEP_B2_fengguan",img:"F_B2_fengguan.png"},
        {name: "M_XA_F_MEP_B2_dianlanqiaojia",img:"F_B2_dianlanqiaojia.png"},

    ],
    F_F2_JD_JD:[
        {name: "M_XA_F_MEP_B2_jixiehuojingshebei",img:"F_B2_jixiehuojingshebei.png"},
        {name: "M_XA_F_MEP_B2_guandao",img:"F_B2_guandao.png"},
        {name: "M_XA_F_MEP_B2_fengguan",img:"F_B2_fengguan.png"},
        {name: "M_XA_F_MEP_B2_dianlanqiaojia",img:"F_B2_dianlanqiaojia.png"},
    ],
    F_F2_JD_JG:[
        {name: "M_XA_F_B2A_wenzi",img:"Tt_F_XA_AS_wenzi.png"},
        {name: "M_XA_F_B2A_qiang002",img:"T_F_B2A_qiang.jpg"},
        {name: "M_XA_F_B2A_qiang",img:"T_F_B2A_qiang_002.jpg"},
        {name: "M_XA_F_B2A_meng002",img:"F_B1A_door.png"},
        {name: "M_XA_F_B2A_meng",img:"T_tujian_004.jpg"},
        {name: "M_XA_F_B2A_louban",img:"Tt_F_B2A_louban.png"},
        {name: "M_XA_F_B2A_chuang",img:"Tt_XA_AS_jishuikeng.png"},
    ],
    F_F2_JD_JZ:[
        {name: "M_XA_F_B2S_zhuzi",img:"T_tujian_006.jpg"},
        {name: "M_XA_F_B2S_Top",img:"F_B2S_Top.png"},
        {name: "M_XA_F_B2S_hengliang",img:"F_B2S_hengliang.png"},
    ],
    F_F1_JD:[
        {name: "M_XA_F_B1S_zhuzi",img:"T_tujian_006.jpg"},
        // {name: "M_XA_F_B1S_Top",img:"F_B1S_Top.png"},
        {name: "M_XA_F_B1S_hengliang",img:"F_B1S_hengliang.png"},

        {name: "M_XA_F_B1A_tujian_006",img:"T_tujian_006.jpg"},
        {name: "M_XA_F_B1A_text",img:"F_B1_A_text.png"},
        {name: "M_XA_F_B1A_floor",img:"F_B1A_floor.png",nottransparent:true},
        {name: "M_XA_F_B1A_door",img:"F_B1A_door.png"},
    ],
    //ＧＬ
    F_F1_JD_GL:[
        {name: "M_F_MEP_B1_jixiehuojingshebei",img:"F_B1_jixiehuojingshebei.png"},
        {name: "M_F_MEP_B1_guandaofujian",img:"F_B1_guandaofujian.png"},
        {name: "M_F_MEP_B1_fengguan",img:"F_B1_fengguan.png"},
        {name: "M_F_MEP_B1_dianlanqiaojiapeijian",img:"F_B1_dianlanqiaojiapeijian.png"},
    ],
    F_F1_JD_JD:[
        {name: "M_F_MEP_B1_jixiehuojingshebei",img:"F_B1_jixiehuojingshebei.png"},
        {name: "M_F_MEP_B1_guandaofujian",img:"F_B1_guandaofujian.png"},
        {name: "M_F_MEP_B1_fengguan",img:"F_B1_fengguan.png"},
        {name: "M_F_MEP_B1_dianlanqiaojiapeijian",img:"F_B1_dianlanqiaojiapeijian.png"},
    ],
    F_F1_JD_JG:[
        {name: "M_XA_F_B1A_tujian_006",img:"T_tujian_006.jpg"},
        {name: "M_XA_F_B1A_text",img:"F_B1_A_text.png"},
        {name: "M_XA_F_B1A_floor",img:"F_B1A_floor.png",nottransparent:true},
        {name: "M_XA_F_B1A_door",img:"F_B1A_door.png"},
    ],
    F_F1_JD_JZ:[
        {name: "M_XA_F_B1S_zhuzi",img:"T_tujian_006.jpg"},
        {name: "M_XA_F_B1S_Top",img:"F_B1S_Top.png"},
        {name: "M_XA_F_B1S_hengliang",img:"F_B1S_hengliang.png"},
    ],
    // M_XA_N_MEP_B2.max N 块  基垫
    N_N2_JD:[
        {name: "M_XA_N_B2S_zhuzi002",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2S_zhuzi",img:"Tt_N_B2S_louban.png"},
        {name: "M_XA_N_B2S_qiang",img:"T_tujian_009.jpg"},
        {name: "M_XA_N_B2S_louti",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2S_louban002",img:"Tt_N_B2S_louban.png"},
        // {name: "M_XA_N_B2S_louban",img:"Tt_N_B2S_louban.png"},
        {name: "M_XA_N_B2S_liang002",img:"Tt_N_B2S_liang002.png"},
        {name: "M_XA_N_B2S_liang001",img:"Tt_N_B2S_liang001.png"},
        {name: "M_XA_N_B2S_langang",img:"Tt_K_B2A_langan.png"},

        {name: "M_XA_N_B2A_wenzi",img:"Tt_N_XA_AS_wenzi.png"},
        {name: "M_XA_N_B2A_tingchewei",img:"Tt_N_XA_AS_tingchewei.png"},
        {name: "M_XA_N_B2A_tiaowenqiang",img:"T_tiaowenqiangB3_003.jpg"},
        {name: "M_XA_N_B2A_qiang",img:"T_tujian_005.jpg"},
        {name: "M_XA_N_B2A_meng",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2A_louban",img:"Tt_N_XA_AS_louban.png",nottransparent:true},

        {name: "M_XA_N_B2A_qiang",img:"Tt_N_XA_AS_louban.png"},
        {name: "M_XA_N_B2A_langan",img:"Tt_K_B2A_langan.png"},
        {name: "M_XA_N_B2A_jishuixiang",img:"Tt_XA_AS_jishuikeng.png"},
        {name: "M_XA_N_B2A_futi",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2A_fanghuoqiang",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2A_boli_btm",img:"pj_lanse_01.png"},
    ],
    //ＧＬ
    N_N2_JD_GL:[
        {name: "M_XA_N_MEP_B2_xiaofang",img:"N_B2_xiaofang.png"},
        {name: "M_XA_N_MEP_B2_xiaofang_mhq",img:"G_B1_xfs.png"},
        {name: "M_XA_N_MEP_B2_qiaojia",img:"N_B2_qiaojia.png"},
        {name: "M_XA_N_MEP_B2_paishui",img:"N_B2_paishui.png"},
        {name: "M_XA_N_MEP_B2_nuantongshui",img:"N_B2_nuantongshui.png"},
        {name: "M_XA_N_MEP_B2_nengyuanzhongxin",img:"N_B2_nengyuanzhongxin.png"},
        {name: "M_XA_N_MEP_B2_dishang",img:"N_B2_dishang.png"},

    ],
    N_N2_JD_JD:[
        {name: "M_XA_N_MEP_B2_xiaofang",img:"N_B2_xiaofang.png"},
        {name: "M_XA_N_MEP_B2_qiaojia",img:"N_B2_qiaojia.png"},
        {name: "M_XA_N_MEP_B2_paishui",img:"N_B2_paishui.png"},
        {name: "M_XA_N_MEP_B2_nuantongshui",img:"N_B2_nuantongshui.png"},
        {name: "M_XA_N_MEP_B2_nengyuanzhongxin",img:"N_B2_nengyuanzhongxin.png"},
        {name: "M_XA_N_MEP_B2_dishang",img:"N_B2_dishang.png"},
        // {name: "M_XA_N_MEP_B2_all",img:"N_B2_all.png"},
    ],
    N_N2_JD_JG:[
        {name: "M_XA_N_B2S_zhuzi002",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2S_zhuzi",img:"Tt_N_B2S_louban.png"},
        {name: "M_XA_N_B2S_qiang",img:"T_tujian_009.jpg"},
        {name: "M_XA_N_B2S_louti",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2S_louban002",img:"Tt_N_B2S_louban.png"},
        {name: "M_XA_N_B2A_louban",img:"Tt_N_XA_AS_louban.png",nottransparent:true},
        {name: "M_XA_N_B2S_liang002",img:"Tt_N_B2S_liang002.png"},
        {name: "M_XA_N_B2S_liang001",img:"Tt_N_B2S_liang001.png"},
        {name: "M_XA_N_B2S_langang",img:"Tt_K_B2A_langan.png"},
    ],
    N_N2_JD_JZ:[
        {name: "M_XA_N_B2A_wenzi",img:"Tt_N_XA_AS_wenzi.png"},
        {name: "M_XA_N_B2A_tingchewei",img:"Tt_N_XA_AS_tingchewei.png"},
        {name: "M_XA_N_B2A_tiaowenqiang",img:"T_tiaowenqiangB3_003.jpg"},
        {name: "M_XA_N_B2A_qiang",img:"T_tujian_005.jpg"},
        {name: "M_XA_N_B2A_meng",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2A_louban",img:"Tt_N_XA_AS_louban.png",nottransparent:true},
        {name: "M_XA_N_B2A_qiang",img:"Tt_N_XA_AS_louban.png"},
        {name: "M_XA_N_B2A_langan",img:"Tt_K_B2A_langan.png"},
        {name: "M_XA_N_B2A_jishuixiang",img:"Tt_XA_AS_jishuikeng.png"},
        {name: "M_XA_N_B2A_futi",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2A_fanghuoqiang",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B2A_boli_btm",img:"pj_lanse_01.png"},
    ],
    // M_XA_N_AS_B1 N 块  基垫
    N_N1_JD:[
        {name: "M_XA_N_B1S_zhuzi",img:"N_B1_A_floor_02.png"},
        {name: "M_XA_N_B1S_hengliang",img:"N_B1S_hengliang.png"},

        {name: "M_XA_N_B1A_tujian_005",img:"T_tujian_005.jpg"},
        {name: "M_XA_N_B1A_tujian_004",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B1A_text",img:"N_B1_A_text.png"},
        {name: "M_XA_N_B1A_glass",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B1A_floor_02",img:"N_B1_A_floor_02.png"},
        {name: "M_XA_N_B1A_floor_01",img:"N_B1_A_floor_01.png"},
        {name: "M_XA_N_B1A_floor",img:"N_B1_A_floor.png"},
    ],
    //ＧＬ
    N_N1_JD_GL:[
        {name: "M_N_MEP_B1_penlin",img:"N_B1_penlin.png"},
        
        {name: "M_N_MEP_B1_qiangdian",img:"N_B1_qiangdian.png"},
        {name: "M_N_MEP_B1_fengguan",img:"N_B1_fengguan.png"},
        {name: "M_N_MEP_B1_fengguan_ti",img:"N_B1_fengguan.png"},
        {name: "M_N_MEP_B1_nengyuanzhongxin",img:"N_B1_nengyuanzhongxin.png"},
        {name: "M_N_MEP_B1_nengyuanzhongxin_ti",img:"N_B1_nengyuanzhongxin.png"},
        {name: "M_N_MEP_B1_ruodian",img:"N_B1_ruodian.png"},
        {name: "M_N_MEP_B1_ruodian_ti",img:"N_B1_ruodian.png"},
        


        {name: "M_N_MEP_B1_xiaohuoshuan",img:"N_B1_xiaohuoshuan.png"},
        {name: "M_N_MEP_B1_shizhengguanlang",img:"N_B1_shizhengguanlang.png"},
        {name: "M_N_MEP_B1_shizhengguanlang_ti",img:"N_B1_shizhengguanlang.png"},
        {name: "M_N_MEP_B1_xiaohuoshuan2",img:"N_B1_xiaohuoshuan2.png"},
        {name: "M_N_MEP_B1_xiaohuoshuan2_ti",img:"G_B1_xfs.png"},
        
        
    
        
     
    ],
    N_N1_JD_JD:[
        {name: "M_N_MEP_B1_xiaohuoshuan",img:"N_B1_xiaohuoshuan.png"},
        {name: "M_N_MEP_B1_shizhengguanlang",img:"N_B1_shizhengguanlang.png"},
        {name: "M_N_MEP_B1_shizhengguanlang_ti",img:"N_B1_shizhengguanlang.png"},
        {name: "M_N_MEP_B1_xiaohuoshuan2",img:"N_B1_xiaohuoshuan2.png"},
        {name: "M_N_MEP_B1_xiaohuoshuan2_ti",img:"G_B1_xfs.png"},


        {name: "M_N_MEP_B1_ruodian",img:"N_B1_ruodian.png"},
        {name: "M_N_MEP_B1_ruodian_ti",img:"N_B1_ruodian.png"},
        {name: "M_N_MEP_B1_qiangdian",img:"N_B1_qiangdian.png"},
        {name: "M_N_MEP_B1_penlin",img:"N_B1_penlin.png"},
        {name: "M_N_MEP_B1_nengyuanzhongxin",img:"N_B1_nengyuanzhongxin.png"},
        {name: "M_N_MEP_B1_nengyuanzhongxin_ti",img:"N_B1_nengyuanzhongxin.png"},
        {name: "M_N_MEP_B1_fengguan",img:"N_B1_fengguan.png"},
        {name: "M_N_MEP_B1_fengguan_ti",img:"N_B1_fengguan.png"},
        // {name: "M_N_MEP_B1_all",img:"N_B1_all.png"},
    ],
    N_N1_JD_JG:[
        {name: "M_XA_N_B1S_zhuzi",img:"N_B1_A_floor_02.png"},
        {name: "M_XA_N_B1S_hengliang",img:"N_B1S_hengliang.png"},
    ],
    N_N1_JD_JZ:[
        {name: "M_XA_N_B1A_tujian_005",img:"T_tujian_005.jpg"},
        {name: "M_XA_N_B1A_tujian_004",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B1A_text",img:"N_B1_A_text.png"},
        {name: "M_XA_N_B1A_glass",img:"T_tujian_004.jpg"},
        {name: "M_XA_N_B1A_floor_02",img:"N_B1_A_floor_02.png"},
        {name: "M_XA_N_B1A_floor_01",img:"N_B1_A_floor_01.png"},
        {name: "M_XA_N_B1A_floor",img:"N_B1_A_floor.png"},
    ],



    // M_XA_K_AS_B1 K 块  基垫
    K_K1_JD:[
        {name: "M_K_B1S_tujian01",img:"T_tujian_004.jpg"},
        {name: "M_K_B1S_tujian",img:"T_tujian_004.jpg"},
        {name: "M_K_B1S_podao",img:"T_tujian_004.jpg"},
        {name: "M_K_B1S_hengliang",img:"K_B1S_hengliang.png"},
        // {name: "M_K_B1S_ding",img:"T_tujian_004.jpg"},
        {name: "M_K_B1A_T_tujian_006",img:"T_tujian_006.jpg"},
        {name: "M_K_B1A_Parking",img:"K_B1_A_Parking.png"},
        {name: "M_K_B1A_lgfs",img:"K_B1_A_lgfs.png"},
        {name: "M_K_B1A_floor",img:"K_B1_A_floor.png"},
        {name: "M_K_B1A_door",img:"T_tujian_004.jpg"},
        {name: "M_K_B1A_boli"},
   ],
    K_K1_JD_GL:[
        {name: "M_K_MEP_B1_SDCK_M_PIP_FB1",img:"SDCK_M_PIP_FB1.png"},
        {name: "M_K_MEP_B1_SDCK_M_MAC_FB1",img:"SDCK_M_MAC_FB1.png"},
        {name: "M_K_MEP_B1_SDCK_M_FIR_FB1_ZP",img:"SDCK_M_FIR_FB1_ZP.png"},
        {name: "M_K_MEP_B1_SDCK_M_FIR_FB1_XH",img:"SDCK_M_FIR_FB1_XH.png"},
        {name: "B1_SDCK_M_FIR_FB1_XH",img:"SDCK_M_FIR_FB1_XH.png"},
        {name: "M_K_MEP_B1_SDCK_M_ELE_H_FB1",img:"SDCK_M_ELE_H_FB1.png"},
        {name: "M_K_MEP_B1",img:"M_XA_K_MEP_B1.png"},
    ],
    K_K1_JD_JD:[
        {name: "M_K_MEP_B1_SDCK_M_PIP_FB1",img:"SDCK_M_PIP_FB1.png"},
        {name: "M_K_MEP_B1_SDCK_M_MAC_FB1",img:"SDCK_M_MAC_FB1.png"},
        {name: "M_K_MEP_B1_SDCK_M_FIR_FB1_ZP",img:"SDCK_M_FIR_FB1_ZP.png"},
        {name: "M_K_MEP_B1_SDCK_M_FIR_FB1_XH",img:"SDCK_M_FIR_FB1_XH.png"},
        {name: "B1_SDCK_M_FIR_FB1_XH",img:"SDCK_M_FIR_FB1_XH.png"},
        {name: "M_K_MEP_B1_SDCK_M_ELE_H_FB1",img:"SDCK_M_ELE_H_FB1.png"},
        {name: "M_K_MEP_B1",img:"M_XA_K_MEP_B1.png"},
    ],
    K_K1_JD_JG:[
        {name: "M_K_B1A_T_tujian_006",img:"T_tujian_006.jpg"},
        {name: "M_K_B1A_Parking",img:"K_B1_A_Parking.png"},
        {name: "M_K_B1A_lgfs",img:"K_B1_A_lgfs.png"},
        {name: "M_K_B1A_floor",img:"K_B1_A_floor.png"},
        {name: "M_K_B1A_door",img:"T_tujian_004.jpg"},
        {name: "M_K_B1A_boli"},

    ],
    K_K1_JD_JZ:[
        {name: "M_K_B1S_tujian01",img:"T_tujian_004.jpg"},
        {name: "M_K_B1S_tujian",img:"T_tujian_004.jpg"},
        {name: "M_K_B1S_podao",img:"T_tujian_004.jpg"},
        {name: "M_K_B1S_hengliang",img:"K_B1S_hengliang.png"},
        {name: "M_K_B1S_ding",img:"T_tujian_004.jpg"},
    ],

    // M_XA_K_AS_B2 块 文件 基垫
    K_K2_JD:[
        {name: "M_XA_K_B2S_zhuzi",img:"T_K_B2A_qiang.jpg"},
        {name: "M_XA_K_B2S_louti",img:"T_tujian_004.jpg"},
        {name: "M_XA_K_B2S_louban002",img:"T_tujian_004.jpg"},
        // {name: "M_XA_K_B2S_louban",img:"Tt_K_B2S_louban.png"},

        {name: "M_XA_K_B2S_liang",img:"Tt_K_B2S_liang.png"},
        {name: "M_XA_K_B2A_qiang",img:"T_K_B2A_qiang.jpg"},
        {name: "M_XA_K_B2A_meng",img:"T_tujian_004.jpg"},

        {name: "M_XA_K_B2A_langan",img:"Tt_K_B2A_langan.png"},
        // {name: "M_XA_K_B2A_di",img:"Tt_K_B2A_louban.png"},
        {name: "M_K_B1A_door",img:"pj_lanse_01.png"},
        {name: "M_XA_K_B2A_baiyecuang",img:"Tt_K_B2A_baiyecuang.png"},
    ],
    // M_XA_K_MEP_B2 模型文件   管廊
    K_K2_JD_JD:[
        {name: "M_K_MEP_B2_SDCK_M_PIP_FB2",img:"SDCK_M_PIP_FB2.png"},
        {name: "M_K_MEP_B2_SDCK_M_MAC_FB2",img:"SDCK_M_MAC_FB2.png"},
        {name: "M_XA_K_B2S_louban002",img:"SDCK_M_FIR_FB2_ZP.png"},
        {name: "M_K_MEP_B2_SDCK_M_FIR_FB2_XH",img:"SDCK_M_FIR_FB2_XH.png"},
        {name: "M_K_MEP_B2_SDCK_M_ELE_L_FB2",img:"SDCK_M_ELE_L_FB2.png"},
        {name: "M_K_MEP_B2_SDCK_M_ELE_H_FB2",img:"SDCK_M_ELE_H_FB2.png"},
        {name: "M_K_MEP_B2",img:"M_XA_K_MEP_B2.png"},
    ],
    K_K2_JD_JG:[
        {name: "M_XA_K_B2A_qiang",img:"T_K_B2A_qiang.jpg"},
        {name: "M_XA_K_B2A_meng",img:"T_tujian_004.jpg"},
        {name: "M_XA_K_B2A_langan",img:"Tt_K_B2A_langan.png"},
        {name: "M_XA_K_B2A_di",img:"Tt_K_B2A_louban.png"},
        {name: "M_K_B1A_door",img:"pj_lanse_01.png"},
        {name: "M_XA_K_B2A_baiyecuang",img:"Tt_K_B2A_baiyecuang.png"},
    ],
    K_K2_JD_JZ:[
        {name: "M_XA_K_B2S_zhuzi",img:"T_K_B2A_qiang.jpg"},
        {name: "M_XA_K_B2S_louti",img:"T_tujian_004.jpg"},
        {name: "M_XA_K_B2S_louban002",img:"T_tujian_004.jpg"},
        {name: "M_XA_K_B2S_louban",img:"Tt_K_B2S_louban.png"},
        {name: "M_XA_K_B2S_liang",img:"Tt_K_B2S_liang.png"},
    ],

    modeltree:[
        {name: "M_G_B1S_T_tujian_009",img:"T_tujian_009.jpg"},
        {name: 'M_G_B1S_T_tujian_006',img:"T_tujian_006.jpg"},
        {name: 'M_G_B1A_Tt_langanB3_003',img:"Tt_langanB3_003.png"},
        {name: 'M_G_B1A_Tt_G_B1_cheweixian'},
        {name: 'M_G_B1A_T_tujian_005_huang',img:"T_tujian_005.jpg"},
        {name: 'M_G_B1A_T_tujian_005_bai',img:"T_tujian_005.jpg"},
        {name: 'M_G_B1A_T_tujian_004_chewei',img:"T_tujian_004.jpg"},
        {name: 'M_G_B1A_T_tujian_004',img:"T_tujian_004.jpg"},
        {name: 'M_G_B1A_T_tiaowenqiangB3_003',img:"T_tiaowenqiangB3_003.jpg"},
        {name: 'M_G_B1A_T_pj_lanse_01_btm',img:"pj_lanse_01_ptm.jpg"},
        {name: 'M_G_B1A_T_B1_di_01'},
    ],


    // M_XA_G_AS_B2_b 基垫文件  Tt_G_B2_tujian_001.png
    G_G2_JD:[
        {name: "M_G_B2S_Tt_G_B2_tujian_002",img:"Tt_G_B2_tujian_002.png"},
        {name: 'M_G_B2S_T_tujian_009',img:"T_tujian_009.jpg",nottransparent:true},
        {name: 'M_G_B2A_Tt_langanB3_003',img:"Tt_langanB3_003.png",nottransparent:true},
        {name: 'M_G_B2A_Tt_G_B2_tujian_001',img:"Tt_G_B2_tujian_001.png",nottransparent:true},
        {name: 'M_G_B2A_T_tujian_005',img:"T_tujian_005.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tujian_004',img:"T_tujian_004.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tiaowenqiangB3_003',img:"T_tiaowenqiangB3_003.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_pj_lanse_01_btm',img:"pj_lanse_01_ptm.jpg",nottransparent:true},
    ],
    //M_XA_G_MEP_B2_b 管廊拆分文件
    G_G2_GL:[
       
        {name: 'M_G_MEP_B2_shang_paifengguang',img:"Tt_CMG_G_B_S_MEP_shang_B2-B.png"},
        {name: 'M_G_MEP_B2_xia_paifengguang',img:"Tt_CMG_G_B_S_MEP_xia_B2-B_he.png"},
        {name: 'M_G_MEP_B2_xia_loutiguandao',img:"T_tujian_004.jpg"},
        {name: 'M_G_MEP_B2_xia_jingyaxiang',img:"T_tujian_004.jpg"},
        {name: 'M_G_MEP_B2_xia_qiangdian_pian',img:"Tt_CMG_G_B_S_MEP_xia_B2-B_QD.png"},
        {name: 'M_G_MEP_B2_xia_ruodian_pian',img:"Tt_CMG_G_B_S_MEP_xia_B2-B_RD.png"},
        {name: 'M_G_MEP_B2_xia_xiaofangshuan',img:"GB1_xfs.png"},
        {name: 'M_G_MEP_B2_xia_xiaofang_pian',img:"Tt_CMG_G_B_S_MEP_xia_B2-B_he.png"},
        {name: 'M_G_MEP_B2_xia_xiaofang',img:"Tt_CMG_G_B_S_MEP_xia_B2-B_XF.png"},
      
      
 
       
        {name: 'M_G_MEP_B2_xia_fengjixiang',img:"T_tujian_004.jpg"},
    ],
    G_G2_JD_JG:[
        {name: 'M_G_B2S_T_tujian_009',img:"T_tujian_009.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tujian_005',img:"T_tujian_005.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tujian_004',img:"T_tujian_004.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tiaowenqiangB3_003',img:"T_tiaowenqiangB3_003.jpg",nottransparent:true},
        {name: 'M_G_B2A_Tt_langanB3_003',img:"Tt_langanB3_003.png",nottransparent:true},
        {name: 'M_G_B2A_Tt_G_B2_tujian_001',img:"Tt_G_B2_tujian_001.png",nottransparent:true},
    ],
    G_G2_JD_JZ:[
        {name: 'M_G_B2S_T_tujian_009',img:"T_tujian_009.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tujian_005',img:"T_tujian_005.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tujian_004',img:"T_tujian_004.jpg",nottransparent:true},
        {name: 'M_G_B2A_T_tiaowenqiangB3_003',img:"T_tiaowenqiangB3_003.jpg",nottransparent:true},
        {name: 'M_G_B2A_Tt_langanB3_003',img:"Tt_langanB3_003.png",nottransparent:true},
    ],
    // M_XA_G_MEP_B1_b  管廊拆分文件
    // M_XA_G_AS_B1_b 基垫文件  T_tujianB3_002.png
    G_G1_JD:[
        {name: "M_G_B1S_T_tujian_009",img:"T_tujian_009.jpg"},
        {name: 'M_G_B1S_T_tujian_006',img:"T_tujian_006.jpg"},


        // {name: 'M_G_B1S_T_hengliangB1_02'},
        // {name: 'M_G_B1S_T_hengliangB1_01'},

        // {name: 'M_G_B1S_T_B1_ding_01'},
        // {name: 'M_G_B1S_T_B1_ding_02'},

        {name: 'M_G_B1A_Tt_langanB3_003',img:"Tt_langanB3_003.png"},
        {name: 'M_G_B1A_Tt_G_B1_cheweixian'},
        {name: 'M_G_B1A_T_tujian_005_huang',img:"T_tujian_005.jpg"},
        {name: 'M_G_B1A_T_tujian_005_bai',img:"T_tujian_005.jpg"},
        {name: 'M_G_B1A_T_tujian_004_chewei',img:"T_tujian_004.jpg"},
        {name: 'M_G_B1A_T_tujian_004',img:"T_tujian_004.jpg"},
        {name: 'M_G_B1A_T_tiaowenqiangB3_003',img:"T_tiaowenqiangB3_003.jpg"},
        {name: 'M_G_B1A_T_pj_lanse_01_btm',img:"pj_lanse_01_ptm.jpg"},
        {name: 'M_G_B1A_T_B1_di_01'},
    ],
    G_G1_JD_JG:[
        {name: 'M_G_B1A_Tt_langanB3_003',img:"Tt_langanB3_003.png"},
        {name: 'M_G_B1A_Tt_G_B1_cheweixian'},
        {name: 'M_G_B1A_T_tujian_005_huang',img:"T_tujian_005.jpg"},
        {name: 'M_G_B1A_T_tujian_005_bai',img:"T_tujian_005.jpg"},
        {name: 'M_G_B1A_T_tujian_004_chewei',img:"T_tujian_004.jpg"},
        {name: 'M_G_B1A_T_tujian_004',img:"T_tujian_004.jpg"},
        {name: 'M_G_B1A_T_tiaowenqiangB3_003',img:"T_tiaowenqiangB3_003.jpg"},
        {name: 'M_G_B1A_T_pj_lanse_01_btm',img:"pj_lanse_01_ptm.jpg"},
        {name: 'M_G_B1A_T_B1_di_01'},
    ],
    G_G1_JD_JZ:[
        {name: "M_G_B1S_T_tujian_009",img:"T_tujian_009.jpg"},
        {name: 'M_G_B1S_T_tujian_006',img:"T_tujian_006.jpg"},
        {name: 'M_G_B1S_T_hengliangB1_02'},
        {name: 'M_G_B1S_T_hengliangB1_01'},
        {name: 'M_G_B1S_T_B1_ding_01'},
        {name: 'M_G_B1S_T_B1_ding_02'},
    ],
    G_G1_GL:[
        {name: "M_G_MEP_B1_xiaofang",img:"G_B1_xiaofang.png"},
        {name: 'M_G_MEP_B1_xfs',img:"G_B1_xfs.png"},
        {name: 'M_G_MEP_B1_qiaojia',img:"G_B1_qiaojia.png"},
        {name: 'M_G_MEP_B1_paishui',img:"G_B1_paishui.png"},
        {name: 'M_G_MEP_B1_M',img:"G_B1_M.png"},
        {name: 'M_G_MEP_B1_jishui',img:"G_B1_jishui.png"},
    ],

  main:[
      {name: 'M_T_luming_01', img: 'T_luming_01.png'},
      {name: 'M_ludengshu',fbx:true,nottransparent:true},


      // {name: 'dimian_T_yz_04', img: 'T_yz_04.jpg'},
      // {name: "tiankong_sky-h-cl_010_02", img: "sky-h-cl_010_02.jpg"},
      // {name: "zghx_T_zghx_03_btm_01", img: "T_zghx_03.png"},
      // {name: "zghx_T_zghx_02_btm_01", img: "T_zghx_02.png"},
      // {name: "zghx_T_zghx_01_01", img: "T_zghx_01.jpg"},
      // {name: "yoozoo_T_yz_001", img: "T_yz_001.jpg"},
      // {name: "M_Tt_SHMZX_GAO_02", img: "Tt_SHMZX_GAO_02.png"},
      // {name: "M_T_SHMZX_GAO_01", img: "T_SHMZX_GAO_01.jpg"},
      // {name: 'baimo_T_yz_001', img: 'T_yz_001.jpg'},
      // {name: "biao_mengzhongxin01", img: "meng.png"},
      // {name: "biao_mengzhongxin02", img: "meng.png"},
      // {name: "biao_xiangmangguo01", img: "manguo.png"},
      // {name: "M_Tt_WDXX_01", img: "T_zghx_02.png"},
      // {name: "M_T_WDXX_01", img: "T_WDXX_01.jpg"},
      // {name: "peilou_T_yz_001_BTM", img: "pj_lanse_011.png"},
      // {name: "biao_zhongguohuaxin", img: "wanda.png"},
      // {name: "biao_xianchuanmei", img: "meng.png"},
      // {name: "biao_wandaxinxi", img: "shihe.png"},
      // {name: "biao_Tencent", img: "tengxun.png"},
      // {name: "biao_youzoo", img: "youzu.png"},
      // {name: "biao_bunuozhiye", img: "zhiye.png"},
      // {name: 'dimian_T_yz_04', img: 'T_yz_04.jpg'},
      // {name: 'dimian_T_yz_04_3', img: "T_dk_01.jpg"},
      // {name: 'dimian_T_yz_04_1', img: 'T_yz_05.jpg'},
      // {name: 'yoozoo_T_yz_001_02', img: 'T_yz_001.jpg'},
      // {name: 'zghx_T_zghx_01_02', img: 'T_zghx_01.jpg'},

      {name: 'M_guandao1_pian',img: 'T_guanlang_pian01.png'},
      {name: 'M_guandao2_pian', img: 'T_guanlang_pian01.png'},
      {name: 'dimian_T_yz_04', img: 'T_yz_04.jpg'},
      {name: 'dimian_T_yz_04_1', img: 'T_dk_01.jpg'},
      {name: 'dimian_T_yz_04_3', img: "T_dk_01.jpg"},
      {name: 'dimian_T_yz_04_5', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_O', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_N', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_K', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_J', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_I', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_H', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_G', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_F', img: "T_yz_05.jpg"},
      {name: 'dimian_T_dk_01_E', img: "T_yz_05.jpg"},
      {name: "tiankong_sky-h-cl_010_02", img: "sky-h-cl_010_02.jpg"},
      {name: "M_T_luming_01", img: "T_luming_01.png"},
      {name: "zghx_T_zghx_03_btm_01", img: "T_zghx_03.png"},
      {name: "zghx_T_zghx_02_btm_01", img: "T_zghx_02.png"},
      {name: "zghx_T_zghx_01_01", img: "T_zghx_01.jpg"},
      {name: "yoozoo_T_yz_001", img: "T_yz_001.jpg"},
      {name: "M_Tt_SHMZX_GAO_02", img: "Tt_SHMZX_GAO_02.png"},
      {name: "M_T_SHMZX_GAO_01", img: "T_SHMZX_GAO_01.jpg"},
      {name: 'baimo_T_yz_001', img: 'T_yz_001.jpg'},
      {name: "biao_mengzhongxin01", img: "meng.png"},
      {name: "biao_mengzhongxin02", img: "meng.png"},
      {name: "biao_xiangmangguo01", img: "manguo.png"},
      {name: "M_Tt_WDXX_01", img: "T_zghx_02.png"},
      {name: "M_T_WDXX_01", img: "T_WDXX_01.jpg"},
      {name: "peilou_T_yz_001_BTM", img: "pj_lanse_011.png"},
      {name: "biao_zhongguohuaxin", img: "huaxin.png"},
      {name: "biao_xianchuanmei", img: "meng.png"},
      {name: "biao_wandaxinxi", img: "dazhongjiaotong.png"},
      {name: "biao_Tencent", img: "tengxun.png"},
      {name: "biao_youzoo", img: "youzu.png"},
      {name: "biao_bunuozhiye", img: "zhiye.png"},
      {name: 'dimian_T_yz_04', img: 'T_yz_04.jpg'},
      {name: 'dimian_T_yz_04_3', img: "T_dk_01.jpg"},
      {name: 'dimian_T_yz_04_1', img: 'T_yz_05.jpg'},
      {name: 'yoozoo_T_yz_001_02', img: 'T_yz_001.jpg'},
      {name: 'zghx_T_zghx_01_02', img: 'T_zghx_01.jpg'},





  ],
  daolu:[
      {name: "M_T_luming_01", img: "T_luming_01.png"},
      {name: 'dimian_T_yz_04_5', img: "T_yz_05.jpg"},
    ],
  guanlan:[
      {name: 'M_guandao1_pian',img: 'T_guanlang_pian01.png'},
      {name: 'M_guandao2_pian', img: 'T_guanlang_pian01.png'},
  ],
    M_guandao1_pian:[{
        "name": "M_dianli_T_dianli_show",
        "img": "T_dianli.png"
    }, {
        "name": "M_jishui_T_jishui_show",
        "img": "T_jishui.png"
    }, {
        "name": "M_paishui_wushui_T_paishui_wushuis_show",
        "img": "T_paishui_wushui.png"
    }, {
        "name": "M_paishui_yushui_T_paishui_yushui_show",
        "img": "T_paishui_yushui.png"
    }, {
        "name": "M_ranqi_T_ranqi_show",
        "img": "T_ranqi.png"
    }, {
        "name": "M_tongxin_T_tongxin_show",
        "img": "T_tongxin.png"
    }, {
        "name": "M_chukou_jishui_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_chukou_ranqi_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_chukou_taosheng_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_chukou_tongxin_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_dianlizhijia_T_zhijia_show",
        "img": "T_zhijia.png"
    }, {
        "name": "M_jvxingwantou_fengguan_T_jvxingwantou_fengguan_show",
        "img": "T_jvxingwantou_fengguan.png"
    }, {
        "name": "M_louban_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_louti_T_louti_show",
        "img": "T_louti.png"
    }, {
        "name": "M_men_T_men_show",
        "img": "T_men.png"
    }, {
        "name": "M_qiang_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_ranqizhichengzhu_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_tongxinzhijia_T_zhijia_show",
        "img": "T_zhijia.png"
    }],
    M_guandao2_pian:[{
        "name": "M_dianli2_T_dianli_show",
        "img": "T_dianli.png"
    }, {
        "name": "M_jishui2_T_jishui_show",
        "img": "T_jishui.png"
    }, {
        "name": "M_paishui_wushui2_T_paishui_wushuis_show",
        "img": "T_paishui_wushui2.png"
    }, {
        "name": "M_paishui_yushui2_T_paishui_yushui_show",
        "img": "T_paishui_yushui2.png"
    }, {
        "name": "M_ranqi2_T_ranqi_show",
        "img": "T_ranqi.png"
    }, {
        "name": "M_tongxin2_T_tongxin_show",
        "img": "T_tongxin.png"
    }, {
        "name": "M_dianlizhijia2_T_zhijia_show",
        "img": "T_zhijia.png"
    }, {
        "name": "M_jvxingwantou_fengguan2_T_jvxingwantou_fengguan_show",
        "img": "T_jvxingwantou_fengguan.png"
    }, {
        "name": "M_louban2_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_louti2_T_louti_show",
        "img": "T_louti.png"
    }, {
        "name": "M_men2_T_men_show",
        "img": "T_men.png"
    }, {
        "name": "M_qiang2_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_ranqizhichengzhu2_T_shiti_show",
        "img": "T_shiti.jpg"
    }, {
        "name": "M_tongxinzhijia2_T_zhijia_show",
        "img": "T_zhijia.png"
    }],
  youzu:[
      {
          name: 'yoozoo_T_dl_yz_02_BTM',
          img: 'T_yz_001.jpg'
      },
      {
          name: 'yoozoo_T_dl_yz_001',
          img: 'T_yz_001.jpg'
      },
      {
          name: 'dishangyanse_T_dl_zifaguang_01',
          img: 'pj_lanse_01.png'
      },
        {
            name: 'dimian_T_yz_04_2_shinei',
            img: 'T_yz_05.jpg'
        },
        ],
  yoozoo_T_dl_yz_001:[
        {"name":"yoozoo_T_yz_001_qiang","img":"T_yz_001.jpg"},
        {"name":"yoozoo_pj_lanse_01_boli","img":"youzu_pj_lanse_01.png"},
        {"name":"yoozoo_T_yz_001_02","img":"T_yz_001.jpg"}
    ],
    //每个楼　对应的楼下模型数据
    youzu_dixia:[
        {
            "name": "M_B3_T_tujian_008",
            "img": "T_tujian_008.png"
        }, {
            "name": "M_B3_T_tujian_009",
            "img": "T_tujian_008.png"
        }, {
            "name": "M_B3_T_tujian_010",
            "img": "T_tujian_008.png"
        }
    ],
  youzuceng:[
      {
      "name": "yoozoo_T_yz_001_qiang",
      "img": "T_yz_001.jpg"
  }, {
      "name": "yoozoo_pj_lanse_01_boli",
      "img": "youzu_pj_lanse_01.png"
  }, {
      "name": "yoozoo_T_yz_001_02",
      "img": "T_yz_001.jpg"
  }],
  mengzhongxin:[
  ],
  tengxun:[

  ],
  //假数据
  xiangmangguo:[
      {
          name: 'yoozoo_T_dl_yz_02_BTM',
          img: 'T_yz_001.jpg'
      },
      {
          name: 'yoozoo_T_dl_yz_001',
          img: 'T_yz_001.jpg'
      },
      {
          name: 'dishangyanse_T_dl_zifaguang_01',
          img: 'pj_lanse_01.png'
      },
      {
          name: 'dimian_T_yz_04_2_shinei',
          img: 'T_yz_05.jpg'
      },
  ],
  luobuzhiye:[

    ],
}

export default {
    models
};
