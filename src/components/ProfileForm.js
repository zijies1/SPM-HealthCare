import React from "react";
import { connect } from 'react-redux';
import { onUpdateField,onUpdateProfile,onUpdatePassword,logout } from "../actions/index.js";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";

class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.changeName = ev => this.props.onUpdateField(ev.target.value,"name");
    this.changeHomeAddress = ev => this.props.onUpdateField(ev.target.value,"homeAddress");
    this.changePhoneNumber = ev => this.props.onUpdateField(ev.target.value,"phoneNumber");
    this.changeEmail = ev => this.props.onUpdateField(ev.target.value,"email");
    this.changePassword = ev => this.props.onUpdateField(ev.target.value,"password");
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onUpdateProfile(this.props.user);
    };
    this.submitForm2 = () => ev => {
      ev.preventDefault();
      this.props.onUpdatePassword(this.props.user.password);
      this.props.logout();
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
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.submitForm()}>
              <div className="form-group row">
                <label htmlFor="lastname" className="col-4 col-form-label" required="required">Name*</label>
                <div className="col-8">
                  <input id="name" name="name" value={this.props.user.name} onChange={this.changeName} className="form-control here" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-4 col-form-label">Email*</label>
                <div className="col-8">
                  <input id="email" name="email" value={this.props.user.email} onChange={this.changeEmail} className="form-control here" required="required" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="address" className="col-4 col-form-label" required="required">Address*</label>
                <div className="col-8">
                  <input id="address" name="address" value={this.props.user.homeAddress} onChange={this.changeHomeAddress} className="form-control here" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="phoneNumber" className="col-4 col-form-label" required="required">Phone Number*</label>
                <div className="col-8">
                  <input id="phoneNumber" name="phoneNumber" value={this.props.user.phoneNumber} onChange={this.changePhoneNumber} className="form-control here" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-4 col-8">
                  <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
                </div>
              </div>
          </form>
          <hr/>
          <form onSubmit={this.submitForm2()}>
            <div className="form-group row">
              <label htmlFor="newpass" className="col-4 col-form-label" required="required">New Password*</label>
              <div className="col-8">
                <input id="newpass" name="newpass" value={this.props.user.password} onChange={this.changePassword} className="form-control here" type="password"/>
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn btn-primary">Update Password</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user:state.auth.user,
  loading:state.auth.loading
});


export default connect(mapStateToProps,{onUpdateField,onUpdateProfile,onUpdatePassword,logout})(ProfileForm);
