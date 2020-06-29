import React, { Component } from 'react';

export class AddCardForm extends Component {

  state = {
    question: '',
    answer: '',
    hint: '',
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit = e => {

    e.preventDefault();
    this.props.createCard(this.props.match.params.id, this.state.question, this.state.answer, this.state.hint);
    this.props.addCreatedDiv();
    this.setState({ question: '', answer: '', hint: '' });
  }


  render() {
    return (
      <form className="add-card-item" style={addCardDivStyle} onSubmit={this.onSubmit}>
        <input name="question" type="text" value={this.state.question} style={inputStyle} onChange={this.onChange} placeholder="Question..."></input>
        <input name="answer" type="text" value={this.state.answer} style={inputStyle} onChange={this.onChange} placeholder="Answer..."></input>
        <input name="hint" type="text" value={this.state.hint} style={inputStyle} onChange={this.onChange} placeholder="Hint (optional)"></input>
        <input type="submit" style={submitStyle} ></input>
      </form>
    )
  }
}

const addCardDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '2px solid black',
  borderRadius: '10px',
  width: '600px',
  margin: '30px',
}

const margins = '20px';

const inputStyle = {
  marginTop: margins,
  borderStyle: 'solid',
  borderRadius: '5px',
  height: '40px',
  width: '80%',
  padding: '25px 10px',
  fontSize: '20px',
}

const submitStyle = {
  width: '80%',
  margin: `${margins} 0`,
  border: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  background: '#B3ECFF',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
}

export default AddCardForm
