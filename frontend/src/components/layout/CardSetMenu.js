import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class CardSetMenu extends Component {
  render() {
    console.log('sets in set menu:  ', this.props.sets);
    return (
      <div className="set-menu">
        {(this.props.sets) &&
          this.props.sets.map(set => <MenuOption to="/" option={set.title} />)
        }
      </div>
    )
  }
}

export default CardSetMenu
