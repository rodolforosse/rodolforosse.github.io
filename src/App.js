import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                  <Link to="/">Home</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Contact">Contact</Link>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
          </div>
            );
  }
}

export default App;
