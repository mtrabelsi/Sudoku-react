import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './grid/grid'

const data = {"sudokuBoard":[[7,0,0,0,4,0,5,3,0],[0,0,5,0,0,8,0,1,0],[0,0,8,5,0,9,0,4,0],[5,3,9,0,6,0,0,0,1],[0,0,0,0,1,0,0,0,5],[8,0,0,7,2,0,9,0,0],[9,0,7,4,0,0,0,0,0],[0,0,0,0,5,7,0,0,0],[6,0,0,0,0,0,0,5,0]]}

ReactDOM.render(
  <Grid sudokuBoard={data.sudokuBoard} />,
  document.getElementById('root')
);
