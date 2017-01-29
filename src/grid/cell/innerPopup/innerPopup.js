
import React from 'react'
import './innerPopup.css'

class InnerPopup extends React.Component {
  render() {
    return (
      <table className='inner'>
        <tbody>
          <tr><td onClick={this.props.handleClick}>1</td><td onClick={this.props.handleClick}>2</td><td onClick={this.props.handleClick}>3</td></tr>
          <tr><td onClick={this.props.handleClick}>4</td><td onClick={this.props.handleClick}>5</td><td onClick={this.props.handleClick}>6</td></tr>
          <tr><td onClick={this.props.handleClick}>7</td><td onClick={this.props.handleClick}>8</td><td onClick={this.props.handleClick}>9</td></tr>
        </tbody>
      </table>
    )
  }
}


export default InnerPopup
