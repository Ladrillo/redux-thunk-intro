import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './state/actionCreators'
import './App.css'

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state (injected by STEP-8)
  formValues,
  friends,
  spinnerOn,
  // B- callbacks to change state (action creators injected by STEP-9)
  changeInput,
  fetchAllFriends,
  // C- props actually injected by the parent component
}) {
  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value,
    })
  }
  const onSubmit = event => {
    event.preventDefault()
    // ???
  }
  const onMarkFriendMarried = (/* ??? */) => event => {
    // ???
  }

  useEffect(() => {
    fetchAllFriends()
  }, [])

  if (spinnerOn) {
    return <div className="spinner">Please Wait</div>
  }

  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a new friend (married defaults to false)</h4>
      <form className='form' onSubmit={onSubmit}>
        <label>first name
        <input
            value={formValues.fname}
            onChange={onChange}
            name='fname'
          />
        </label><br />

        <label>last name
        <input
            value={formValues.lname}
            onChange={onChange}
            name='lname'
          />
        </label><br />

        <input type='submit' />
      </form>

      {/* list of current friends */}
      <h4>My friends:</h4>
      {
        friends.map(fr => (
          <div
            key={fr.id}
          >
            {fr.fname} {fr.lname} is{fr.married ? ' happily ' : ' NOT '}married
            <button onClick={Function.prototype /* ??? */}>Mark Married</button>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    // what props do we want the component to get?
    formValues: state.formValues,
    friends: state.friends,
    spinnerOn: state.spinnerOn,
    // anything you want and is derived from state
  }
}

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
export default connect(
  mapStateToProps,
  actionCreators, // STEP-9 BRING IN THE ACTION CREATORS
)(App)
