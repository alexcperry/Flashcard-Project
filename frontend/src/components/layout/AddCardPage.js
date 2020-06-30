import React, { Component } from 'react';
import AddCardForm from './AddCardForm';
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

    const setTitle = this.props.setDict[this.props.match.params.id].title

    return (
      <div className="add-card-page" style={addCardPageStyle} >
        <h1 style={{ "marginTop": "30px" }}>Add cards to: {' '}
          <span>{setTitle}</span>
        </h1>
        {cardDivs}
        <AddCardForm {...this.props} createCard={this.props.createCard} addCreatedDiv={this.addCreateDiv} />
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
