import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  modules: {
    user
  }
});
