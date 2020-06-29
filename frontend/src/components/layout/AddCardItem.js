import React, { Component } from 'react'

export class AddCardItem extends Component {
  render() {
    return (
      <form className="add-card-item" style={menuOptionStyle}>
        <input type="text" placeholder="Question..."></input>
        <input type="text" placeholder="Answer..."></input>
        <input type="text" placeholder="Hint (optional)"></input>
        <input type="submit"></input>
      </form>
    )
  }
}

const menuOptionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '2px solid black',
  borderRadius: '10px',
  width: '400px',
  height: '250px',
  marginTop: '30px',
}

export default AddCardItem
