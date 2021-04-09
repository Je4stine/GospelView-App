import * as actionTypes from '../types';

const initialState = {
  error: null
}

const errorReducer = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_SERVER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default errorReducer;