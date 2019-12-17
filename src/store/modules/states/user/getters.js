/**
 * The getters for the state vuex store
 * @module store/states/getters
 * @author {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */

const user = (state) => {
  return {
    id: state.id,
    name: state.name,
    email: state.email,
    settings: state.settings,
    type: state.type,
  };
}
export default {
  user,
};
