/**
 * three全局对象相关初始化
 */
import init from './init.js';
import load from './load.js';
import linkMap from './config';
const install = Vue => {
  Vue.prototype.t = Object.assign(
    {},
    init,
    load,
    linkMap
  );
};
export default Object.assign({}, { install });
