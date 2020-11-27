import {
  SET_LOBBY,
  SET_LOBBY_LIST,
  SET_PLAYERS,
  SET_LOADING,
  GET_LOBBIES_FAILED,
  GET_LOBBIES_LOADING,
  GET_LOBBIES_SUCCESS,
  IS_PLAYED
} from "../actionTypes";

import axios from "../../axios/axios";
import {getBalance} from "./profile";

export const setLobbiesList = (list) => ({
  type: SET_LOBBY_LIST,
  list
})

export const setPlayers = (players) => ({
  type: SET_PLAYERS,
  players
})

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
})

export const isPlayed = (isPlayed) => ({
  type: IS_PLAYED,
  isPlayed
})

export const fetchLobbiesActionCreator = () => dispatch => {
  dispatch({type: GET_LOBBIES_LOADING})
  axios.get('/lobby/rates/')
    .then(response => {
      response.data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
      dispatch(setLobbiesList(response.data))
      dispatch({type: GET_LOBBIES_SUCCESS})
    })
    .catch(error => {
      dispatch({type: GET_LOBBIES_FAILED})
      console.log(error)
    })
}

export const setLobby = (lobby) => ({
  type: SET_LOBBY,
  lobby
})

export const enterGameActionCreator = (id, pk, balance, priceGame, closePopup) => dispatch => {
  dispatch(setLoading(true))
  axios.post('/lobby/users/', {rates: id, user: pk, balance: balance})
    .then(() => {
      closePopup()
    })
    .then(() => {
      dispatch(getBalance(balance - priceGame))
      dispatch(setLoading(false))
    })
    .catch(e => console.log(e))
}