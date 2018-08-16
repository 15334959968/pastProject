import {linkMap} from '../three/config';
//随便模拟下
let mockdatasconfig = {
  // "K","J","E","H","L","F","O","N","G"
  modelkeys:["K","F","N","G"],
  namecodes:[
      {
          title: "G地块",//游族大厦
          code: "youzu",
      },
  ]
}
//一级菜单
// [

//     {
//         tite:"",
//         list:{
//             "M_T_B2_PIAN_B306":"path"
//             // K_K1_JD
//         },
//     }
// ]
// keys=["K","J","E","H","L","F","O","N","G"]        M_T_B2_PIAN_B305
// [[],[],[],[],[]]
let getmenitemlist = (nums) => {
  const  numsArray=new Array(nums);
  const models=[];
  for(let [i,v] of numsArray.entries()){
    console.log(linkMap[`dixaiceng${i+1}`].meshList);
    models.push(linkMap[`dixaiceng${i+1}`].meshList);
  }//

  const keys=mockdatasconfig.modelkeys;
        //二级菜单M_T_B2_PIAN_B305
  const cengList = (formmodels,inde) => {
      const cengs={};
      if(formmodels){
        formmodels.forEach((item,index)=>{
          cengs[item.name]=keys[index]?(`/dixia?type=${keys[index]}_${keys[index]||''}${inde}_JD`):'';
       });  
      }
      return cengs;
  }
  const result=[];
  for(let [index,v] of numsArray.entries()){
    result.push({
      title: `地下${['一','二','三'][index]}层`,
      objects:cengList(models[index],index+1),
      modelname:"",
      type:"",
      path:`/dixia?type=dixaiceng${index+1}`,
      isshow:false,

     });
    
  }//
 
console.log(result);
return result;
};
//首页面mesh需要操作的mesh配置数据
export const mainMen={
  mainMenlist:[
      {
          icon:"jianzhu.png",
          type:"jianzhu",
          loadmodelkey:"main",
          list:getmenitemlist(3)
      },
      {
          icon:"shizheng_i.png",
          type:"shizhen",
          loadmodelkey:"main",
          list:[
              {
                  modelname:"",
                  type:"",
                  path:"/shizhen?type=daolu",
                  isshow:false,
                  title:"市政道路"
              },
              {
                  modelname:"",
                  type:"",
                  path:"/shizhen?type=guanlan",
                  isshow:false,
                  title:"市政管廊"
              }
          ],
      },
      {
          icon:"gongneng.png",
          type:"gongneng",
          loadmodelkey:"main",
          list:[
              {
                  modelname:"",
                  type:"",
                  path:"/huanxing",
                  isshow:false,
                  title:"环形通道"
              },
              {
                  path:"/huandao",
                  modelname:"",
                  type:"",
                  isshow:false,
                  title:"二层平台"
              },
              {
                  path:"",
                  modelname:"",
                  type:"",
                  isshow:false,
                  title:"能源中心"
              },
              {
                path:"",
                modelname:"",
                type:"",
                isshow:false,
                title:"Urban Core"
            },
            
          ]
      },
  ],
  mainHideMesh:{
      SetMeshsOption:["peilou_T_yz_001_BTM"],
      hideMainNotShowMesh:{
          yes:["M_louban2_T_shiti"],
          noe:["dimian_T_yz_04_1"],
      },
      hides:['dimian_T_yz_04','peilou_T_yz_001_BTM','tiankong_sky-h-cl_010_02','dimian_T_yz_04_3'],
      colors:['M_louban2_T_shiti','M_louban_T_shiti']
  },
  mainmodelTime:{
      'M_T_B2_PIAN_B201': 1.9,
      'M_T_B2_PIAN_B201_2': 2.9,
  }

}

export default {
  mainMen
}