import axios from 'axios'

export const MOVE_STARTED = 'MOVE_STARTED'
export const MOVE_SUCCESS = 'MOVE_SUCCESS'
export const MOVE_BAD_REQUEST = 'MOVE_BAD_REQUEST'
export const MOVE_CONFLICT = 'MOVE_CONFLICT'


export function moveStarted(row, col) {
  return {
    type : MOVE_STARTED,
    value : {
      fetchRow : row,
      fetchCol : col
    }
  }
}

export function moveSuccess(response) {
  return {
    type : MOVE_SUCCESS,
    value : response
  }
}
 export function moveBadRequest() {
   return {
     type : MOVE_BAD_REQUEST
   }
 }

 export function moveConflict(response) {
   return {
     type : MOVE_CONFLICT,
     value : response
   }
 }

 export function move(sudokuBoard, moveRow, moveColumn, moveValue) {
   return function(dispatch) {
     dispatch(moveStarted(moveRow, moveColumn))
     return axios.put('https://afternoon-mountain-94217.herokuapp.com/sudoku/',{
       "sudokuBoard" : sudokuBoard,
       "moveRow" : moveRow,
       "moveColumn": moveColumn,
       "moveValue": moveValue
     }).then( response => {
       dispatch(moveSuccess(response.data))
     }).catch(function (error) {
       const status = error.response.status
       if(status === 409) {
           dispatch(moveConflict(error.response.data))
       } else {
         if (status === 400){
           dispatch(moveBadRequest())
         }
       }
    })
   }
 }
