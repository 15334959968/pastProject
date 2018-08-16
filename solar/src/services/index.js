import charts from './interface/charts.js';
import http from './http';

const services = {
  charts,
  ...http
};

const install = Vue => {
  Vue.prototype.$services = services;
};

export default Object.assign({}, { install });
