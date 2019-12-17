/**
 * The actions for the state vuex store
 * @module store/states/actions
 * @author {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */

// /**
//  * triggers a close on the modal in action
//  */
// const closeModal = ({ commit }) => {
//   commit('modal', null);
//   commit('modalData', null);
// };
// /**
//  * creates and displays a modal
//  * @param {Object} payload  - the payload, containing the data for the modal, and the name of the modal
//  */
// const createModal = ({ commit }, payload) => {
//   commit('modal', payload.modal);
//   commit('modalData', payload.data);
// };
// /**
//  * creates and displays a flash
//  * @param {Object} payload  - the payload, containing the data for the flash
//  */
const createFlash = ({ commit }, payload) => {
  commit('flash', true);
  commit('flashData', payload.data);
};
/**
 * triggers a close on the flash in action
 */
const closeFlash = ({ commit }) => {
  commit('flash', false);
  commit('flashData', null);
};
/**
 * creates and displays a spinner
 * @param {Object} payload  - the payload, containing the data for the spinner
 *                          @property {Object} data - the data to set on the spinner
 *                          @property {String} id   - the unique id of this spinner
 */
const createSpinner = ({ commit }, payload) => {
  commit('SET_SPINNER_ACTIVE', true);
  commit('SET_SPINNER_DATA', payload.data);
  commit('SET_SPINNER_ID', payload.id);
};
/**
 * triggers a close on the spinner in action
 */
const closeSpinner = ({ commit }) => {
  commit('SET_SPINNER_ACTIVE', false);
  commit('SET_SPINNER_DATA', null);
};

export default {
  // closeModal,
  // createModal,
  createFlash,
  closeFlash,
  createSpinner,
  closeSpinner,
};
