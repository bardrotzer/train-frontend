/**
 * The vuex store maintaining the state of the application, controlling modals, flashcards and spinners
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
const namespace = 'states';
/**
 * initial state
 * @type {Object}
 */
const state = {
  flash: false,
  flashData: {},
  spinner: false,
  spinnerData: {},
  spinnerId: null,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
