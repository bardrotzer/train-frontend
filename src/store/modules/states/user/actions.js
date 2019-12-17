/**
 * The actions for the user vuex store
 * @module store/user/actions
 * @author {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */

const reset = ({state}) => {
  state.id = null;
  state.name = null;
  state.email = null;
  state.settings = {};
  state.type = null;
}

export default {
  reset,
}