import React from 'react'
import Cell from './cell/cell'
import './grid.css'

class Grid extends React.Component {
  getClassNames(l, c) {
    const ret = ([0,1,2,6,7,8].includes(l) && [0,1,2,6,7,8].includes(c) || [3,4,5].includes(l)&&[3,4,5].includes(c))
    return ret ? 'highlight' : ''
  }
  render() {
    return (<table className="table"><tbody>
      {this.props.game.sudokuBoard.map( (line, lineIndex) => {
        return (<tr key={lineIndex}>
          {line.map( (cell, cellIndex) => {
            return <Cell key={cellIndex} classNames={this.getClassNames(lineIndex, cellIndex)} column={cellIndex} row={lineIndex} game={this.props.game} move={this.props.move} value={cell} />
          })}</tr>)
        })}
    </tbody></table>)
  }
}

export default Grid
