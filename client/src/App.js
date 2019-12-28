import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EveryItem from './components/EveryItem.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={EveryItem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
