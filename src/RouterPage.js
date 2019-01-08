import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Faq from './components/Faq.js';




class RouterPage extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Route path="/" component={HeaderComponent} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/la-cosa/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/faq/" component={Faq} />
          </Switch>
        </div>  
      </HashRouter>
    );
  }
}

export default RouterPage;
