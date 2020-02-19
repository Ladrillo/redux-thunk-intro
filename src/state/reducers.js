import * as types from './actionTypes'

// {
//   formValues: { // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [    // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
//   isSpinnerOn: false,
// }

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { fname: '', lname: '' }
export function formReducer(state = initialStateForm, action) {
  // ACTION
  // { type: "INPUT_CHANGE", payload: { inputName: 'fname', inputValue: "S" }}
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
  // ACTION
  // { type: "ADD_FRIEND", payload: { fname: "alison", lname: "smith", id: "1233", married: false }}
  switch (action.type) {
    case types.ADD_FRIEND:
      return state.concat(action.payload)
    case types.MARK_MARRIED:
      return state.map(fr => {
        if (action.payload === fr.id) {
          return { ...fr, married: true }
        }
        return fr
      })
    default:
      return state
  }
}
