import React, { Component } from 'react';

export class CollectionCard extends Component {

  state = {
    qside: true
  }

  deleteCard = () => {
    this.props.parentDeleteCard(this.props.card._id);
  }

  flipCard = () => {
    this.setState({ qside: !this.state.qside });
  }

  render() {
    return (
      <div className="menu-option" style={CollectionCardStyle}>
        <button className="reverse-btn" onClick={this.flipCard}>
          {/* <img src={refreshImg} alt="refresh button"
            style={{ height: '20px', width: '20px' }} /> */}
            X
        </button>
        <button className="delete-btn" onClick={this.deleteCard}>X</button>
        <h1 style={{ textAlign: 'center' }} onClick={this.flipCard}>
          {this.state.qside ? this.props.card.question : this.props.card.answer}
        </h1>
      </div >
    )
  }
}

const CollectionCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid black',
  borderRadius: '10px',
  width: '400px',
  height: '250px',
  marginTop: '30px',
  position: 'relative',
}

//Button styles in App.js

export default CollectionCard
