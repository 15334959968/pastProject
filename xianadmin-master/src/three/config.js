/**
 * three环境初始化配置信息
 */
import {models} from '../services/models';
import {mianconfig} from '../services/ydatabase';

//
export const config = {
    config:{
        demoId: 'container',
        baseUrl: './static/obj',
        FbxbaseUrl: './static/fbx',
        fov: 45,
        cache:true,
        threerun:null,
        name:"three"
    },
    configt:{
        demoId: 'containert',
        baseUrl: './static/obj',
        FbxbaseUrl: './static/fbx',
        fov: 45,
        cache:true,
        threerun:null,
        name:"threet"
    }
}

//根据配置的菜单生成 每个块 下面每个类型块的模型数据
const  getIconModels=(bottons,meshList)=>{
    let resutl={
        hides:{}
    }
    bottons.forEach((item,index)=>{
        resutl[item.code]={};
        meshList.forEach((mesh)=>{
            if(mesh.name.indexOf(item.code)!=-1){
                resutl[item.code][mesh.name]=true;
                resutl.hides[mesh.name]=true;
            }
        });
    });
    return resutl;
};
//暂用
export  const  linkMap={
   
    tingche:{
       meshList: models.tingche,
       concatlist:true,
       orderby:false,
    },
    huandao: {
    meshList: models.huandao,
        cameraPosition:[new THREE.Vector3(-24,1,-3), new THREE.Vector3(81,51,-131)],
        ambient:{
        intensity:1.7,
    },
   },
    huanxing: {
        meshList: models.huanxing,
        cameraPosition:[new THREE.Vector3(-7,-41,2), new THREE.Vector3(99,81,75)],
        ambient:{
            intensity:1.9,
        },
    },
    M_T_B2_PIAN_B201:{
        meshList: models.jidian,
        cameraPosition:[new THREE.Vector3(59,113,-45), new THREE.Vector3(-123,578,-1586)],
    },
    M_T_B2_PIAN_B201_2:{
        meshList: models.jidian,
        cameraPosition:[new THREE.Vector3(59,113,-45), new THREE.Vector3(-123,578,-1586)],
    },

    dixaiceng1:{
        meshList: models.dixaiceng1,
        cameraPosition:[new THREE.Vector3(59,113,-45), new THREE.Vector3(-123,578,-1586)],
   },
   dixaiceng2:{
    meshList: models.dixaiceng2,
    cameraPosition:[new THREE.Vector3(59,113,-45), new THREE.Vector3(-123,578,-1586)],
    },
    dixaiceng3:{
        meshList: models.dixaiceng3,
        cameraPosition:[new THREE.Vector3(59,113,-45), new THREE.Vector3(-123,578,-1586)],
    },
    dixaiceng4:{
        meshList: models.dixaiceng4,
        cameraPosition:[new THREE.Vector3(59,113,-45), new THREE.Vector3(-123,578,-1586)],
    },
    //F地块
    F_F2_JD:{
        meshList: models.F_F2_JD.concat(models.F_F2_JD_JD),
        cameraPosition:[new THREE.Vector3(402,-514,-286), new THREE.Vector3(-846,1870,2918)],
        hidemodels:models.F_F2_JD_JD,
        animatemodels:getIconModels(mianconfig.F_F2_JD_bottons,models.F_F2_JD_GL),
    },
    F_F2_JD_JD:{
        meshList: models.F_F2_JD_JD,
        cameraPosition:[new THREE.Vector3(402,-514,-286), new THREE.Vector3(-846,1870,2918)],
    },
    F_F2_JD_JG:{
        meshList: models.F_F2_JD_JG,
        cameraPosition:[new THREE.Vector3(402,-514,-286), new THREE.Vector3(-846,1870,2918)],

    },
    F_F2_JD_JZ:{
        meshList: models.F_F2_JD_JZ,
        cameraPosition:[new THREE.Vector3(402,-514,-286), new THREE.Vector3(-846,1870,2918)],
    },
    //N地块
    F_F1_JD:{
        meshList: models.F_F1_JD.concat(models.F_F1_JD_JD),
        cameraPosition:[new THREE.Vector3(-82,431,369), new THREE.Vector3(-2243,1816,1021)],
        hidemodels:models.F_F1_JD_JD,

        ambient:{
            intensity:1.4,
        },
        animatemodels:getIconModels(mianconfig.F_F1_JD_bottons,models.F_F1_JD_GL),
    },
    F_F1_JD_JD:{
        meshList: models.F_F1_JD_JD,
        cameraPosition:[new THREE.Vector3(120,393,-430), new THREE.Vector3(1980,1968,-2048)],
    },
    F_F1_JD_JG:{
        meshList: models.F_F1_JD_JG,
        cameraPosition:[new THREE.Vector3( -12,134,228), new THREE.Vector3(-2479,1435,-292)],
    },
   F_F1_JD_JZ:{
        meshList: models.F_F1_JD_JZ,
       cameraPosition:[new THREE.Vector3(499,262,-106), new THREE.Vector3(1387,1569,2494)],
    },

    //N地块
    history:[],
    N_N2_JD:{
        meshList: models.N_N2_JD.concat(models.N_N2_JD_JD),
        cameraPosition:[new THREE.Vector3(402,-222,148), new THREE.Vector3(2781,2071,1545)],
        hidemodels:models.N_N2_JD_JD,
        animatemodels:getIconModels(mianconfig.N_N2_JD_bottons,models.N_N2_JD_GL),
    },
    N_N2_JD_JD:{
        meshList: models.N_N2_JD_JD,
        cameraPosition:[new THREE.Vector3(623,-31,-262), new THREE.Vector3(1766,1572,1639)],
    },
    N_N2_JD_JG:{
        meshList: models.N_N2_JD_JG,
        cameraPosition:[new THREE.Vector3(402,-222,148), new THREE.Vector3(2781,2071,1545)],

    },
    N_N2_JD_JZ:{
        meshList: models.N_N2_JD_JZ,
        cameraPosition:[new THREE.Vector3(402,-222,148), new THREE.Vector3(2781,2071,1545)],
    },
    //N地块
    N_N1_JD:{
        meshList: models.N_N1_JD.concat(models.N_N1_JD_JD),
        cameraPosition:[new THREE.Vector3(307,-334,76), new THREE.Vector3(-93,2249,3815)],
        hidemodels:models.N_N1_JD_JD,
        animatemodels:getIconModels(mianconfig.N_N1_JD_bottons,models.N_N1_JD_GL),
    },

    N_N1_JD_JD:{
        meshList: models.N_N1_JD_JD,
        cameraPosition:[new THREE.Vector3(-10,-101,-225), new THREE.Vector3(1983,1026,-2650)],
    },
    N_N1_JD_JG:{
        meshList: models.N_N1_JD_JG,
        cameraPosition:[new THREE.Vector3(245,-117,497), new THREE.Vector3(-2778,901,2246)],

    },
    N_N1_JD_JZ:{
        meshList: models.N_N1_JD_JZ,
        cameraPosition:[new THREE.Vector3(245,-117,497), new THREE.Vector3(-2778,901,2246)],
    },




    //ｋ地块
    K_K1_JD:{
        meshList: models.K_K1_JD.concat(models.K_K1_JD_JD),
        cameraPosition:[new THREE.Vector3(-427,-373,286), new THREE.Vector3(3058,1370,-2477)],
        hidemodels:models.K_K1_JD_JD,
        animatemodels:getIconModels(mianconfig.K_K1_JD_bottons,models.K_K1_JD_GL),
    },
    K_K1_JD_JD:{
        meshList: models.K_K1_JD_JD,
        cameraPosition:[new THREE.Vector3(-10,-101,-225), new THREE.Vector3(1983,1026,-2650)],
    },
    K_K1_JD_JG:{
        meshList: models.K_K1_JD_JG,
        cameraPosition:[new THREE.Vector3(245,-117,497), new THREE.Vector3(-2778,901,2246)],

    },
    K_K1_JD_JZ:{
    meshList: models.K_K1_JD_JZ,
        cameraPosition:[new THREE.Vector3(245,-117,497), new THREE.Vector3(-2778,901,2246)],
    },


    K_K2_JD:{
        meshList: models.K_K2_JD.concat(models.K_K2_JD_JD),
        cameraPosition:[new THREE.Vector3(-427,-373,286), new THREE.Vector3(3058,1370,-2477)],
        hidemodels:models.K_K2_JD_JD,
        animatemodels:getIconModels(mianconfig.K_K2_JD_bottons,models.K_K2_JD_JD),
    },
    K_K2_JD_JD:{
        meshList: models.K_K2_JD_JD,
        cameraPosition:[new THREE.Vector3(-10,-101,-225), new THREE.Vector3(1983,1026,-2650)],
    },
    K_K2_JD_JG:{
        meshList: models.K_K2_JD_JG,
        cameraPosition:[new THREE.Vector3(245,-117,497), new THREE.Vector3(-2778,901,2246)],

    },
    K_K2_JD_JZ:{
        meshList: models.K_K2_JD_JZ,
        cameraPosition:[new THREE.Vector3(245,-117,497), new THREE.Vector3(-2778,901,2246)],
    },







    G_G1_JD_JG:{
        meshList: models.G_G1_JD_JG,
        cameraPosition:[new THREE.Vector3(161,-59,149), new THREE.Vector3(2882,1070,-724)],
    },
    G_G1_JD_JZ:{
        meshList: models.G_G1_JD_JZ,
        cameraPosition:[new THREE.Vector3(161,-59,149), new THREE.Vector3(2882,1070,-724)],
    },
    G_G1_GL:{
        meshList: models.G_G1_GL,
        cameraPosition:[new THREE.Vector3(470,264,177 ), new THREE.Vector3(-2189,1508,1702)],
    },
    G_G1_JD:{
        meshList: models.G_G1_JD.concat(models.G_G1_GL),
        cameraPosition:[new THREE.Vector3(161,-59,149), new THREE.Vector3(2882,1070,-724)],
        hidemodels:models.G_G1_GL,
        animatemodels:getIconModels(mianconfig.G_G1_JD_bottons,models.G_G1_GL),
    },
    G_G2_JD:{
        meshList: models.G_G2_JD.concat(models.G_G2_GL),
        cameraPosition:[new THREE.Vector3(11,-218,324), new THREE.Vector3(-2491,1161,-855)],
        hidemodels:models.G_G2_GL,
        animatemodels:getIconModels(mianconfig.G_G2_JD_bottons,models.G_G2_GL),
    },
    G_G2_GL:{
        meshList: models.G_G2_GL,
        cameraPosition:[new THREE.Vector3(-270,12,72), new THREE.Vector3(-1786,901,-453)],
    },
    G_G1_GL_All:{
        meshList: models.G_G1_GL_All,
        cameraPosition:[new THREE.Vector3(684,98,-107), new THREE.Vector3(2215,888,-2073)],
    },
    G_G2_GL_All:{
        meshList: models.G_G2_GL_All,
        cameraPosition:[new THREE.Vector3(684,98,-107), new THREE.Vector3(2215,888,-2073)],
    },
    dishangyanse_T_dl_zifaguang_01:{
        meshList: models.youzuceng,
        cameraPosition:[new THREE.Vector3(8,5,-9), new THREE.Vector3(589,185,-41)],
    },
    main: {
        // meshList: models.main,
        meshList:models.main
        // .concat(models.huandao)
        ,
        // .concat(models.F_F1_JD)
        // .concat(models.G_G1_JD)
        // .concat(models.K_K1_JD)
        // .concat(models.N_N1_JD)
        // .concat(models.G_G2_JD)
        // .concat(models.K_K2_JD)
        // .concat(models.N_N2_JD)
        // .concat(models.F_F2_JD),
        cameraPosition:[new THREE.Vector3(-4, 51, -17), new THREE.Vector3(50, 108, 303)],
        orderby:false,
    },
    guanlan: {
        meshList: models.guanlan,
        cameraPosition:[new THREE.Vector3(-30,-3,6), new THREE.Vector3(-91,88,-105)],
    },


    M_guandao1_pian: {
        meshList: models.M_guandao1_pian,
        cameraPosition:[new THREE.Vector3(0, 0, 0), new THREE.Vector3(21, 25, 169)],
        router:['/shizhen','/shizhen?type=M_guandao1_pian'],

    },
    M_guandao2_pian: {
        meshList: models.M_guandao2_pian,
        cameraPosition:[new THREE.Vector3(0, 0, 0), new THREE.Vector3(21, 25, 169)],
        router:['/shizhen','/shizhen?type=M_guandao2_pian'],
    },
    daolu: {
        meshList: models.daolu,
        cameraPosition:[new THREE.Vector3(-16,-24,10), new THREE.Vector3(-99,205,-188)],
        ambient:{
            intensity:1.9,
        },
    },
    youzu: {
        meshList: models.youzu.concat(models.youzu_dixia),
        cameraPosition:[new THREE.Vector3(184,8,7), new THREE.Vector3(-300,49,473)],
        hidemodels:models.youzu_dixia,
        // controls:{
        //     'enablePan':false,//是否允许平移
        //     'enableRotate':true, //是否允许旋转
        // }
    },
    youzu_dixia: {
        meshList: models.youzu_dixia,
        cameraPosition:[new THREE.Vector3(168,20,89), new THREE.Vector3(3,29,332)],
    },
    yoozoo_T_yz_001:{
        meshList: models.yoozoo_T_dl_yz_001,
        cameraPosition:[new THREE.Vector3(-41,29,25), new THREE.Vector3(-230,115,-324)],
        router:['/main','/dishang?type=youzu&&go=main'],

    },
    yoozoo_T_dl_yz_001:{
        meshList: models.youzu,
        cameraPosition:[new THREE.Vector3(168,43,87), new THREE.Vector3(4,29,333)],
        controls:{
            'enablePan':true,//是否允许平移
            'enableRotate':true, //是否允许旋转
        },
    },
    modeltree: {
        meshList: models.modeltree,
        cameraPosition:[new THREE.Vector3(-190,-4,-201), new THREE.Vector3(2489,1707,-2481)],
        // 237,1037,-27  4096,1076,876
    },
    growth: {
        meshList: models.modeltree,
        cameraPosition:[new THREE.Vector3(-170,127,-289 ), new THREE.Vector3(31,1003,-1930)],
    },
    modeltreet: {
        meshList: models.G_G2_GL,
        cameraPosition:[new THREE.Vector3(97,181,-153), new THREE.Vector3(-2145,1258,618)],
    },
    //暂时使用一个
    M_B3_T_tujian_008: {
        meshList: models.G_G2_JD.concat(models.G_G2_GL),
        cameraPosition:[new THREE.Vector3(4,111,327), new THREE.Vector3(-2457,1188,918)],
        hidemodels:models.G_G2_GL,
        animatemodels:getIconModels(mianconfig.G_G2_JD_bottons,models.G_G2_GL),
        router:['/dishang','/dixia?type=G_G2_JD'],
    },
    M_B3_T_tujian_009: {
        meshList: models.G_G2_JD.concat(models.G_G2_GL),
        cameraPosition:[new THREE.Vector3(4,111,327), new THREE.Vector3(-2457,1188,918)],
        hidemodels:models.G_G2_GL,
        animatemodels:getIconModels(mianconfig.G_G2_JD_bottons,models.G_G2_GL),
        router:['/dishang','/dixia?type=G_G2_JD'],
    },
    M_B3_T_tujian_010: {
        meshList: models.G_G2_JD.concat(models.G_G2_GL),
        cameraPosition:[new THREE.Vector3(4,111,327), new THREE.Vector3(-2457,1188,918)],
        hidemodels:models.G_G2_GL,
        animatemodels:getIconModels(mianconfig.G_G2_JD_bottons,models.G_G2_GL),
        router:['/dishang','/dixia?type=G_G2_JD'],
    },

    mengzhongxin: {
        meshList: models.mengzhongxin,
        cameraPosition:[new THREE.Vector3(-16,-24,10), new THREE.Vector3(-196,121,-186)],
    },
    tengxun: {
        meshList: models.tengxun,
        cameraPosition:[new THREE.Vector3(-16,-24,10), new THREE.Vector3(-196,121,-186)],
    },
    //假数据
    xiangmangguo: {
        meshList: models.youzu.concat(models.youzu_dixia),
        cameraPosition:[new THREE.Vector3(168,20,89), new THREE.Vector3(3,29,332)],
        hidemodels:models.youzu_dixia,
        controls:{
            'enablePan':false,//是否允许平移
            'enableRotate':true, //是否允许旋转
        }
    },
    luobuzhiye: {
        meshList: models.luobuzhiye,
        cameraPosition:[new THREE.Vector3(-16,-24,10), new THREE.Vector3(-196,121,-186)],
    },
}
export default {
    linkMap,
    config
};
