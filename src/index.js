import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import Reducer from './grid/reducer'
import Grid from './grid/gridContainer'

const loggerMiddleware = createLogger()

const store = createStore( Reducer,
  applyMiddleware( thunkMiddleware, loggerMiddleware )
)

ReactDOM.render(
  <Provider store={store}>
    <Grid />
  </Provider>,
  document.getElementById('root')
);
