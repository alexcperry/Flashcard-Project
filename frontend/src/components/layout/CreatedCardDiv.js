import React, { Component } from 'react'

export class CreatedCardDiv extends Component {
  render() {
    return (
      <div className="created-card-div" style={createdDivStyle}>
        <h1>Flashcard Added</h1>
        <h3 style={{ fontWeight: 'lighter' }}>Add more cards below or start studying!</h3>
      </div>
    )
  }
}

const createdDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid black',
  borderRadius: '10px',
  height: '309px',
  width: '600px',
  marginTop: '30px',
  background: '#ffeeb9',
}


export default CreatedCardDiv
