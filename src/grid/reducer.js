
import { NEW_GAME, MOVE_STARTED, MOVE_BAD_REQUEST, MOVE_CONFLICT, MOVE_SUCCESS } from './actions'
import { defaultBoard } from './../game.const'

const initState = {
  sudokuBoard : defaultBoard,
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
    case NEW_GAME: {
      return Object.assign({}, state, {
        sudokuBoard : action.value,
        fetch : {
          isFetching: false,
          fetchRow : -1,
          fetchCol : -1
        },
        isMoveOk : true,
        conflictRow : -1,
        conflictColumn : -1,
        gameOver : false
      })
    }
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
