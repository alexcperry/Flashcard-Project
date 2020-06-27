import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class Set extends Component {
  render() {
    return (
      <div className="set-page" style={setStyle}>
        <MenuOption option="Study" />
        <MenuOption option="Add Cards" />
      </div>
    )
  }
}

const setStyle = {
  width: '75%',
  margin: '50px auto',
  display: 'flex',
  justifyContent: 'space-evenly'
}

export default Set
