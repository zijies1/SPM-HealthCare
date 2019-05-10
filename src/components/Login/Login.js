import React from "react";
import { connect } from 'react-redux';
import style from "./style.css";
import logo from "../../../public/media/img/logo1.svg";
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

  constructor(props) {
    super(props);
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onSubmit(this.props.router);
    };
    this.backHome = () =>{
      this.props.router.push("/");
    };
  }

  // render
  render() {

    return (
      <div className="wrapper fadeInDown">
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
