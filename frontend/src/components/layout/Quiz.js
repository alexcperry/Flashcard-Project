import React, { Component } from 'react'

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

  changeCardRight = () => {




    this.setState({ currIndex: (this.state.currIndex + 1) % this.state.numCards });
  }


  render() {

    const qaPair = this.state.qaPairs[this.state.currIndex];
    let question = "whoops";
    let answer = "sie daisy";
    if (qaPair) {
      question = qaPair.question;
      answer = qaPair.answer;
    }
    console.log(question, answer);

    return (
      < div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginTop: '30px' }}>{this.state.cardSet.title}</h1>
        <div className="quiz-div" style={quizStyle}>
          <button style={scrollBtnStyle} >{"<"}</button>
          <h1 style={this.state.qside ? { textAlign: 'center' } :
            { display: 'none', textAlign: 'center' }}>{question}</h1>
          <h1 style={!this.state.qside ? { textAlign: 'center' } :
            { display: 'none', textAlign: 'center' }}>{answer}</h1>
          <button style={scrollBtnStyle} onClick={this.changeCardRight}>{">"}</button>
        </div>
      </div >
    )
  }
}

const quizStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '600px',
  height: '400px',
  marginTop: '30px',
  border: '2px solid black',
  borderRadius: '8px',
  padding: '10px 20px',
}

const scrollBtnStyle = {
  height: '30px',

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
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
