import * as types from './actionTypes'
import uuid from 'uuid'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { inputName, inputValue }
  }
}

export function addFriend({ fname, lname }) {
  return {
    type: types.ADD_FRIEND,
    payload: {
      id: uuid(),
      fname,
      lname,
      married: false,
    }
  }
}

export function markFriendMarried(id) {
  return {
    type: types.MARK_MARRIED,
    payload: id
  }
}
