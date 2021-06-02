import * as actionTypes from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.AUTH_START_REQUEST });
    const data = JSON.stringify(formData);
    
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    }

    const response = await fetch('https://gospelview.herokuapp.com/api/v1/users/login', config);
    const res = await response.json();

    if (res.status === 400) {
      dispatch({ type: actionTypes.AUTH_SIGNIN_FAIL });
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      return false
    } else {
      dispatch({
        type: actionTypes.AUTH_SIGNIN_SUCCESS,
        payload: { 
          token: res.token, 
          user: { 
            id: res.id, 
            email: res.email, 
            isAdmin: res.isAdmin, 
            status: res.status, 
            subscribed: res.subscribed,
            avatar: res.avatar,
            name: res.name,
            phone: res.phone
          }
        }
      });
      const { auth: { token, user } } = getState();
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return true;
    }

  } catch (error) {
    console.log(error)
    dispatch({ type: actionTypes.AUTH_SIGNIN_FAIL }); 
    // dispatch({ 
    //   type: actionTypes.GET_SERVER_ERROR, 
    //   payload: error.errors[0].msg
    // });
    return false
  }
}


export const register = (formData) => async  (dispatch) => {
  try {
    dispatch({ type: actionTypes.AUTH_START_REQUEST });

    const data = JSON.stringify(formData); 
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    }

    const response = await fetch('https://gospelview.herokuapp.com/api/v1/users/register', config);
    const res = await response.json();

    if (res.status === 400) {
      dispatch({ type: actionTypes.AUTH_SIGNUP_FAIL });
      dispatch({ 
        type: actionTypes.GET_SERVER_ERROR, 
        payload: {msg: res.message, status: res.status}
      });
      return {response:false, msg: res.message, status:res.status};
    } else {
      dispatch({ type: actionTypes.AUTH_SIGNUP_SUCCESS });
      return {response:true, msg: res.message, status:res.status}
    }

  } catch (error) {
    console.log(error)
    dispatch({ type: actionTypes.AUTH_SIGNUP_FAIL });
    dispatch({ 
      type: actionTypes.GET_SERVER_ERROR, 
      payload: {msg: error.message, status: error.status}
    });
    return {response:false, msg: 'Internal server error', status:500};
  }
}


export const checkValidToken = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.AUTH_START_REQUEST });
    const { auth: { token } } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }

    const res = await fetch('https://gospelview.herokuapp.com/api/v1/users/profile', config);

    if(res.status === 401) {
      dispatch({ type: actionTypes.AUTH_SIGNIN_FAIL });
      await AsyncStorage.removeItem('token')
      await AsyncStorage.removeItem('user')
      return false;
    } else {
      dispatch({
        type: actionTypes.AUTH_SIGNIN_SUCCESS,
        payload: { 
          token: token, 
          user: { 
            id: res.id, 
            email: res.email, 
            isAdmin: res.isAdmin, 
            status: res.status, 
            subscribed: res.subscribed
          }
        }
      });  
      const { auth: { token, user } } = getState();
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return true
    } 
  } catch (error) {
    console.error(error);
    dispatch({ type: actionTypes.AUTH_SIGNIN_FAIL });
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    return false;
  }
}

export const logout = () => dispatch => {
  dispatch({ type: actionTypes.USER_LOGOUT });
}

export const uploadUserAvatar = async (image, token) => {
  try {
    const formData = new FormData();
    formData.append('localUri', image.localUri)
    console.log({image}) 
    const config = {
      method: 'POST',
      headers: {  
        Accept: "application/json", 
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
      body: formData
    }
    const response = await fetch('https://gospelview.herokuapp.com/api/v1/users/avatar', config);
    const res = await response.json(); 
    if (res.status === 400 || res.status === 401) {  
      return false;
    } else { 
      return true
    }
  } catch (error) { 
    return false;
  }
}