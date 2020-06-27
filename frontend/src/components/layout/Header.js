import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>Alex's Flashcard Collection</h1>
        </Link>
      </header>
    )
  }
}

export default Header
