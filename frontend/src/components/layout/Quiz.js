import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Quiz extends Component {

  state = {
    numCards: 0,
    currIndex: null,
    cardSet: {},
    qaPairs: [],
    qside: true,
  }


  componentDidMount = () => {

    const set = this.props.setDict[this.props.match.params.id];
    const numCards = set.cards.length;
    const indices = indexOrder(numCards);
    let qas = [];
    for (let i = 0; i < numCards; i++) {
      const question = set.cards[indices[i]].question;
      const answer = set.cards[indices[i]].answer;
      qas.push({ question, answer });
    }

    this.setState({ numCards, cardSet: set, qaPairs: qas, currIndex: 0, qside: true });
  }

  changeCardLeft = () => {
    const num = this.state.numCards;
    this.setState({
      currIndex: (this.state.currIndex + num + 1) % num,
      qside: true,
    })
  }

  changeCardRight = () => {
    const num = this.state.numCards;
    this.setState({
      currIndex: (this.state.currIndex + 1) % num,
      qside: true,
    });
  }

  flipCard = () => {
    this.setState({ qside: !this.state.qside });
  }


  render() {

    const qaPair = this.state.qaPairs[this.state.currIndex];
    let question = "whoops";
    let answer = "sie daisy";
    if (qaPair) {
      question = qaPair.question;
      answer = qaPair.answer;
    }

    return (
      < div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link to={`/sets/${this.props.match.params.id}`}>
          <h1 style={{ marginTop: '30px' }}>{this.state.cardSet.title}</h1>
        </Link>
        <div className="quiz-div" style={quizStyle}>
          <button className="reverse-btn" onClick={this.flipCard} style={{ right: '10px' }}>X</button>
          <button style={scrollBtnLeftStyle} onClick={this.changeCardLeft}>{"<"}</button>
          <h1 style={this.state.qside ? { textAlign: 'center' } :
            { display: 'none', textAlign: 'center' }}>{question}</h1>
          <h1 style={!this.state.qside ? { textAlign: 'center' } :
            { display: 'none', textAlign: 'center' }}>{answer}</h1>
          <button style={scrollBtnRightStyle} onClick={this.changeCardRight}>{">"}</button>
        </div>
      </div >
    )
  }
}

const quizStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  height: '400px',
  marginTop: '30px',
  border: '2px solid black',
  borderRadius: '8px',
  padding: '10px 20px',
  position: 'relative',
}

const scrollBtnLeftStyle = {
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: '2px solid black',
  alignSelf: 'flex-end',
  position: 'absolute',
  bottom: '25px',
  left: '25px',
}

const scrollBtnRightStyle = {
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: '2px solid black',
  alignSelf: 'flex-end',
  position: 'absolute',
  bottom: '25px',
  right: '25px',
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const indexOrder = numCards => {
  let array = []
  for (let i = 0; i < numCards; i++) {
    array.push(i);
  }

  return shuffle(array)
}

export default Quiz
