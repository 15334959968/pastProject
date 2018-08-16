import common from './common';
import ani from './ani';
import verify from './verify';
import throttleDebounce from './throttle-debounce.js';

let tool = {
  common
};

const install = Vue => {
  Vue.prototype.$tool = tool;
  Vue.prototype.$ani = ani;
  Vue.prototype.$verify = verify;
  Vue.prototype.$throttle = throttleDebounce.throttle;
  Vue.prototype.$debounce = throttleDebounce.debounce;
};

Object.assign(tool, common);

export default Object.assign({}, tool, { install });
