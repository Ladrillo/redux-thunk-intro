import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import thunk from 'redux-thunk'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { formReducer, friendsReducer } from './state/reducers'

// STEP-4 USE combineReducers FROM redux TO MAKE A SINGLE REDUCER
const combinedReducer = combineReducers({
  formValues: formReducer,
  friends: friendsReducer,
})

// STEP-5 USE createStore FROM redux TO MAKE A STATE STORE
const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk /* ,etc , other middlewares */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.render(
  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM react-redux
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
