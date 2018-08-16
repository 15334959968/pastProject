import Search from './Search';
import Vheadtitle from './Vheadtitle';
import DialogForm from './DialogForm';

const components = {
  Vheadtitle,
  Search,
  DialogForm
};

const install = Vue => {
  for (const [key, value] of Object.entries(components)) {
    Vue.component(`xa${key}`, value);
  }
}

// export default { install };
export default install;