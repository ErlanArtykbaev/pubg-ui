import {
  GET_ALL,
  GET_TOKEN,
  NEW_USER,
  SET_EMAIL,
  SET_PASSWORD,
  SET_USERNAME,
  GET_PROFILE, SET_TOKEN
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

export const setUsername = (name) => ({
  type: SET_USERNAME,
  payload: name
})

export const setPassword = (pass) => ({
  type: SET_PASSWORD,
  payload: pass
})

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email
})

export const getProfile = (payload) => ({
  type: GET_PROFILE,
  payload
})