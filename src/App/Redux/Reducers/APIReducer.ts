import { API_START, API_ERROR, API_END } from '../Actions/types';

const INITIAL_STATE = {
  loadingData: false,
  apiError: false,
};

function apiReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        loadingData: true,
      };


    case API_ERROR:
      return {
        ...state,
        apiError: true,
        loadingData: false,
      };
    case API_END:
      return {
        ...state,
        loadingData: false,
      };
    default:
      return state;
  }
}
export default apiReducer