import { connect } from 'react-redux'
import { move } from './grid/actions'
import Grid from './grid/grid'
import React from 'react'

class Game extends React.Component {
  render(){
    return (<div>
              <Grid move={this.props.move} game={this.props.game} />
           </div>)
  }
}


const mapStateToProps = (state) => {
  return {
    game : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    move: (sudokuBoard, moveRow, moveColumn, moveValue) => {
      dispatch(move(sudokuBoard, moveRow, moveColumn, moveValue))
    }
  }
}




const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameContainer
