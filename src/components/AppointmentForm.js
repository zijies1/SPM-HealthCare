import React from "react";
import { connect } from 'react-redux';
import { onUpdateFieldAppointment, onMakeAppointment} from "../actions/index.js";
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
      const docts = this.maybeChangeName(ev.target.value);
      this.props.onUpdateFieldAppointment(docts[0].name,"name");
      this.props.onUpdateFieldAppointment(docts[0].charge,"charge");
    };
    this.changeName = ev => {
      this.props.onUpdateFieldAppointment(ev.target.value,"name");
    }
    this.changeTime = ev => this.props.onUpdateFieldAppointment(ev.target.value,"time");
    this.changeMsg = ev => this.props.onUpdateFieldAppointment(ev.target.value,"message");
    this.submitForm = () => ev =>{
      ev.preventDefault();
      this.props.onMakeAppointment(this.props.appmt.fileds);
      window.location.reload();
    };
  }

  maybeChangeName(type){
    const {doctors} = this.props.appmt;
    var docts = [];
    doctors.map(doc=>{
      if(doc.type === type){
        docts.push(doc);
      }
    });
    return docts;
  }

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
                <select id="type" name="type" className="form-control" value={type} onChange={this.changeType} required>
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
