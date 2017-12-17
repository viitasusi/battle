import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popular from './Popular';
import Home from './Home';
import Nav from './Nav';
import Battle from './Battle'
import Results from './Results'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route path='/popular' component={Popular} />
          <Route render={function () {
            return <p>404 Not found</p>
          }} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
