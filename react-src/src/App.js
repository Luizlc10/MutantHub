/*jshint esversion: 6 */
import React, { Component } from 'react';
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
                    <a className="nav-link bg-warning btn" data-toggle="tooltip" data-placement="left" title="Search" href="">
                      <i className="material-icons">search</i>
                    </a>
                  </li>
                  <li className="nav-item active shadow-1">
                    <a className="nav-link bg-warning btn" data-toggle="tooltip" data-placement="left" title="Graphics" href="">
                      <i className="material-icons">data_usage</i>
                    </a>
                  </li>

                </ul>
            </div>

            <div className="col-12 col-sm-10  bg-light main-card shadow-1">
              <h1>Router</h1>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
