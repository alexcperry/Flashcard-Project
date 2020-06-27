import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class CardSetMenu extends Component {
  render() {
    return (
      <div className="set-menu">
        <MenuOption />
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </div>
    )
  }
}

export default CardSetMenu
