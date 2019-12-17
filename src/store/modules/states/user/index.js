/**
 * The vuex store maintaining the user information
 * @module store/states
 * @author {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

/**
 * Store namespaced to states
 * @type {String}
 */
/* eslint-disable no-unused-vars */
const namespace = 'user';

/**
 * initial state
 * @type {Object}
 */
const state = {
  id: null,
  name: null,
  email: null,
  settings: {},
  type: null,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
