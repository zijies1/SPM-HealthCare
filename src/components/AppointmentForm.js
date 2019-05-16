import React from "react";
import { connect } from 'react-redux';
import { onUpdateFieldAppointment} from "../actions/index.js";
import About from "./About";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";


class AppointmentForm extends React.Component {
  constructor(props){
    super(props);
    this.changeType = ev =>{
      this.props.onUpdateFieldAppointment(ev.target.value,"type");
      if(this.maybeChangeName(ev.target.value)){
        this.props.onUpdateFieldAppointment(this.maybeChangeName(ev.target.value),"name");
      }
    }
    this.changeName = ev => {
      console.log("this.changeName",ev.target.value);
      this.props.onUpdateFieldAppointment(ev.target.value,"name");
    }
    this.changeCharge = ev => this.props.onUpdateFieldAppointment(ev.target.value,"charge");
    this.changeTime = ev => this.props.onUpdateFieldAppointment(ev.target.value,"time");
    this.changeMsg = ev => this.props.onUpdateFieldAppointment(ev.target.value,"message");
  }

  maybeChangeName(type){
    const {doctors} = this.props.appmt;
    var count = 0;
    var doct = 0;
    doctors.map(doc=>{
      if(doc.type === type){
        count +=1;
        doct = doc;
      }
    });
    if(count == 1){
      return doct.name;
    }
  }

  // render
  render() {
    const {types,doctors,times} = this.props.appmt;
    const {type,name,charge,time,message} = this.props.appmt.fileds;

    return (
      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
                <label className="control-label">Type</label>
                <select id="type" name="type" className="form-control" value={type} onChange={this.changeType}>
                  {types.map(type =>{
                    return (<option key={type}>{type}</option>)
                  })}
                </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <label className="control-label">Doctors</label>
                <select className="form-control" value={name} onChange={this.changeName}>
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
                <select className="form-control" value={charge} onChange={this.changeCharge}>
                  {doctors.map(doc=>{
                    if(doc.name === this.props.appmt.fileds.name){
                      return (<option key={doc.name}>{doc.charge}</option>)
                    }
                   })}
                </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <label className="control-label" htmlFor="time">Preferred Time</label>
                <select className="form-control" value={time} onChange={this.changeTime}>
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


export default connect(mapStateToProps,{onUpdateFieldAppointment})(AppointmentForm);
