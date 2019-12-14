import Axios from 'axios';
import { AxiosResponse } from 'axios';
// import { spinner } from '@/services/Feedback';
// import { showError, parseError } from '@/services/ErrorService';
// import { eContext } from '@/enums';
// import Tokens from '@/services/Tokens';

/**
 * An implementation of the AXIOS library that will add correct headers and perform
 * GET, POST, DELETE and some composite functions
 *
 * @namespace /services
 * @class DataProvider
 * @author  {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 */
export default class DataProvider {

  /**
   * Performs a get and returns a promise with the data
   * @static
   * @param {String} url          - The url to the API endpoint
   * @returns {Promise}   - A Axios promise
   * @throws {Error}      - Throws an error from the ErrorService
   * @memberof DataProvider
   */
  static get(url: string): Promise<AxiosResponse<any>> {
    const headers = this.getHeaders();
    return Axios.get<AxiosResponse>(url, { headers })
  }

    /**
   * Retrieves any headers that are valid for this user
   * @returns {Object} - the headers object
   * @memberof DataProvider
   */
  static getHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    return headers;
  }
}
