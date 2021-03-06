import React from "react";
import { connect } from 'react-redux';
import {
  onUpdateFieldAppointment,
  onMakeAppointment,
  sgMail,
  onChangeProfileView
} from "../../actions/index.js";


class AppointmentForm extends React.Component {
  constructor(props){
    super(props);
    this.changeType = ev =>{
      const docts = this.maybeChangeName(ev.target.value);
      this.props.onUpdateFieldAppointment(ev.target.value,"type");
      if(docts.length != 0){
        this.props.onUpdateFieldAppointment(docts[0].name,"name");
        this.onChangeCharge(docts[0].name);
      }
    };
    this.changeName = ev => {
      const docts = this.maybeChangeName(this.props.appmt.fields.type);
      this.props.onUpdateFieldAppointment(ev.target.value,"name");
      this.onChangeCharge(ev.target.value);
    }
    this.changeTime = ev => this.props.onUpdateFieldAppointment(ev.target.value,"time");
    this.changeMsg = ev => this.props.onUpdateFieldAppointment(ev.target.value,"message");
    this.submitForm = () => ev =>{
      ev.preventDefault();
      var professional = null;
      this.props.professional.professionals.map(doc=>{
        if(doc.name === this.props.appmt.fields.name){
          professional = doc;
        }
      });
      this.props.onMakeAppointment(this.props.appmt.fields,professional);
      this.props.sgMail(this.props.appmt,professional.email,"New Appointment");
      this.props.sgMail(this.props.appmt,this.props.email,"New Appointment");
      this.props.onChangeProfileView("Appointments");
      this.props.history.push("/profile");

    };
  }

  maybeChangeName(type){
    var docts = [];
    this.props.professional.professionals.map(doc=>{
      if(doc.type === type){
        docts.push(doc);
      }
    });
    return docts;
  }

  onChangeCharge(name){
    this.props.professional.professionals.map(doc=>{
      if(doc.name === name){
        console.log("doc.charge",doc.charge);
        this.props.onUpdateFieldAppointment(doc.charge,"charge");
      }
    });
  }

  // render
  render() {
    const {times} = this.props.appmt;
    const {type,name,time,message,charge} = this.props.appmt.fields;
    const {types,professionals} = this.props.professional;

    console.log(professionals,types);
    return (
      <form onSubmit={this.submitForm()}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
                <label className="control-label">Type</label>
                <select className="form-control" onChange={this.changeType} required>
                  <option value ={"Choose Type"}>Choose Type</option>
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
                  {professionals.map(doc=>{
                    if(doc.type === this.props.appmt.fields.type){
                      return (<option key={doc.name}>{doc.name}</option>)
                    }
                   })}
                </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <label className="control-label">Charge per hour</label>
                <div className="form-control" >{charge}</div>
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
  appmt:state.appointment,
  professional:state.professional,
  email:state.auth.user.email
 });


export default connect(mapStateToProps,{
  onUpdateFieldAppointment,
  onMakeAppointment,
  sgMail,
  onChangeProfileView})(AppointmentForm);
