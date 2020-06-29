import React, { Component } from 'react';
import AddCardItem from './AddCardItem';
import CreatedCardDiv from './CreatedCardDiv';

export class AddCardPage extends Component {

  state = {
    addedCards: 0
  }

  addCreateDiv = () => {
    this.setState({ addedCards: (this.state.addedCards + 1) })
  }

  render() {
    //Make card divs
    let cardDivs = []
    for (let i = 0; i < this.state.addedCards; i++) {
      cardDivs.push(<CreatedCardDiv key={i} />)
    }

    return (
      <div className="add-card-page" style={addCardPageStyle}>
        <h1 style={{ "marginTop": "30px" }}>Add cards to me</h1>
        {cardDivs}
        <AddCardItem {...this.props} createCard={this.props.createCard} addCreatedDiv={this.addCreateDiv} />
      </div>
    )
  }
}

const addCardPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default AddCardPage
