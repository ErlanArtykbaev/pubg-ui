import {
  GET_ALL, GET_BALANCE, GET_NAME, GET_PHONE,
  GET_TOKEN,
  SET_TOKEN, SET_USER
} from "../actionTypes";

const initialState = {
  balance: "0",
  contact_number: "",
  date_joined: "initial",
  email: null,
  id: 1,
  is_active: true,
  is_staff: true,
  last_login: "hz",
  link_code: null,
  name: "initial",
  phone: "initial",
  player_id: "initial",
  token: "initial",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
      }
    case GET_TOKEN:
      return state.token
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case GET_NAME:
      return state.name
    case GET_BALANCE:
      return state.balance
    case GET_PHONE:
      return state.phone
    case SET_USER:
      return {
        ...action.payload
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
