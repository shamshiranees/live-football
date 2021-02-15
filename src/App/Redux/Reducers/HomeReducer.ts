import {
  SET_FOOTBALL_DATA,
  SET_SORTED_DATA,
} from '../Actions/types';
import { Match } from '../../Models/Matches';


export interface initialState {
  data: Match[]
  sortedData:Match[]
}
const INITIAL_STATE :initialState= {
  data: [],sortedData:[]
};

function homeReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_FOOTBALL_DATA:
      return { ...state, data: action.payload ,sortedData:action.payload};
      case SET_SORTED_DATA:
        return { ...state,sortedData:action.payload};
      
    default:
      return state;
  }
}
export default homeReducer
function removeVal(myCurrencies: Array<String>, val: String) {
  var array = JSON.parse(JSON.stringify(myCurrencies));
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
