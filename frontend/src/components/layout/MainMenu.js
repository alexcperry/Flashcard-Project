import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu" style={mainMenuStyle}>
        <MenuOption option="Flashcard Sets" dest="/set-menu" />
        <MenuOption option="Make a Set" dest="/new-set" />
      </div>
    )
  }
}

const mainMenuStyle = {
  width: '75%',
  margin: '50px auto',
  display: 'flex',
  justifyContent: 'space-evenly'
}

export default MainMenu
