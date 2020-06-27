import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class CardSetMenu extends Component {
  render() {
    return (
      <div className="set-menu" style={setMenuStyle}>
        {(this.props.setDict) &&
          getSetItems(this.props.setDict).map(set => {
            return <MenuOption dest={`/sets/${set._id}`} option={set.title} key={set._id} />
          })
        }
      </div>
    )
  }
}

const getSetItems = setDict => {
  let lst = []
  for (let key in setDict) {
    if (setDict.hasOwnProperty(key)) lst.push(setDict[key]);
  }
  return lst;
}

const setMenuStyle = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',

}

export default CardSetMenu
