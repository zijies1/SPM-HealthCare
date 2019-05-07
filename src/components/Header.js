import React from "react";
import { connect } from 'react-redux';
import { logout } from "../actions/index.js";
class Header extends React.Component {
  // render

  renderLogin(){
    if(this.props.auth.loggedIn){
      return(
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={this.props.logout}>Logout</a>
        </li>
      )
    }
    return(
      <li className="nav-item">
        <a href="/login" className="nav-link">Login</a>
      </li>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light" id="main-nav">
        <div className="container">
          <a href="index.html" className="navbar-brand">Health Care</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              {this.renderLogin()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ auth:state.auth });


export default connect(mapStateToProps, {logout})(Header);
