/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">

          <header className="row justify-content-center">
            <div className="row text-light align-self-start">
              <div className="col-12 text-center">
                <h1>Mutant Hub</h1>
              </div>
            </div>
          </header>

          <div className="row justify-content-center">

            <div className="navigation-bar">
                <ul>

                  <li className="nav-item active shadow-1">
                    <Link to='/' className="nav-link bg-warning btn" data-toggle="tooltip" data-placement="left" title="Graphics">
                      <i className="material-icons">data_usage</i>
                    </Link>
                  </li>
                  <li className="nav-item active shadow-1">
                    <Link to='/search' className="nav-link bg-warning btn" data-toggle="tooltip" data-placement="left" title="Graphics">
                      <i className="material-icons">search</i>
                    </Link>
                  </li>

                </ul>
            </div>

            <div className="col-12 col-sm-10  bg-light main-card shadow-1">
              <Routes />
            </div>
          </div>

      </div>
    );
  }
}

export default App;
