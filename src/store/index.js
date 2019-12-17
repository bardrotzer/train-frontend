import Vue from 'vue';
import Vuex from 'vuex';
import StatesModule from './modules/states/common';
// import UserModule from './modules/states/user';
// import RequestModule from './modules/request';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    states: StatesModule,
  },
});

export default store;
