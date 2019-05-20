import React from "react";
import {connect} from "react-redux";
import {onDelProfessional,onModal} from "../actions/index.js";
import ProfessionalForm from "./ProfessionalForm";

class Professionals extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props.professionals);
    this.showForm = () => ev => {
      ev.preventDefault();
      this.props.onModal({ show: true });
    }
    this.handleSumbit = () => ev =>{
      ev.preventDefault();
      this.props.onDelProfessional(ev.target.id);
    }
  }

  // render
  render() {
    console.log(this.props.professionals);
    return (
      <div>
        <ProfessionalForm/>
        <button href="#" className="btn btn-primary" onClick={this.showForm()}>Add New Professional</button>
        <hr/>
        {this.props.professionals.map(professional =>{
          return(<form onSubmit={this.handleSumbit()} key={professional.key} id={professional.key}>
          <div className="card bg-white mb-3">
           <div className="card-header">
             <strong>{professional.name}</strong>
           </div>
          <div>
            <div className="form-group row pl-2">
             <label className="col-sm-4 col-form-label"><strong>Type:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={professional.type}/>
             </div>
           </div>
            <div className="form-group row pl-2">
             <label className="col-sm-4 col-form-label"><strong>Charge($(AUS) per hour):</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={professional.charge}/>
             </div>
            </div>
            <div className="form-group row pl-2">
             <label className="col-sm-4 col-form-label"><strong>Email:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={professional.email}/>
             </div>
           </div>
           <button href="#" className="btn btn-primary m-2" >Delete</button>
           </div>
         </div>
         </form>)
       })}
      </div>
    );
  }
}

export default connect(null,{onDelProfessional,onModal})(Professionals);
