import { has, isObject, isError } from 'lodash';
import { eContext, eErrorCodes } from '@/enums';
import { flash } from '@/services/Feedback';

/**
 * Parses an error string to match the context
 * @param {String} error    - The error message to parse
 * @param {String} context  - The context for wich we are parsing the error
 * @return {String}         - A parsed string that works for the context
 */
export const parseErrorString = (error, context = 'none') => {
  if (context === eContext.CONTEXT_FLASH) {
    return `ERROR: ${error}! Many features are in development still. The error has been logged in our system`;
    // return 'ERROR: ' + error + ' Try to reload the page to see if that helps. The error has been logged in our system';
  }
  return error;
};

/**
 * @function parseError
 * @description Parses an error,
 *              this differs from the parseErrorString in that it receives the response object, and tries to return something sensible
 * @param {Object} error    - The errro response object
 * @return {String}         - A parsed string that works for the context
 */
export const parseError = error => {
  const status = error.status;
  if (error && error.data) {
    if (error.data.code) {
      let message = getErrorFromCode(error.data.code);
      if (!message) {
        message = error.data.message || `Uspesifisert feil, kode: ${error.data.code}`;
      }
      return {
        status,
        message,
      };
    }
    if (error.data.message) {
      return {
        message: error.data.message,
        status,
      };
    }
  }
  return {
    message: 'Usepsifisert feilmelding. Men noe gikk galt',
    status,
  };
};
/**
 * Wraps an error depending on the context we want the error in
 * Will log the error to the Ravenjs api
 * @param {Mixed} err     - Could be a string or an object defining an error
 * @param {Mixed} context - The context we wrap the error in
 * @return {Object}       - An error object, wrapped to match the context
 */
export const handleError = (err, context = 'none') => {
  if (isObject(err) && has(err, 'error')) {
    return parseErrorString(err.error, context);
  }
  return parseErrorString(err, context);
};

/**
 * Throws and reports errors
 * The errors are captured by Raven {@link https://docs.sentry.io/clients/javascript/usage/}
 * @param {Mixed} err - Any Error comin, this could be a string or a wrapped error object
 * @param {Boolean} doThrow - @default true - throwing the error can be cancelled
 * @throws {Error} - A new error object
 */
export const throwError = (err, doThrow = true) => {
  const error = isError(err) ? err : new Error(err);
  if (doThrow) {
    throw error;
  }
};

/**
 * Tries to create a modal or flash with the error message
 *
 * @param {Mixed} err       - The error string or real errorObject
 * @param {String} context  - The context as defined in the eContext
 * @throws {Error}          - A error object is thrown if no handler is defined in the context
 */
export const showError = (err, context = eContext.CONTEXT_THROW, doThrow = false) => {
  if (context === eContext.CONTEXT_FLASH) {
    const error = parseError(err);
    flash.create({
      closebutton: true,
      timetolive: null,
      state: 'error',
      message: error.message,
    });
  }
  // throws and logs the error
  if (context === eContext.CONTEXT_THROW || doThrow) {
    throwError(err);
  }
};

/**
 * Logs an error without doing anything (yet), will log as a message to Raven
 * @param {Mixed} err - Error Object or String, representing the error
 */
export const logError = (err, payload) => {
  console.warn(err, payload);
};

export const getErrorFromCode = code => {
  switch (code) {
    case eErrorCodes.MISSING_TOKEN:
      return 'Mangler token, du er ikke autorisert';
    case eErrorCodes.INVALID_TOKEN:
      return 'Token er ugyldig, kan ikke logge deg inn';
    case eErrorCodes.WRONG_USERNAME_PASSWORD:
      return 'Feil brukernavn eller passord';
    case eErrorCodes.EMAIL_EXISTS:
      return 'Eposten eksisterer allerede i vårt system';
    case eErrorCodes.WRONG_PASSWORD:
      return 'Feil passord';
    case eErrorCodes.WRONG_PASSWORD_CHANGE:
      return 'Det opprinnelige passordet ditt er feil, kanskje du vil be om et nytt?';
    case eErrorCodes.QUERY_CONDITION_ERROR:
      return 'Kunne ikke spørre databasemn, det mangler noe';
    case eErrorCodes.INSUFFICIENT_ACCESS:
      return 'Du har ikke tilgang til denne ressursen';
    default:
      return null;
  }
};
