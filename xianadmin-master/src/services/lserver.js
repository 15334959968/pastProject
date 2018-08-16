/**
 * 具体http 服务
 * 李文文
 */
import http from './fetch';
//接口url
const apis = {
  addSave: "boss/question/category/save.html",
  getPageList: "boss/question/category/paging.html",
  deleteLine: "boss/question/category/view.html",
  statusSave: "boss/question/status/save.html",
  statusPageList: "boss/question/status/paging.html",
  statusDelete: "boss/question/status/view.html"
}
//具体server
const lserver={
  addSave: (params={}) => {
    return http.post(apis.addSave,params);
  },
  getPageList: (params={}) => {
    return http.get(apis.getPageList,params);
  },
  deleteLine: (params={}) => {
    return http.get(apis.deleteLine,params);
  },
  statusSave: (params={}) => {
    return http.post(apis.statusSave,params);
  },
  statusPageList: (params={}) => {
    return http.get(apis.statusPageList,params);
  },
  statusDelete: (params={}) => {
    return http.get(apis.statusDelete,params);
  }
}

export  default lserver