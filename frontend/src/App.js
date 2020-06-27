import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import MainMenu from './components/layout/MainMenu';
import NewSetForm from './components/layout/NewSetForm';
import CardSetMenu from './components/layout/CardSetMenu';
import Set from './components/layout/Set';
import SetCollection from './components/layout/SetCollection';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cardSets: [],
      flashcards: [],
    }
  }

  componentDidMount() {

    axios.get('http://localhost:3000/all-sets')
      .then(cardSets => {
        this.setState({ cardSets: cardSets.data });
        console.log('my sets', this.state.cardSets);
      })
      .catch(err => console.log(`Error ${err}`));

    axios.get('http://localhost:3000/all-cards')
      .then(flashcards => {
        this.setState({ flashcards: flashcards.data });
      })
      .catch(err => console.log(`Error ${err}`));

  }

  render() {
    console.log('sets in app: ', this.state.cardSets);
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={MainMenu} />
            <Route path="/new-set" component={NewSetForm} />
            {/* This is not the best way to render a component: https://ui.dev/react-router-v4-pass-props-to-components/ */}
            <Route path="/set-menu" component={() => <CardSetMenu sets={this.state.cardSets} />} />
            <Route path="/set" component={Set} />
            <Route path="/set-collection" component={SetCollection} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
