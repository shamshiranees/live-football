import {ERROR} from './types';
// import {recordApiError} from '../errors/crashlyticsErrors';

export const clearError = () => {
  return setError('');
};

export const setError = (error:any) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const processException = (error:any, dispatch:any) => {
  const {response, request, messages: errorMessage} = error;
  var message :any = errorMessage;
  let status = -1;

  if (response) {
    const {data, status: responseStatus, headers} = response;
    const {error, error_description} = data || {};

    status = responseStatus;
    message = error_description || errorMessage;
  } else if (request) {
    message = `${request}`;
  } else {
    message = `${errorMessage}`;
  }

  const {data} = request || {};

  // dispatch(recordApiError(status, message, data || {}, error));

  return {message, status};
};
