import apiAction from './index';
import {
  DATA_FETCH_ERROR,
  FETCH_CURRENCY_DATA,
  SET_FOOTBALL_DATA,
  ADD_CURRENCY,SET_SORTED_DATA
} from './types';

export function fetchFootballData() {
  return apiAction({
    url:
      'https://www.scorebat.com/video-api/v1/',
    method: 'GET',
    onSuccess: setFootballData,
    onFailure: setOnError,
    label: FETCH_CURRENCY_DATA,
  });
}

function setFootballData(data:any) {
  console.log("-----",data);
  
  return {
    type: SET_FOOTBALL_DATA,
    payload: data,
  };
}
export function setsortedData(data:any) {
  console.log("-----",data);
  
  return {
    type: SET_SORTED_DATA,
    payload: data,
  };
}
export function addNewCurrency(data:any) {
  return {
    type: ADD_CURRENCY,
    payload: data,
  };
}


function setOnError() {
  return {
    type: DATA_FETCH_ERROR,
    payload: 'error',
  };
}
