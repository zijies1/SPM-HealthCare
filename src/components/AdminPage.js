import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from "./commons/Header";
import Loading from "./commons/Loading";
import Professionals from "./commons/Professionals";
import Appointments from "./commons/Appointments";
import {onChangeProfileView} from "../actions";

const itemClassName = "list-group-item list-group-item-action ";

class AdminPage extends React.Component {

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
    console.log(this.props.appmts);
    console.log(this.props.professionals);
    if(this.props.profile.show === pro){
      return(< Professionals professionals={this.props.professionals}/>)
    }else{
      return(< Appointments appointments={this.props.appmts}/>)
    }

  }
  // render
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to='/' />
    }else if (!this.props.auth.user.role){
      return (<span className="text-dark display-4 text-center p-4">not found</span>);
    }
    const name = itemClassName + this.props.profile.Profile;
    const name2 = itemClassName + this.props.profile.Appointments;
    return (
      <div>
        <Header history={this.props.history}/>
        <hr className="mt-5"/>
        <div className="mt-5 fadeIn">
          <div className="mt-5 container text-dark">
          	<div className="row">
          		<div className="col-md-3 ">
          		    <div className="list-group ">
                      <div className={name} onClick={this.toProfile()}>Professionals</div>
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
  auth:state.auth,
  appmts:state.appointment.appointments,
  professionals:state.professional.professionals,
  profile:state.profile,
  loggedIn:state.auth.loggedIn
 });

 export default connect(mapStateToProps, {onChangeProfileView})(AdminPage);
