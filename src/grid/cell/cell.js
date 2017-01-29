import React from 'react'
import InnerPopup from './innerPopup/innerPopup'
import Loading from './loading/loading'
import './cell.css'

class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.state = { clicked : false }
    this.showPopup = this.showPopup.bind(this)
    this.clickPopup = this.clickPopup.bind(this)
  }
  showPopup(e) {
    if( e.target.innerText === '') {
      this.setState({ clicked : true })
    }
  }
  clickPopup(e) {
    this.props.move(this.props.game.sudokuBoard, this.props.row, this.props.column, Number(e.target.innerText))
    this.setState( prevState => ({
        clicked: !prevState.clicked
      })
    )
  }
  render() {
    const req = this.props.game.fetch
    return (
      <td className='square' onClick={this.showPopup}>
        {this.props.value !== 0 ? this.props.value : ''}
        {this.state.clicked && !this.props.game.isFetching ? <InnerPopup handleClick={this.clickPopup} /> : ''}
        {req.isFetching && this.props.row===req.fetchRow && this.props.column===req.fetchCol ? <Loading /> : '' }
      </td>
    )
  }
}

/* */
export default Cell
