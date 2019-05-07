import React from "react";
import { connect } from 'react-redux';
import style from "./style.css";
import logo from "../../../public/media/logo.svg";
import { onSubmit,
         onChangeEmail,
         onChangePassword } from "../../actions/index.js";
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../../constants/actionTypes';

// Home page component
class Login extends React.Component {

  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onSubmit(this.props.router);
    };
  }

  // render
  render() {

    return (
      <div className="wrapper fadeInDown">
      <div id="formContent">

        <div className="fadeIn first">
          <img src={logo} id="icon" alt="User Icon" />
        </div>

        <form onSubmit={this.submitForm()}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            value={this.props.email} onChange={this.changeEmail}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            value={this.props.password} onChange={this.changePassword}
          />
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>

      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({ auth:state.auth.user });


export default connect(mapStateToProps, {onSubmit,onChangeEmail,onChangePassword})(Login);
