import * as actionTypes from '../types';

export const loadPackages = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.PACKAGES_GET_REQUEST });

    const response = await fetch('http://192.168.0.102:5000/api/v1/packages/list');
    const res = await response.json();
    console.log(res);
    dispatch({
      type: actionTypes.PACKAGES_GET_SUCCESS,
      payload: res
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: actionTypes.PACKAGES_GET_FAIL });
  }
}

export const selectPackage = packageType => dispatch => {
  dispatch({ 
    type: actionTypes.SELECTED_USER_PACKAGE,
    payload: packageType
  });
}