/**
 * 具体http 服务
 * 陈俊
 */
import fetch from './fetch';
//接口url
const apis={
    SelectRoleList:"boss/user/role/paging.html",
    SelectRoleByID:"boss/user/role/view.html",
    AddRole:"boss/user/role/save.html",
    DeleteRole:"/boss/user/role/delete.html",

}
//具体server
const cservers={
    SelectRoleList:(params={})=>{
        return fetch.get(apis.SelectRoleList,params);
    },
    SelectRoleByID:(params={})=>{
        return fetch.get(apis.SelectRoleByID,params);
    },
    AddRole:(params={})=>{
        return fetch.post(apis.AddRole,params);
    },
    DeleteRole:(params={})=>{
        return fetch.post(apis.DeleteRole,params);
    }
}
export  default cservers