import * as actionTypes from '../types';

const initialState = {
  msg: null,
  status: null
}

const errorReducer = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_SERVER_ERROR: 
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status
      }; 
    default:
      return state;
  }
}

export default errorReducer;