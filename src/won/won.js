import React from 'react'
import { connect } from 'react-redux'
import { newGame } from './../grid/actions'
import { defaultBoard } from './../game.const'
import './won.css'

class Won extends React.Component {
  render(){
    return (<div className='alertBox'>
        <span>You <b>won!</b>, are you ready for a new game?</span><br />
        <button onClick={e => this.props.newGame()}>New Board</button>
      </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: () => {
      dispatch(newGame(defaultBoard))
    }
  }
}

const WonContainer = connect(null, mapDispatchToProps)(Won)
export default WonContainer
