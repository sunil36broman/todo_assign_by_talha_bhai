import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Navigation from './navigation/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Navigation />
        <div className="container">
        <Switch>
            <Route path='/' exact component={Dashboard} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
