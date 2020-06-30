import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuOption from '../MenuOption';

export class SetCards extends Component {

  state = {
    cardSet: {},
  }


  componentDidMount = () => {
    this.setState({ cardSet: this.props.setDict[this.props.match.params.id] })
  }


  render() {
    return (
      <Fragment>
        <Link to={`/sets/${this.props.match.params.id}`}>
          <h1 style={{ textAlign: 'center', marginTop: '30px' }}>{this.state.cardSet.title}</h1>
        </Link>
        <div className="set-cards" style={cardCollectionStyle}>
          {(this.state.cardSet.cards) &&
            (this.state.cardSet.cards).slice(0).reverse().map(card => {
              return <MenuOption option={card.question} key={card._id} />
            })
          }
        </div>
      </Fragment>
    )
  }
}

const cardCollectionStyle = {
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',

}

export default SetCards
