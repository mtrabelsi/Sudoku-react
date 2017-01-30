
import React from 'react'
import './innerPopup.css'

class InnerPopup extends React.Component {
  render() {
    const arr = new Array(this.props.size).fill(0)
    let i = 0
    return (
      <table className='inner'>
        <tbody>
          {arr.map( ( valTR, indexTR ) => {
            return ( <tr key={indexTR}>
              {arr.map( ( valTD, indexTD ) => {
               return ( <td key={indexTD} onClick={this.props.handleClick}> {++i} </td>)
             })}
              </tr>)
          })}
        </tbody>
      </table>
    )
  }
}

export default InnerPopup
