/**
 * 全局数据源对象初始化
 * @param Vue
 * 每个人一个server文件
 */
import  yservers from './yservers';
import  qservers from './qservers';
import  lserver from './lserver';
import  fservers from './fservers';
import  cservers from './cservers';
import problem from './problem';
import system from './system';

let $servers={};
let serverlist=[
    yservers,
    qservers,
    lserver,
    fservers,
    cservers,
    problem,
    system
];
const install = Vue => {
    Vue.prototype.$servers=$servers;
        serverlist.forEach((item,index)=>{
        let list=Object.keys(item);
        list.forEach(function (itemc,indexc) {
            Vue.prototype.$servers[itemc]=item[itemc];
        })
    })
};
export default Object.assign({}, { install });
