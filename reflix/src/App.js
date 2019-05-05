import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Landing from './components/Landing ';
import Catalog from './components/Catalog';
import Movie from './components/Movie';


class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <span className="links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
            </span>
            <span className="logo">REFLIX</span>
          </div>

          <Route path="/" exact component={Landing} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/catalog/:name" exact render={({ match }) => <Catalog match={match} />} />
        </div>
      </Router>
    )
  }
}

export default App;
