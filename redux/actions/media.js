import * as actionTypes from '../types';

export const playCurVideo = (video) => dispatch => {
  dispatch({ type: actionTypes.PLAY_SELECTED_VIDEO, payload: video })
}


export const playCurAudio = audio => dispatch => {
  dispatch({ type: actionTypes.PLAY_SELECTED_AUDIO, payload: audio });
}


export const loadVideos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_VIDEOS_REQUEST });
    const { auth: { token } } = getState();  
    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    }
    const response = await fetch('https://gospelview.herokuapp.com/api/v1/videos/list', config);
    const res = await response.json();
    if (res.status === 400 || res.status === 401) {
      dispatch({ type: actionTypes.GET_VIDEOS_FAIL });
      return [];
    } else {
      dispatch({
        type: actionTypes.GET_VIDEOS_SUCCESS,
        payload: res 
      });
      return res;
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_VIDEOS_FAIL });
    return [];
  }
}


export const loadAudios = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_AUDIOS_REQUEST });
    const { auth: { token } } = getState();  
    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    }
    const response = await fetch('https://gospelview.herokuapp.com/api/v1/audios/list', config);
    const res = await response.json();
    if (res.status === 400 || res.status === 401) {
      dispatch({ type: actionTypes.GET_AUDIOS_FAIL });
      return [];
    } else {
      dispatch({
        type: actionTypes.GET_AUDIOS_SUCCESS,
        payload: res 
      });
      return res;
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_AUDIOS_FAIL });
    return [];
  }
}


export const downloadVideoMedia = (media) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.DOWNLOAD_VIDEO_REQUEST });
    const { auth: { token } } = getState();

    const data = JSON.stringify({ mediaId: media.videoId, mediaType: 'Video', mediaUrl: media.videoUrl, thumbnail: media.thumbnail, description: media.description });
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: data
    }

    const response = await fetch('https://gospelview.herokuapp.com/api/v1/videos/download', config);
    const res = await response.json();
    if (res.status === 400 || res.status === 401) {
      dispatch({ type: actionTypes.DOWNLOAD_VIDEO_FAIL });
      return false;
    } else {
      dispatch({ type: actionTypes.DOWNLOAD_VIDEO_SUCCESS });
      dispatch(loadDownloads())
      return true;
    }
  } catch (error) {
    dispatch({ type: actionTypes.DOWNLOAD_VIDEO_FAIL });
    return false;
  }
}


export const downloadAudioMedia = (media) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.DOWNLOAD_AUDIO_REQUEST });
    const { auth: { token } } = getState();

    const data = JSON.stringify({ mediaId: media.audioId, mediaType: 'Audio', mediaUrl: media.audioUrl, thumbnail: media.thumbnail, description: media.description }); 
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: data
    }

    const response = await fetch('https://gospelview.herokuapp.com/api/v1/audios/download', config);
    const res = await response.json();
    if (res.status === 400 || res.status === 401) {
      dispatch({ type: actionTypes.DOWNLOAD_AUDIO_FAIL });
      return false;
    } else {
      dispatch({ type: actionTypes.DOWNLOAD_AUDIO_SUCCESS });
      return true;
    }
  } catch (error) {
    dispatch({ type: actionTypes.DOWNLOAD_AUDIO_FAIL });
    return false;
  }
}


export const loadDownloads = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_DOWNLOADS_REQUEST });
    const { auth: { token } } = getState();

    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    }
    const response = await fetch('https://gospelview.herokuapp.com/api/v1/users/me/downloads', config);
    const res = await response.json();
    if (res.status === 400 || res.status === 401) {
      dispatch({ type: actionTypes.GET_DOWNLOADS_FAIL });
      return [];
    } else {
      dispatch({
        type: actionTypes.GET_DOWNLOADS_SUCCESS,
        payload: res 
      });
      return res;
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_DOWNLOADS_FAIL });
    return [];
  }
}