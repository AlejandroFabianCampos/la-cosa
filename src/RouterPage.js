import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Faq from './components/Faq.js';




class RouterPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path="/" component={HeaderComponent} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/faq/" component={Faq} />
          </Switch>
        </div>  
      </BrowserRouter>
    );
  }
}

export default RouterPage;
