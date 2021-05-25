import * as actionTypes from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const user = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('auth')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
  }
}


const token = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    return value != null ? value : null;
  } catch(e) {
    console.log(e)
  }
}

let tokenData = token();
let userData = user();

const initialState = {
  loading: false,
  token: tokenData ? tokenData: null,
  user: userData ? userData : {
    email: null,
    id: null,
    subscribed: false,
    isAdmin: false,
    status: false
  },
  isAuthenticated: tokenData ? true: false
}

const authReducer = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_START_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_SIGNIN_SUCCESS:
      return  {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false
      }  
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case actionTypes.AUTH_SIGNIN_FAIL:
    case actionTypes.AUTH_SIGNUP_FAIL:
      return {
        ...state,
        token:  null,
        user: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state;
  }
}

export default authReducer;