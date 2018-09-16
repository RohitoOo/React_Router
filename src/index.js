import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post'

import {BrowserRouter, Route ,Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:post_id" component={Post}/>
        </Switch>
      
      </div>
       </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
