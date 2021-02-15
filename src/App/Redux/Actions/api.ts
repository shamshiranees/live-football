import {API_START, API_END, ACCESS_DENIED, API_ERROR} from './types';

export const apiStart = (label:any) => ({
  type: API_START,
  payload: label,
});

export const apiEnd = (label:any) => ({
  type: API_END,
  payload: label,
});

export const accessDenied = (url:string) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (error:any) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};
