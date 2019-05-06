import React from "react";

export default class Header extends React.Component {
  // render
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <div className="container">
              <a className="navbar-brand" href="#">LoopLAB</a>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/login">Login</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}
