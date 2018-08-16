import common from './interfaces/common';
import problem from './interfaces/problem';
import http from './http';

const services = {
  common,
  problem,
  ...http
};

const install = Vue => {
  Vue.prototype.$services = services;
};

export default { install };
