import React from "react";
import { connect } from 'react-redux';
import { onUpdateFieldAppointment, onMakeAppointment} from "../actions/index.js";
import Header from "./Header";


class AllAppointments extends React.Component {

  // render
  render() {
    const {types,doctors,times} = this.props.appmt;
    const {type,name,charge,time,message} = this.props.appmt.fileds;

    return (
      <form onSubmit={this.submitForm()}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
                <label className="control-label">Type</label>
                <select className="form-control" defaultValue={type} value={type} onChange={this.changeType} required>
                  {types.map(type =>{
                    return (<option key={type}>{type}</option>)
                  })}
                </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <label className="control-label">Doctor(s)</label>
                <select className="form-control" value={name} onChange={this.changeName} required>
                  {doctors.map(doc=>{
                    if(doc.type === this.props.appmt.fileds.type){
                      return (<option key={doc.name}>{doc.name}</option>)
                    }
                   })}
                </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <label className="control-label">Charge($AU/hour)</label>
                <span className="input-group-text" id="inputGroup-sizing-default">{charge}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <label className="control-label" htmlFor="time">Preferred Time</label>
                <select className="form-control" value={time} onChange={this.changeTime} required>
                  {times.map(t=>{
                    return (<option key={t}>{t}</option>)
                   })}
                </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label >Message</label>
              <textarea className="form-control" value={message} onChange={this.changeMsg} rows="3"></textarea>
            </div>
          </div>
          <div className="col-md-12">
              <div className="form-group">
                  <button id="singlebutton" name="singlebutton" className="btn btn-primary">Make An Appointment</button>
              </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  appmt:state.appointment
 });


export default connect(mapStateToProps,{onUpdateFieldAppointment,onMakeAppointment})(AppointmentForm);
