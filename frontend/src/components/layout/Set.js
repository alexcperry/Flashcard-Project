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


    console.log('my set', this.state.set.title);

    return (
      <div className="set-page">
        <h1 style={{ textAlign: 'center', marginTop: '30px' }}>{this.state.set.title}</h1>
        <div className="set-page-options-div" style={setStyle}>
          <MenuOption option="Quiz Yourself" dest={`/sets/${this.state.set._id}/quiz`} />
          <MenuOption option="See All Cards" dest={`/sets/${this.state.set._id}/all-cards`} />
          <MenuOption option="Add Cards" dest={`/sets/${this.state.set._id}/add-cards`} />
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
