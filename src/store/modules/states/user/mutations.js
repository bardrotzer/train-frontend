import { keys, has, each } from 'lodash';
/**
 * The mutations for the user vuex store
 * @module store/user/mutations
 * @author {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */

/**
 * Sets the modal state, triggering a drawing or removal of a modal in {@link modals/BaseModal}
 * @param {Mixed} modal - the name of the modal to open, or null to close it
 */
const set = (state, userData) => {
  const userKeys = keys(userData);
  each(userKeys, (k) => {
    if (has(state, k)) {
      state[k] = userData[k];
      console.log(k, userData[k]);
    }
  });
  console.log(state);
}

const email = (state, email) => {
  state.email = email;
}

const name = (state, name) => {
  state.name = name;
}

export default {
  set,
  email,
  name,
}