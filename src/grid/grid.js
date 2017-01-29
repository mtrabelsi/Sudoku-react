import React from 'react'
import Cell from './cell/cell'
import './grid.css'

class Grid extends React.Component {

  render() {
    return (<table className="table"><tbody>
      {this.props.game.sudokuBoard.map( (line, lineIndex) => {
        return (<tr key={lineIndex}>
          {line.map( (cell, cellIndex) => {
            return <Cell key={cellIndex} column={cellIndex} row={lineIndex} game={this.props.game} move={this.props.move} value={cell} />
          })}</tr>)
        })}
    </tbody></table>)
  }

}


export default Grid
