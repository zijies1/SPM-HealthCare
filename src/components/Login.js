import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import style from "./style.css";
import logo from "../media/img/logo1.svg";
import { onSubmit,
         onChangeEmail,
         onChangePassword } from "../actions/index.js";
 import ErrorModal from "./ErrorModal";

import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

// Home page component
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onSubmit(this.props.user);
    };
    this.backHome = () =>{
      this.props.router.push("/");
    };
  }

  showLoading(){
    if(this.props.loading){
      return(
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      )
    }else{
      return(
        <input type="submit" className="fadeIn fourth" value="Log In"/>
      )
    }
  }
  // render
  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/' />
    }

    return (
      <div className="wrapper fadeInDown" id="login">
        <div id="formContent">

          <div className="fadeIn first mb-2 mt-1" id="login-logo">
            <img src={logo} id="icon" alt="User Icon" onClick={this.backHome}/>
          </div>

          <form onSubmit={this.submitForm()}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
              onChange={this.changeEmail}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={this.changePassword}
            />
            {this.showLoading()}
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
        <ErrorModal/>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn:state.auth.loggedIn,
  user:state.auth.user,
  loading:state.auth.loading
 });


export default connect(mapStateToProps, {onSubmit,onChangeEmail,onChangePassword})(Login);
