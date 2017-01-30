
import { MOVE_STARTED, MOVE_BAD_REQUEST, MOVE_CONFLICT, MOVE_SUCCESS } from './actions'

const initState = { sudokuBoard :[[7,0,0,0,4,0,5,3,0],[0,0,5,0,0,8,0,1,0],[0,0,8,5,0,9,0,4,0],
                                  [5,3,9,0,6,0,0,0,1],[0,0,0,0,1,0,0,0,5],[8,0,0,7,2,0,9,0,0],
                                  [9,0,7,4,0,0,0,0,0],[0,0,0,0,5,7,0,0,0],[6,0,0,0,0,0,0,5,0]],
  fetch : {
    isFetching: false,
    fetchRow : -1,
    fetchCol : -1
  },
  isMoveOk : true,
  conflictRow : -1,
  conflictColumn : -1,
  gameOver : false
}

export default function(state = initState, action) {
  switch (action.type) {
    case MOVE_STARTED: {
      return Object.assign({}, state, { fetch : {
          isFetching: true,
          fetchRow : action.value.fetchRow,
          fetchCol : action.value.fetchCol
         }
       })
    }
    case MOVE_BAD_REQUEST: {
      return Object.assign({}, state, {fetch : {
          isFetching: false,
          fetchRow : -1,
          fetchCol : -1
        }})
    }
    //{board: null, conflictRow: 0, conflictColumn: 0, valid: false, gameOver: false}
    case MOVE_CONFLICT: {
      return Object.assign({}, state, {
        isMoveOk : action.value.valid,
        conflictRow : action.value.conflictRow,
        conflictColumn : action.value.conflictColumn,
        gameOver : action.value.gameOver,
        fetch : {
          isFetching: false,
          fetchRow : -1,
          fetchCol : -1
        }})
    }

    case MOVE_SUCCESS: {
      return Object.assign({}, state, {
        sudokuBoard : action.value.board,
        fetch : {
          isFetching: false,
          fetchRow : -1,
          fetchCol : -1
        },
        isMoveOk : action.value.valid,
        conflictRow : action.value.conflictRow,
        conflictColumn : action.value.conflictColumn,
        gameOver : action.value.gameOver
      })
    }

    default: return state

  }
}
