import React from "react";
import { connect } from 'react-redux';
import Banner from "./Banner";
class Profile extends React.Component {
  // render
  render() {
    return (
      <div>
        <Banner/>
        <div className="mb-5">
          <div className="container text-dark">
          	<div className="row">
          		<div className="col-md-3 ">
          		     <div className="list-group ">
                        <a href="#" className="list-group-item list-group-item-action active">Dashboard</a>
                        <a href="#" className="list-group-item list-group-item-action">Appointments</a>
                        <a href="#" className="list-group-item list-group-item-action">Used</a>
                      </div>
          		</div>
          		<div className="col-md-9">
          		    <div className="card">
          		        <div className="card-body">
          		            <div className="row">
          		                <div className="col-md-12">
          		                    <h4>Your Profile</h4>
          		                    <hr/>
          		                </div>
          		            </div>
          		            <div className="row">
          		                <div className="col-md-12">
          		                    <form>
                                        <div className="form-group row">
                                          <label for="name" className="col-4 col-form-label" required="required">First Name*</label>
                                          <div className="col-8">
                                            <input id="name" name="name" placeholder="First Name" className="form-control here" type="text"/>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label for="lastname" className="col-4 col-form-label" required="required">Last Name*</label>
                                          <div className="col-8">
                                            <input id="lastname" name="lastname" placeholder="Last Name" className="form-control here" type="text"/>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label for="email" className="col-4 col-form-label">Email*</label>
                                          <div className="col-8">
                                            <input id="email" name="email" placeholder="Email" className="form-control here" required="required" type="text"/>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label for="address" className="col-4 col-form-label" required="required">Address*</label>
                                          <div className="col-8">
                                            <input id="address" name="address" placeholder="Address" className="form-control here" type="text"/>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label for="phoneNumber" className="col-4 col-form-label" required="required">Phone Number*</label>
                                          <div className="col-8">
                                            <input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="form-control here" type="text"/>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <label for="newpass" className="col-4 col-form-label" required="required">New Password*</label>
                                          <div className="col-8">
                                            <input id="newpass" name="newpass" placeholder="New Password" className="form-control here" type="text"/>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="offset-4 col-8">
                                            <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
                                          </div>
                                        </div>
                                      </form>
          		                </div>
          		            </div>
          		        </div>
          		    </div>
          		</div>
          	</div>
          </div>
        </div>
      </div>

    );
  }
}



export default Profile;
