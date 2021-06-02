import * as actionTypes from '../types';

const initialState = {
  package: {},
  packages: [],
  loading: false
}

const packageReducer = function(state = initialState, action)  {
  switch (action.type) {
    case actionTypes.SELECTED_USER_PACKAGE:
      return {
        ...state,
        package: action.payload
      }
    case actionTypes.PACKAGES_GET_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.PACKAGES_GET_SUCCESS:
      return {
        ...state,
        packages: action.payload,
        loading: false
      }
    case actionTypes.PACKAGES_GET_FAIL:
      return {
        ...state,
        packages: [],
        loading: false
      }
    default:
      return state;
  }
}

export default packageReducer;