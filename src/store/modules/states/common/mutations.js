/**
 * The mutations for the state vuex store
 * @module store/states/mutations
 * @author {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */

/**
 * @param {Boolean} showFlash - Turn the flash on or off {true | false}
 */
const flash = (state, showFlash) => {
  state.flash = showFlash;
};
/**
 * @param {Object} data - The data to populate the flash
 */
const flashData = (state, data) => {
  state.flashData = data;
};
/**
 * @param {Boolean} showSpinner - Turn the spinner on or off {true | false}
 */
const SET_SPINNER_ACTIVE = (state, showSpinner) => {
  state.spinner = showSpinner;
};
/**
 * @param {Object} data - The data to populate the spinner
 */
const SET_SPINNER_DATA = (state, data) => {
  state.spinnerData = data;
};

/**
 * @param {String} id - The unique id for this spinner
 */
const SET_SPINNER_ID = (state, id) => {
  state.spinnerId = id;
};

export default {
  flash,
  flashData,
  SET_SPINNER_ACTIVE,
  SET_SPINNER_DATA,
  SET_SPINNER_ID,
  // SET_QUERY_CONTEXT,
  // viewpath,
  // SET_HEADER_HEIGHT,
  // SET_FOOTER_HEIGHT,
};
