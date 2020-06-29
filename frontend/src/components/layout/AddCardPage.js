import React, { Component } from 'react';
import AddCardItem from './AddCardItem';

export class AddCardPage extends Component {
  render() {
    return (
      <div className="add-card-page">
        <h1>Add cards to me</h1>
        <AddCardItem />
      </div>
    )
  }
}

export default AddCardPage
