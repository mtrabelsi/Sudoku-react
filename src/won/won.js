import React from 'react'
import './won.css'

class Won extends React.Component {
  render(){
    return (<div className='AlertBox'>
        <span>You <b>won!</b>, are you ready for a new game?</span><br />
        <button>New Board</button>
      </div>)
  }
}


export default Won
