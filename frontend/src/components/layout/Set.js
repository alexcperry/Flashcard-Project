import React, { Component } from 'react';
import MenuOption from '../MenuOption';

export class Set extends Component {

  state = {
    set: {}
  }


  componentDidMount = () => {
    this.setState({ set: this.props.setDict[this.props.match.params.id] });
  }

  //Change this so you have to confirm before deleting
  deleteSet = e => {
    this.props.parentDeleteSet(this.state.set._id);
  }


  render() {
    if (this.state.set) {
      return (
        <div className="set-page"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <h1 style={{ textAlign: 'center', marginTop: '30px' }}>{this.state.set.title}</h1>
          <div className="set-page-options-div" style={setStyle}>
            <MenuOption option="Quiz Yourself" dest={`/sets/${this.state.set._id}/quiz`} />
            <MenuOption option="See All Cards" dest={`/sets/${this.state.set._id}/all-cards`} />
            <MenuOption option="Add Cards" dest={`/sets/${this.state.set._id}/add-cards`} />
          </div>
          <form action="/set-menu" onSubmit={this.deleteSet} style={{ width: '30%' }}>
            <button style={deleteSetBtnStyle}>Delete Set</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="set-page">

        </div>
      )
    }
  }
}


const setStyle = {
  width: '75%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-evenly'
}

const deleteSetBtnStyle = {
  width: '100%',
  marginTop: '30px',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  background: '#E34646',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
}

export default Set
