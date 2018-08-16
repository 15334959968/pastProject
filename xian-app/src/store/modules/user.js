import { toJson } from '@/utils/common';

const state = {
  user: {}
};

const actions = {
  setUser ({ commit }, user) {
    commit('setUser', user);
  }
};

const mutations = {
  setUser (state, user) {
    state.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }
};

const getters = {
  user: state => state.user
};

for (const key of Object.keys(state)) {
  if (sessionStorage[key]) {
    state[key] = toJson(sessionStorage[key]);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
