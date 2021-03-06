import * as types from './actionTypes'

// STEP-1 DESIGN APPLICATION STATE
// {
//   formValues: { // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [    // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
//   spinnerOn: false,
// }

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
    case types.RESET_INPUTS:
      return initialStateForm
    default:
      return state
  }
}

const initialStateFriends = []
export function friendsReducer(state = initialStateFriends, action) {
  switch (action.type) {
    default:
      return state
  }
}
