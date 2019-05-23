import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Banner from "./commons/Banner";
import Header from "./commons/Header";
import PorfileForm from "./forms/ProfileForm";
import Appointments from "./commons/Appointments";
import {onChangeProfileView} from "../actions";

const itemClassName = "list-group-item list-group-item-action ";

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.toProfile = () => ev => {
      ev.preventDefault();
      this.props.onChangeProfileView("Profile");
    }
    this.toAppointments = () => ev =>{
      ev.preventDefault();
      this.props.onChangeProfileView("Appointments");
    }
  }

  renderInfo(){
    const pro = "Profile";
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
    const name = itemClassName + this.props.profile.Profile;
    const name2 = itemClassName + this.props.profile.Appointments;
    return (
      <div>
        <Header history={this.props.history}/>
        <hr className="mt-100"/>
        <Banner section = {this.props.profile.show}/>
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
