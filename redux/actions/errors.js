import * as actionTypes from '../types';

export const getServerError = error => dispatch => {
  dispatch({
    type: actionTypes.GET_SERVER_ERROR,
    payload: { msg: error.msg, status: error.status }
  })
};