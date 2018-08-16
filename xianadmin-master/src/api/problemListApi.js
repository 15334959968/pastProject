/**
 * Created by Administrator on 2018/6/27 0027.
 */


import axios from 'axios';


let base = '/api';

//显示List
export const getList = params => { return axios.get( `${base}/active/xianshivue`,{params:params});}
export const getAdd = params => { return axios.get(`${base}/active/doadd`,{params:params});}
//删除
export const getRemove = params => { return axios.get(`${base}/active/doremove`,{params:params});}
//编辑
export const getUpdata = params => { return axios.get(`${base}/active/doupdata`,{params:params});}
//查询
export const getFind = params => { return axios.get(`${base}/active/dofind`,{params:params})}