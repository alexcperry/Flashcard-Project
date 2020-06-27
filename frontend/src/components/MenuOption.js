import React, { Component } from 'react'

export class MenuOption extends Component {
  render() {
    return (
      <div className="menu-option" style={menuOptionStyle}>
        <h1>{this.props.option}</h1>
      </div>
    )
  }
}

const menuOptionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid black',
  borderRadius: '10px',
  width: '400px',
  height: '250px'
}

export default MenuOption
