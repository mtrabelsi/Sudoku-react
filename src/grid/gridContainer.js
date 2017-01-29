import { connect } from 'react-redux'
import { move } from './actions'
import Grid from './grid'


const mapStateToProps = (state) => {
  return {
    game : Object.assign({}, state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    move: (sudokuBoard, moveRow, moveColumn, moveValue) => {
      dispatch(move(sudokuBoard, moveRow, moveColumn, moveValue))
    }
  }
}



const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid)

export default GridContainer
