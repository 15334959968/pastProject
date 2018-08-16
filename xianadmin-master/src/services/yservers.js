/**
 * 具体http 服务
 *杨云海
 */
import http from './http';
import fetch from './fetch';
import {menudata} from '../services/ydatabase';
import {mainMen} from '../services/mainMen';
//接口url
const apis={
    selectmenulist:"/usercontroller/selectmenulist",
    selectProblems:"/usercontroller/selectProblems",
    selectlouByCode:"/usercontroller/selectlouByCode",
    Userlogin:"boss/user/login.html",
}
//具体server
const yservers={
    selectmenulist:(params={})=>{
        return new Promise((resolve, reject) => {
            resolve(menudata.selectmenuList);
        })
    },
    selectProblems:(params={})=>{
        return new Promise((resolve, reject) => {
            resolve(menudata.selectProblems);
        })
    },
    selectlouByCode:(params={})=>{
        return new Promise((resolve, reject) => {
            resolve(menudata.selectlouByCode[params.code]);
        })
    },
    Userlogin:(params={})=>{
        return fetch.post(apis.Userlogin,params);
    },
    selectMainMens:(params={})=>{
        return new Promise((resolve, reject) => {
            resolve(mainMen);
        })
    },

}

export  default yservers