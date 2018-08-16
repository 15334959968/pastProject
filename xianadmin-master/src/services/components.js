import Header from '../components/headtitle.vue';
const components = {
  Header
}
const content = Vue => {
  const ins = Object.keys(components);
  ins.forEach(key => {
    Vue.component(`ws${key}`, components[key]);
  })
}
 export default Object.assign({}, { content }); 