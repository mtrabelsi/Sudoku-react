import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import Reducer from './grid/reducer'
import Game from './game'

const loggerMiddleware = createLogger()

const store = createStore( Reducer,
  applyMiddleware( thunkMiddleware, loggerMiddleware )
)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
