import Vue from 'vue';
import {
  Spinner,
  Badge,
  Alert,
  Confirm,
  Toast
} from 'vux';

const components = {
  Spinner,
  Badge,
  Alert,
  Confirm,
  Toast
};

for (const [key, component] of Object.entries(components)) {
  Vue.component(key.toLowerCase(), component);
}
