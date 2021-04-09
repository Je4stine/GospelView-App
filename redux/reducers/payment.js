import * as actionTypes from '../types';

const initialState = {
  paymentMethod: null,
  isPaid: false,
  loading: false
}

const paymentReducer = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MAKE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        isPaid: true,
        loading: false
      }
    case actionTypes.MAKE_PAYMENT_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default paymentReducer;