import React from "react";

export default class Appointments extends React.Component {

  renderAppmt(){
    var cards = [];
    for (var key in this.props.appointments){
      const appmt = this.props.appointments[key];
      cards.push(
        <div className="card bg-white mb-3" key={key}>
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
          <a href="#" className="btn btn-primary">Cancel</a>
         </div>
       </div>);
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
