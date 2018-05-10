import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from 'components/home';
import About from 'components/about';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
