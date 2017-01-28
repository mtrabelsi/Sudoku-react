import React from 'react'
import Cell from './cell/cell'
import './grid.css'

class Grid extends React.Component {

  render() {
    return (<table className="table"><tbody>
      {this.props.sudokuBoard.map( (line, lineIndex) => {
        return (<tr key={lineIndex}>
          {line.map( (cell, cellIndex) => {
            return <Cell key={cellIndex} value={cell} />
          })}</tr>)
        })}
    </tbody></table>)
  }

}


export default Grid
