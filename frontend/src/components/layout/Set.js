import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class Set extends Component {


  state = {
    set: {}
  }

  componentDidMount = () => {
    this.setState({ set: this.props.setDict[this.props.match.params.id] });
  }

  render() {
    return (
      <div className="set-page">
        <h1 style={{ textAlign: 'center', marginTop: '30px' }}>{this.state.set.title}</h1>
        <div className="set-page-options-div" style={setStyle}>
          <MenuOption option="Study" dest="/" />
          <MenuOption option="Add Cards" dest="/" />
        </div>
      </div>
    )
  }
}


const setStyle = {
  width: '75%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-evenly'
}

export default Set
