// import moment from 'moment';
/**
 * @class Cookies
 * @classdesc A class that simplifies getting and setting of cookies, specifically tokens
 */
export default class Cookies {
  /**
   * @static
   * @memberof Cookies
   * @function set
   * @description Sets a new cookie, or updates an old cookie
   *
   * @param {String} name - the name of the cookie (required)
   * @param {String} value - the value of the cookie (required)
   * @param {String} expires - the expirydate (optional)
   * @param {String} path - the valid path for the cookie (optional)
   * @param {String} domain
   */
  static set(name, value, expires, path = '/', domain) {
    const escapedValue = escape(value);
    const existingVal = this.get(name);
    const cookie = [`${name}=${escapedValue}`];

    // if a cookie exists with the same value is not set for immediately expiration (-1)
    // just return the cookie
    if (existingVal === escapedValue && expires !== -1) {
      return existingVal;
    }

    // if (expires) {
    //   let expiry = moment(expires);
    //   // If it's a date
    //   if (expires instanceof Date) {
    //     // If it isn't a valid date
    //     if (isNaN(expires.getTime())) {
    //       expires = new Date();
    //     }
    //   } else {
    //     // expires is not a data (should we verify its a Number before parsing it?)
    //     expires = new Date(new Date().getTime() + (parseInt(expires) * 1000 * 60 * 60 * 24));
    //   }
    //   cookie.push(`expires=${expires.toGMTString()}`);
    // }

    if (domain) {
      cookie.push(`domain=${domain}`);
    }

    cookie.push(`path=${path}`);
    console.log(document.cookie);
    document.cookie = cookie.join(';');
    console.log(document.cookie);
    return cookie;
  }

  /**
   * @static
   * @memberof Cookies
   * @function get
   * @description Gets a cookie by its name
   *
   * @param {String} name - the name of the cookie to return
   * @returns {String}
   */
  static get(name) {
    const value = `;${document.cookie}`;
    const parts = value.split(`;${name}=`);

    if (parts.length === 2) {
      return parts
        .pop()
        .split(';')
        .shift();
    }
    return null;
  }

  /**
   * @static
   * @memberof Cookies
   * @function delete
   * @description Delete a cookie by setting its value to '' and its expirydate to -1
   *
   * @param {String} name - the name of the cookie to delete
   * @param {String} path - the path of the cookie to delete
   * @param {String} domain - the domain of the cookie to delete
   */
  static delete(name, path, domain) {
    // If the cookie exists
    if (this.get(name)) {
      this.set(name, '', -1, path, domain);
    }
  }
}
