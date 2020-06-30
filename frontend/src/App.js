import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import MainMenu from './components/layout/MainMenu';
import NewSetForm from './components/layout/NewSetForm';
import CardSetMenu from './components/layout/CardSetMenu';
import Set from './components/layout/Set';
import SetCards from './components/layout/SetCards';
import AddCardPage from './components/layout/AddCardPage';
import Quiz from './components/layout/Quiz';
import ErrorPage from './components/layout/ErrorPage';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      setDict: {},
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/all-sets')
      .then(cardSets => {

        let setDict = {}
        cardSets.data.map(set => {
          setDict[set._id] = set;
        });

        this.setState({ setDict });

      })
      .catch(err => console.log(`Error ${err}`));
  }

  createSet = setTitle => {
    axios.post('http://localhost:3000/create-set', { title: setTitle })
      .then(res => {
        this.state.setDict[res.data._id] = res.data;
      })
      .catch(err => console.log(`Error ${err}`));
  }

  deleteSet = setId => {
    axios.get(`http://localhost:3000/sets/${setId}/delete-set`)
      .then(res => {
        let newSetDict = this.state.setDict;
        delete newSetDict[setId];
        this.setState({ setDict: newSetDict });
      })
      .catch(err => console.log(`Error ${err}`));
  }

  createCard = (setId, question, answer, hint) => {
    const newCard = { question, answer, hint }

    axios.post(`http://localhost:3000/sets/${setId}/add-flashcard`, newCard)
      .then(res => {
        console.log('help');
        console.log('the current cardset', res);
      })
      .catch(err => console.log(`Error ${err}`));
  }

  deleteCard = (setId, questionIndex) => {
    // axios.get(`http://localhost:3000/sets/${setId}/delete-flashcard/${}`)
    console.log('set', setId, 'questionIndex', questionIndex);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={MainMenu} />
            <Route path="/new-set" exact component={() => <NewSetForm createSet={this.createSet} />} />
            {/* This is not the best way to render a component: https://ui.dev/react-router-v4-pass-props-to-components/ */}
            <Route path="/set-menu" exact component={() => <CardSetMenu setDict={this.state.setDict} />} />
            <Route path="/sets/:id" exact component={props => <Set {...props} setDict={this.state.setDict} parentDeleteSet={this.deleteSet} />} />
            <Route path="/sets/:id/add-cards" component={props => <AddCardPage {...props} createCard={this.createCard} setDict={this.state.setDict} />} />
            <Route path="/sets/:id/all-cards" component={props => <SetCards {...props} parentDeleteCard={this.deleteCard} setDict={this.state.setDict} />} />
            <Route path="/sets/:id/quiz" component={props => <Quiz {...props} setDict={this.state.setDict} />} />
            <Route path="/404" component={ErrorPage} />
            <Redirect from="/" to="/404" />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;

/* TODOS:
1. Mysterious bug loading sets? See if you can recreate it
2. Add card functionality
3. 404 page
*/

// It is currently deleting sets, but an error occurs when you do it