import * as types from './actionTypes'

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { fname: '', lname: '' }
export function formReducer(state = initialStateForm, action) {
  // ACTION { type: "INPUT_CHANGE", payload: { inputName: 'fname', inputValue: "S" }}
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      }
    default:
      return state
  }
}

const initialStateFriends = []
export function friendsReducer(state = initialStateFriends, action) {
  // ACTION { type: "ADD_FRIEND", payload: { fname: "alison", lname: "smith", id: "1233", married: false }}
  switch (action.type) {
    case types.ADD_FRIEND:
      return state.concat(action.payload)
    default:
      return state
  }
}
