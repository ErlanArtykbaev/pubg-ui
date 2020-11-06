import {
  GET_ALL,
  GET_TOKEN,
  NEW_USER,
  SET_USER,
  GET_PROFILE, SET_TOKEN, GET_NAME, GET_PHONE, GET_BALANCE
} from "../actionTypes";

export const getToken = () => ({
  type: GET_TOKEN
})

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload
})

export const getAll = () => ({
  type: GET_ALL
})

export const newUser = (user) => ({
  type: NEW_USER,
  payload: user
})

export const setUser = (payload) => ({
  type: SET_USER,
  payload
})

export const getName = () => ({
  type: GET_NAME,
})
export const getPhone = () => ({
  type: GET_PHONE,
})
export const getBalance = () => ({
  type: GET_BALANCE,
})

export const getProfile = (payload) => ({
  type: GET_PROFILE,
  payload
})