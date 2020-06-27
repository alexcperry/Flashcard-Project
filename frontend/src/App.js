import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import MainMenu from './components/layout/MainMenu';
import NewSetForm from './components/layout/NewSetForm';
import CardSetMenu from './components/layout/CardSetMenu';
import Set from './components/layout/Set';
import SetCollection from './components/layout/SetCollection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/new-set" component={NewSetForm} />
          <Route path="/set-menu" component={CardSetMenu} />
          <Route path="/set" component={Set} />
          <Route path="/set-collection" component={SetCollection} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
