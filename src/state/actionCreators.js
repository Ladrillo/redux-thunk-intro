import * as types from './actionTypes'
import axios from 'axios'

const friendsAPI = 'http://localhost:4000/api/friends'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { inputName, inputValue }
  }
}

export const fetchAllFriends = () => dispatch => {
  dispatch({ type: types.FETCH_FRIENDS_START })
  dispatch({ type: types.SPINNER_START })
  axios.get(friendsAPI)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_FRIENDS, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}
