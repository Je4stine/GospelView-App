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
  token: null,
  user: {},
  isAuthenticated: false,
  uploading: false,
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
        user: {},
        isAuthenticated: false,
        loading: false
      }
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: {},
        isAuthenticated: false,
      }
    case actionTypes.UPLOAD_AVATAR_REQUEST:
      return {
        ...state,
        uploading: true
      }
    case actionTypes.UPLOAD_AVATAR_SUCCESS:
    case actionTypes.UPLOAD_AVATAR_FAIL:
      return {
        ...state,
        uploading: false
      }
    default:
      return state;
  }
}

export default authReducer;