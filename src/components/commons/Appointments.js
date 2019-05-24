import React from "react";
import {connect} from "react-redux";
import {onCancelAppoitment,sgMail} from "../../actions/index.js";


class Appointments extends React.Component {


  constructor(props){
    super(props);
    this.renderButton = () => {
      if(this.props.role){
        return(<div></div>);
      }else{
        return(<button href="#" className="btn btn-primary">Cancel</button>)
      }
    }
    this.handleSumbit = () => ev => {
      ev.preventDefault();
      const appmt = this.props.appmts[ev.target.id];
      this.props.onCancelAppoitment(
        ev.target.id,
        this.props.appmts[ev.target.id],
        this.props.appmts
      );
      this.props.sgMail({fields:appmt},appmt.professionalEmail,"Appointment Cancellation");
    }
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  renderAppmt(){
    var cards = [];
    for (var key in this.props.appmts){
      const appmt = this.props.appmts[key];
      if(!this.isEmpty(appmt)){
        cards.push(
          <form className="fadeIn" onSubmit={this.handleSumbit()} key={key} id={key}>
          <div className="card bg-white mb-3">
           <div className="card-header">
             Appointment
           </div>
           <div className="card-body">
             <div className="form-group row">
              <label className="col-sm-4 col-form-label"><strong>Doctor:</strong></label>
              <div className="col-sm-8">
                <input type="text" readOnly className="form-control-plaintext" value={appmt.name}/>
              </div>
            </div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>Type:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={appmt.type}/>
             </div>
           </div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>Charge($(AUS) per hour):</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={appmt.charge}/>
             </div>
            </div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>Time:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={appmt.time}/>
             </div>
            </div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>User Email:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={appmt.userEmail}/>
             </div>
            </div>
            <hr/>
            {this.renderButton()}
           </div>
         </div>
         </form>
       );
      }
    }
    console.log(cards.length);
    if(cards.length === 0){
      return (
        <div className="p-3 display-4 text-muted fadeIn">
          No Appointments yet
        </div>
      )
     }else{
       return cards;
     }
  }
  // render
  render() {
    console.log(this.props.appmts);
    return (
      <div>
        {this.renderAppmt()}
      </div>
    );
  }
}

export default connect(null,{onCancelAppoitment,sgMail})(Appointments);
