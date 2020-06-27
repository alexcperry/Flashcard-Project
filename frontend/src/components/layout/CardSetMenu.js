import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class CardSetMenu extends Component {
  render() {
    return (
      <div className="set-menu" style={setMenuStyle}>
        {(this.props.sets) &&
          this.props.sets.map(set => <MenuOption dest="/" option={set.title} key={set._id} />)
        }
      </div>
    )
  }
}

const setMenuStyle = {
  width: '80%',
  margin: '50px auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',

}

export default CardSetMenu
