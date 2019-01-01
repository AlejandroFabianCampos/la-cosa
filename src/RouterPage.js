import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Participate from './components/Participate.js';




class RouterPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" render={Home} />
            <Route path="/about/" Component={About} />
            <Route path="/participate/" Component={Participate} />
          </Switch>
        </div>  
      </BrowserRouter>
    );
  }
}

export default RouterPage;
