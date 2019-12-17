

export const eContext = {
  /** @property {String} CONTEXT_FLASH - The context is a flash message */
  CONTEXT_FLASH: 'flash',
  /** @property {String} CONTEXT_THROW - The context is a throwable error */
  CONTEXT_THROW: 'throw',
  /** @property {String} CONTEXT_IGNORE_401 - ignore 401 errors for this request */
  CONTEXT_IGNORE_401: 'ignore401',
  /** @property {String} CONTEXT_RETURN_401 - return the error message to be handled by the calleee*/
  CONTEXT_RETURN_401: 'return401',
  /** @property {String} CONTEXT_LIST - The context of the component is 'list' */
  CONTEXT_LIST: 'list',
  /** @property {String} CONTEXT_EDIT - The context of the component is 'edit' */
  CONTEXT_EDIT: 'edit',
};

/**
 * Enums for the message states
 * @enum {String}
 */
export const eMessageStates = {
  /** @property {String} STATE_INFO - The state is info */
  STATE_INFO: 'info',
  /** @property {String} STATE_WARN - The state is warning */
  STATE_WARN: 'warning',
  /** @property {String} STATE_ERROR - The state is error */
  STATE_ERROR: 'error',
};

export const eErrorCodes = {
    /** @property {String} MISSING_TOKEN - token is missing */
    MISSING_TOKEN: 'MISSING_TOKEN',
    /** @property {String} INVALID_TOKEN - token is invalid */
    INVALID_TOKEN: 'INVALID_TOKEN',
    /** @property {String} WRONG_USERNAME_PASSWORD - Username or password is wrong */
    WRONG_USERNAME_PASSWORD: 'WRONG_USERNAME_PASSWORD',
    /** @property {String} EMAIL_EXISTS - The email address exists in the system */
    EMAIL_EXISTS: 'EMAIL_EXISTS',
    /** @property {String} WRONG_PASSWORD - The password (specifically) was invalid */
    WRONG_PASSWORD: 'WRONG_PASSWORD',
    /** @property {String} QUERY_CONDITION_ERROR - A condition failed in the query*/
    QUERY_CONDITION_ERROR: 'QUERY_CONDITION_ERROR',
    /** @property {String} INSUFFICIENT_ACCESS - A condition failed in the query*/
    INSUFFICIENT_ACCESS: 'INSUFFICIENT_ACCESS',
    /** @property {String} WRONG_PASSWORD_CHANGE - The original password is wront*/
    WRONG_PASSWORD_CHANGE: 'WRONG_PASSWORD_CHANGE',
};