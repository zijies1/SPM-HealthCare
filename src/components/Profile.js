import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import PorfileForm from "./ProfileForm";
import Appointments from "./Appointments";
import {onChangeProfileView} from "../actions";

const itemClassName = "list-group-item list-group-item-action ";

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.toProfile = () => ev => {
      ev.preventDefault();
      this.props.onChangeProfileView("profile");
    }
    this.toAppointments = () => ev =>{
      ev.preventDefault();
      this.props.onChangeProfileView("appointments");
    }
  }

  renderInfo(){
    const pro = "profile";
    if(this.props.profile.show === pro){
      return(<PorfileForm/>)
    }else{
      return(< Appointments appointments={this.props.appmts}/>)
    }

  }
  // render
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to='/' />
    }
    const {profile,appointments} = this.props.profile;
    const name = itemClassName + profile;
    const name2 = itemClassName + appointments;
    return (
      <div>
        <Header/>
        <Loading/>
        <hr className="mt-100"/>
        <Banner section = "Account"/>
        <div className="mb-5 fadeIn">
          <div className="container text-dark">
          	<div className="row">
          		<div className="col-md-3 ">
          		    <div className="list-group ">
                      <div className={name} onClick={this.toProfile()}>Dashboard</div>
                      <div className={name2} onClick={this.toAppointments()}>Appointments</div>
                  </div>
          		</div>
          		<div className="col-md-9">
                {this.renderInfo()}
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
  appmts:state.auth.user.appointments,
  profile:state.profile,
  loggedIn:state.auth.loggedIn
 });

 export default connect(mapStateToProps, {onChangeProfileView})(Profile);
