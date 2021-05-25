import * as actionTypes from '../types';

export const makePayment = paymentMethod => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.MAKE_PAYMENT_REQUEST })
    const { auth: { token } } = getState(); 

    const config = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    if (paymentMethod.method ===  'Mpesa') {
      const response = await fetch(`http://192.169.0.1:5000/api/v1/payment/${paymentMethod.method}`, config);
      const res = await response.json();
      if (res.status === 401 || res.status === 404) {
        dispatch({ type: actionTypes.MAKE_PAYMENT_FAIL });
      } else {
        dispatch({
          type: actionTypes.MAKE_PAYMENT_SUCCESS
        });
      }
    } else if (paymentMethod.method === 'Airtel') {
      const response = await fetch(`http://192.169.0.1:5000/api/v1/payment/${paymentMethod.method}`, config);
      const res = await response.json();
      if (res.status === 401 || res.status === 404) {
        dispatch({ type: actionTypes.MAKE_PAYMENT_FAIL });
      } else {
        dispatch({
          type: actionTypes.MAKE_PAYMENT_SUCCESS
        });
      }
    } else {
      // @todo making card payment
      console.log('making card payment');
    }

  } catch (error) {
    console.log(error);
    dispatch({ type: actionTypes.MAKE_PAYMENT_FAIL })
  }
} 