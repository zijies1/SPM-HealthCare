import React from "react";
import {connect} from "react-redux";
import {onCancelAppoitment} from "../actions/index.js";


class Appointments extends React.Component {

  constructor(props){
    super(props);
    this.handleSumbit = () => ev =>{
      ev.preventDefault();
      this.props.onCancelAppoitment(ev.target.id,this.props.appointments);
      window.location.reload();
    }
  }

  renderAppmt(){
    var cards = [];
    for (var key in this.props.appointments){
      const appmt = this.props.appointments[key];
      cards.push(
        <form onSubmit={this.handleSumbit()} key={key} id={key}>
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
         <hr/>
         <button href="#" className="btn btn-primary">Cancel</button>
         </div>
       </div>
       </form>
     );
    }
    return cards;
  }
  // render
  render() {
    return (
      <div>
        {this.renderAppmt()}
      </div>
    );
  }
}

export default connect(null,{onCancelAppoitment})(Appointments);
