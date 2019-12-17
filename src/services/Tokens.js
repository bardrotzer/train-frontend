import Cookies from '@/services/Cookies';

export default class Tokens {
    /**
   * @static
   * @memberof Sessions
   * @function has
   * @description Checks if there is a valid token
   *
   * @returns {Boolean}
   */
  static has() {
    const cookie = Cookies.get('token');
    return !!cookie;
  }

  /**
   * @static
   * @memberof Sessions
   * @function destroy
   * @description Deletes the token
   */
  static destroy() {
    Cookies.delete('token');
  }
  /**
   * @static
   * @memberof Sessions
   * @function set
   * @description Sets a new token by value token
   * @param {String} token - The new token to set
   * @returns {String} - The token that was set
   */
  static set(token) {
    return Cookies.set('token', token);
  }
  /**
   * @static
   * @memberof Sessions
   * @function get
   * @description Gets the token
   *
   * @returns {String} - The current token
   */
  static get() {
    return Cookies.get('token');
  }
}
