/**
 * @params
 * @description 导出公共组件 
 */
import Inputs from '../components/inputs';
const components = {
  Inputs
}
const install = Vue => {
  for (const values of components) {
    Vue.components(`cm${values}`,values);
  }
}
export default Object.assign({},{install});
