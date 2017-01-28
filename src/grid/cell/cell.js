import React from 'react'
import InnerPopup from './innerPopup/innerPopup'
import './cell.css'

class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.state = { clicked : false, currentValue: this.props.value }
    this.showPopup = this.showPopup.bind(this)
    this.clickPopup = this.clickPopup.bind(this)
  }
  showPopup(e) {
    if( e.target.innerText === '') {
      this.setState({ clicked : true })
    }
  }
  clickPopup(e) {
    console.log('popup',e.target.innerText)
    this.setState({ currentValue: Number(e.target.innerText) })
  }

  render() {
    return (
      <td className='square' onClick={this.showPopup}>
        {
          this.state.currentValue !== 0 ?
          this.state.currentValue :
          (this.state.clicked ? <InnerPopup handleClick={this.clickPopup} /> : '')
        }
      </td>
    )
  }
}

export default Cell
