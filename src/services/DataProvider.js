import Axios from 'axios';
import { spinner } from '@/services/Feedback';
import { showError, parseError } from '@/services/ErrorService';
import { eContext } from '@/enums';
import Tokens from '@/services/Tokens';

/**
 * An implementation of the AXIOS library that will add correct headers and perform
 * GET, POST, DELETE and some composite functions
 *
 * @namespace /services
 * @class DataProvider
 * @author  {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */
export default class DataProvider {
  static spinnerList = [];

  /**
   * Attaches a spinner that will run during the duration of the operation
   * @static
   * @param {Mixed} message - Message is a string, but null | false | undefined can be called to prevent the spinner
   * @return {Mixed}        - If the spinner is created, a unique id for the spinner is returned, use this to remove the spinner
   * @memberof DataProvider
   */
  static addSpinner(message) {
    if (message) {
      const spinnerId = spinner.create({ message: message });
      DataProvider.spinnerList.push(spinnerId);
      return spinnerId;
    }
    return false;
  }

  /**
   * Removes a spinner by its id. Checks the id of the currently running spinner and removes it if the spinner is ready for removal
   * @static
   * @param {Mixed} message - Message is a string, but null | false | undefined can be called to prevent the spinner
   * @return {Mixed}        - If the spinner is created, a unique id for the spinner is returned, use this to remove the spinner
   * @memberof DataProvider
   */
  static removeSpinner(id) {
    if (DataProvider.spinnerList.includes(id)) {
      DataProvider.spinnerList.splice(DataProvider.spinnerList.indexOf(id), 1);
      if (!DataProvider.spinnerList.length) {
        spinner.close(id);
      }
    }
  }

  /**
   * Performs a get and returns a promise with the data
   * @static
   * @param {String} url          - The url to the API endpoint
   * @param {String} errorContext - The context we will present the error in (if any)
   * @param {Mixed} spinner       - The text on the spinner, defaults to "Please wait.." if spinner = false, no spinner is shown
   * @returns {Promise}   - A Axios promise
   * @throws {Error}      - Throws an error from the ErrorService
   * @memberof DataProvider
   */
  static get(url, errorContext = eContext.CONTEXT_FLASH, spinnerData = 'Please wait loading data') {
    let spinnerId;
    if (spinnerData) {
      spinnerId = DataProvider.addSpinner(spinnerData);
    }
    const headers = DataProvider.getHeaders();
    // perform the get
    return Axios.get(url, { headers })
      .catch(error => {
        if (error.response && error.response.status === 401 && errorContext === eContext.CONTEXT_RETURN_401) {
          // return message from error
          return error.response;
        } else if (error.response && error.response.status === 401 && errorContext === eContext.CONTEXT_IGNORE_401) {
          // do nothing
        } else {
          // more test here later
          showError(error, errorContext, true);
        }
      })
      .finally(() => {
        DataProvider.removeSpinner(spinnerId);
      });
  }

  /**
   * Performs a post and returns a promise with the data
   * @static
   * @param {String} url          - The url to the API endpoint
   * @param {Object} payload      - The Json payload to add to the request
   * @param {String} errorContext - The context to throw any errors in
   * @param {Mixed} spinner       - The text on the spinner, defaults to "Please wait.." if spinner = false, no spinner is shown
   * @returns {Promise}   - A Axios promise that resolves with the content
   * @throws {Error}      - Throws an error from the ErrorService
   * @memberof DataProvider
   */
  static post(url, payload, errorContext = eContext.CONTEXT_FLASH, spinnerData = 'Please wait writing data') {
    let spinnerId;
    if (spinnerData) {
      spinnerId = DataProvider.addSpinner(spinnerData);
    }
    const headers = DataProvider.getHeaders();
    // perform the post
    return Axios.post(url, payload, { headers })
      .catch(error => {
        // if we are to just return the error
        // send the error data to the errorService and return the result
        if (errorContext === eContext.CONTEXT_RETURN_401) {
          return parseError(error.response);
        }
        // showError(error, errorContext, true);
      })
      .finally(() => {
        DataProvider.removeSpinner(spinnerId);
      });
  }

  /**
   * Performs a delete, deleting the resource
   * @static
   * @param {String} url      - The url to the API endpoint
   * @returns {Promise}   - A Axios promise
   * @throws {Error}      - Throws an error from the ErrorService
   * @memberof DataProvider
   */
  static delete(url, errorContext = eContext.CONTEXT_FLASH, spinnerMessage = 'Please wait deleting data') {
    const spinnerId = DataProvider.addSpinner(spinnerMessage);
    const headers = DataProvider.getHeaders();
    // perform the delete
    return Axios.delete(url, { headers })
      .catch(error => {
        showError(error, errorContext, true);
      })
      .finally(() => {
        DataProvider.removeSpinner(spinnerId);
      });
  }

  /**
   * Performs a patch and returns a promise with the data
   * @static
   * @param {String} url      - The url to the API endpoint
   * @param {Object} payload  - The Json payload to add to the request
   * @returns {Promise}   - A Axios promise that resolves with the content
   * @throws {Error}      - Throws an error from the ErrorService
   * @memberof DataProvider
   */
  static patch(url, payload, errorContext = eContext.CONTEXT_FLASH, spinnerMessage = 'Please wait updating data') {
    const spinnerId = DataProvider.addSpinner(spinnerMessage);
    const headers = DataProvider.getHeaders();
    // perform the patch
    return Axios.put(url, payload, { headers })
      .catch(error => {
        showError(error.response, errorContext, false);
      })
      .finally(() => {
        DataProvider.removeSpinner(spinnerId);
      });
  }

  /**
   * Performs a patch and returns a promise with the data
   * @static
   * @param {String} url      - The url to the API endpoint
   * @param {Object} form  - The FormData to add
   * @param {Object} header  - Optional header data to override default headers
   * @returns {Promise}   - A Axios promise that resolves with the content
   * @throws {Error}      - Throws an error from the ErrorService
   * @memberof DataProvider
   */
  static form(url, formData, header, errorContext = eContext.CONTEXT_FLASH, spinnerMessage = 'Analysing photo, please wait') {
    const spinnerId = DataProvider.addSpinner(spinnerMessage);
    const headers = header || DataProvider.getHeaders();
    // perform the patch
    return Axios.post(url, formData, { headers })
      .catch(error => {
        showError(error, errorContext, true);
      })
      .finally(() => {
        DataProvider.removeSpinner(spinnerId);
      });
  }

  /**
   * Retrieves any headers that are valid for this user
   * @returns {Object} - the headres object used for authentication
   * @memberof DataProvider
   */
  static getHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (Tokens.has()) {
      const token = Tokens.get();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }
    return headers;
  }
}
