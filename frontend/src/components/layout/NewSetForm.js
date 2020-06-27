import React, { Component } from 'react'

export class NewSetForm extends Component {
  render() {
    return (
      <form className="new-set-form" style={newFormStyle}>
        <h1 style={{ textAlign: 'center', margin: '2px 0 0' }}>New Flashcard Set</h1>
        <input type="text" placeholder="Set Title..." style={inputStyle}></input>
        <input type="submit" style={submitStyle}></input>
      </form>
    )
  }
}

const newFormStyle = {
  margin: '50px auto',
  height: '200px',
  width: '60%',
  border: '2px solid black',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}

const inputStyle = {
  height: '40px',
  width: '80%',
  padding: '25px 10px',
  fontSize: '20px',
}

const submitStyle = {
  width: '80%',
  margin: '10px 0',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  background: '#B3ECFF',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
}

export default NewSetForm
