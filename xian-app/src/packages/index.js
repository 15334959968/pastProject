import Header from './Header';

const packages = {
  Header
};

const install = Vue => {
  for (const [key, component] of Object.entries(packages)) {
    Vue.component(`xa${key}`, component);
  }
};

export default { install };
