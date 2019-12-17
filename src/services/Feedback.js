import { uniqueId } from 'lodash';
import store from '@/store';

/**
 * Thin wrapper for opening and closing a flashcard
 * closebutton  - default false if spinner, true if not, can be overridden
 * spinner      - dafault false
 * timetolive   - default 3000
 * position     - default 'bottom-right'
 * state        - default 'info' (from enums.eMessageStates);
 * message      - default 'Flash'
 * callback     - default none
 * persist      - default false
 */
const flash = {
  /**
   * Creates a flash message, passing in data
   * @param {Object} data - the data to set on the flash
   *                            @property {Boolean} closebutton  - Show a close button. Default false if spinner, true if not, can be overridden
   *                            @property {Boolean} spinner      - Show a spinner on the flash. Default false
   *                            @property {Number} timetolive    - Time the flash will show before closing (in MS), default 3000
   *                            @property {String} position      - Where the flash is positioned on the screen. Default 'bottom-right'
   *                            @property {String} state         - State of the flash. Default 'info' (from enums.eMessageStates);
   *                            @property {String} message       - The message to show. Default 'Flash'
   *                            @property {Function} callback    - Function to call when flash is closed. Default none
   *                            @property {Boolean} persist      - Wether or not to close the spinner when navigating away from the current page. Default false
   */
  create: data => {
    store.dispatch({
      type: 'states/createFlash',
      data: data,
    });
  },
  /**
   * Closes the spinner
   */
  close: () => {
    store.dispatch('states/closeFlash');
  },
};

/**
 * Thin wrapper for opening and closing the spinner
 * message      - default 'Please wait. Loading'
 * cancelButton - default false
 * callback     - default none
 */
const spinner = {
  /**
   * Creates a spinner, passing in data and an optional id, returns the id
   * @param {Object} data - the data to set on the spinner
   *                          @property {String} message      - default 'Please wait. Loading'
   *                          @property {Boolean} cancelButton - default false
   *                          @property {Function} callback     - default none
   * @param {String} id   - An optional id for the spinner, an id will be created if not set
   * @return {String}     - Returns the aforementioned spinner id
   */
  create: (data, id = uniqueId('spinner_')) => {
    store.dispatch({
      type: 'states/createSpinner',
      data: data,
      id: id,
    });
    return id;
  },
  update: data => {
    if (!store.state.states.spinner) {
      store.commit('states/SET_SPINNER_ACTIVE', true);
    }
    const existingData = store.state.states.spinnerData;
    const newData = Object.assign({}, existingData, data);
    store.commit('states/SET_SPINNER_DATA', newData);
  },
  close: id => {
    if (!id) {
      console.log('closing without id');
    }
    store.dispatch('states/closeSpinner');
  },
  /** @returns {String} the id of the current spinner */
  id: () => store.state.states.spinnerId,
};

/* prettier-ignore */
export {
  spinner,
  flash,
};
