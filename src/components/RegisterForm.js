import React from "react";
import { connect } from 'react-redux';
import { onUpdateFieldResgiter, onRegister } from "../actions/index.js";
import ErrorModal from "./ErrorModal";

class RegisterForm extends React.Component {

  constructor() {
    super();
    this.changeName = ev => this.props.onUpdateFieldResgiter(ev.target.value,"name");
    this.changeHomeAddress = ev => this.props.onUpdateFieldResgiter(ev.target.value,"homeAddress");
    this.changePhoneNumber = ev => this.props.onUpdateFieldResgiter(ev.target.value,"phoneNumber");
    this.changeEmail = ev => this.props.onUpdateFieldResgiter(ev.target.value,"email");
    this.changePassword = ev => this.props.onUpdateFieldResgiter(ev.target.value,"password");
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onRegister(this.props.user);
    };
  }

  showLoading(){
    if(this.props.loading){
      return(
        <input type="submit" value="Submit" className="btn btn-outline-light disabled"/>
      )
    }else{
      return(
        <input type="submit" value="Submit" className="btn btn-outline-light"/>
      )
    }
  }

  // render
  render() {
    return (
      <form onSubmit={this.submitForm()}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="email" className="form-control form-control-lg"
              placeholder="Email"
              value={this.props.user.email} onChange={this.changeEmail}
              required
            />
          </div>
         <div className="form-group col-md-6">
           <input
             type="password" className="form-control form-control-lg"
             placeholder="Password"
             value={this.props.user.password} onChange={this.changePassword}
             required
           />
         </div>
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            placeholder="Name"
            value={this.props.user.name} onChange={this.changeName}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            placeholder="Phone Number"
            value={this.props.user.phoneNumber} onChange={this.changePhoneNumber}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            placeholder="Home Address"
            value={this.props.user.homeAddress} onChange={this.changeHomeAddress}
            required
          />
        </div>
        <ErrorModal/>
        {this.showLoading()}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user:state.auth.registerUser,
  loading:state.auth.loading
});


export default connect(mapStateToProps,{onUpdateFieldResgiter,onRegister})(RegisterForm);
