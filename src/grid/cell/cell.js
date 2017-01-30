import React from 'react'
import InnerPopup from './innerPopup/innerPopup'
import Loading from './loading/loading'
import './cell.css'
import CellHelper from './cell.helper'

class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.state = { clicked : false }
    this.CellHelper = new CellHelper(this)
  }
  componentWillReceiveProps() {
    this.setState({ clicked : false })
  }
  render() {
    return (
      <td className={'square '+ this.props.classNames} onClick={this.CellHelper.showPopup}>
        <div className={this.CellHelper.errorHighlight()}>
        {this.props.value !== 0 && !this.state.clicked && !this.CellHelper.isFetching() ? this.props.value : ''}
        {this.state.clicked && !this.props.game.isFetching || this.props.value !== 0 && this.state.clicked&&!this.props.game.isFetching ? <InnerPopup size={Math.sqrt(this.props.game.sudokuBoard.length)} handleClick={this.CellHelper.clickPopup} /> : ''}
        {this.CellHelper.isFetching() ? <Loading /> : '' }
        </div>
      </td>
    )
  }
}

export default Cell
