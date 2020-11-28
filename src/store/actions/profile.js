import {
  SET_TOKEN, 
  IS_LOG, 
  SET_PROFILE,
  GET_BALANCE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS,
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../actionTypes"

import { loading, notLoading} from "./isLoading"
import {logIn, logOut} from "./logInOut"
import axios from "../../axios/axios"
import {hideState, showState} from "./isAuthState";
import {showLogin} from "./modalLogin";

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload
})

export const getBalance = (balance) => ({
  type: GET_BALANCE,
  balance
})

export const fetchProfileActionCreator = () => dispatch => {
  dispatch(loading())
  dispatch({ type: GET_PROFILE_LOADING })
  const token = localStorage.getItem('token')
  axios.get('/profile/', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .then((response) => {
      dispatch(setProfile(response.data))
      dispatch(logIn())
      dispatch(checkIsLog(true))
      dispatch(notLoading())
      dispatch({ type: GET_PROFILE_SUCCESS})
      dispatch(getBalance(response.data.balance))
      dispatch(showLogin())
    })
    .catch((e) => {
      console.log(e.message)
      dispatch(checkIsLog(false))
      dispatch(logOut())
      dispatch(notLoading())
      dispatch(setToken(''))
      dispatch({ type: GET_PROFILE_FAILED })
    })
}

export const fetchLoginActionCreator = (body) => dispatch => {
  dispatch({ type: FETCH_LOADING })
  axios.post('/login/',
    body
  )
    .then( response => {
      if( response.data.token !== '') {
        localStorage.setItem('token', `Token ${response.data.token}` )
        dispatch(setToken(`Token ${response.data.token}`))
      } 
      dispatch({ type: FETCH_SUCCESS })
      dispatch(logIn())
      dispatch(showState())
      dispatch(fetchProfileActionCreator({...response.data}))
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
    })
    .catch(e => {
      dispatch({ type: FETCH_FAILED })
      dispatch(showState())
      dispatch(logOut())
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
      console.log(e)
    })
}

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})

