import Vue from 'vue';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import {
  Badge,
  Progress,
  Select,
  TextField,
  DateInput
} from 'muse-ui';

const components = {
  Badge,
  Progress,
  Select,
  TextField,
  DateInput
};

for (const item of Object.values(components)) {
  Vue.use(item);
};
