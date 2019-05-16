import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import PorfileForm from "./ProfileForm";

class Profile extends React.Component {
  // render
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <Header/>
        <Loading/>
        <hr className="mt-100"/>
        <Banner section = "Account"/>
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
                      <PorfileForm/>
        		        </div>
          		    </div>
          		</div>
          	</div>
          </div>
        </div>
        <Footer/>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  loggedIn:state.auth.loggedIn
 });

 export default connect(mapStateToProps, null)(Profile);
