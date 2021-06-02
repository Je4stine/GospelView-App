import * as actionTypes from '../types';

const initialState = {
  videos: [],
  audios: [],
  video: {},
  audio: {},
  downloads: [],
  loading: false,
  downloading: false
}

const mediaReducer = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PLAY_SELECTED_VIDEO: 
      return {
        ...state,
        video: action.payload
      };
    case actionTypes.PLAY_SELECTED_AUDIO:
      return {
        ...state,
        audio: action.payload
      }
    case actionTypes.DOWNLOAD_VIDEO_REQUEST:
    case actionTypes.DOWNLOAD_AUDIO_REQUEST:
    case actionTypes.GET_DOWNLOADS_REQUEST:
      return {
        ...state,
        downloading: true
      }
    case actionTypes.DOWNLOAD_VIDEO_SUCCESS:
    case actionTypes.DOWNLOAD_AUDIO_SUCCESS: 
    case actionTypes.DOWNLOAD_VIDEO_FAIL:
    case actionTypes.DOWNLOAD_AUDIO_FAIL:
    case actionTypes.GET_DOWNLOADS_FAIL:
      return {
        ...state,
        downloading: false
      }
    case actionTypes.GET_VIDEOS_REQUEST:
    case actionTypes.GET_AUDIOS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      }
    case actionTypes.GET_AUDIOS_SUCCESS:
      return {
        ...state,
        audios: action.payload,
        loading: false
      }
    case actionTypes.GET_DOWNLOADS_SUCCESS:
      return {
        ...state,
        downloads: action.payload,
        downloading: false
      }
    case actionTypes.GET_VIDEOS_FAIL:
    case actionTypes.GET_AUDIOS_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default mediaReducer;