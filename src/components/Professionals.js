import React from "react";
import {connect} from "react-redux";
import {onCancelAppoitment} from "../actions/index.js";


class Professionals extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props.professionals);
    this.handleSumbit = () => ev =>{
      ev.preventDefault();
      // this.props.onCancelAppoitment(ev.target.id,this.props.appointments);
      window.location.reload();
    }
  }

  // render
  render() {
    console.log(this.props.professionals);
    return (
      <div>
        <button href="#" className="btn btn-primary">Add</button>
        <hr/>
        {this.props.professionals.map(professional =>{
          return(<form onSubmit={this.handleSumbit()} key={key} id={key}>
          <div className="card bg-white mb-3">
           <div className="card-header">
             Doctor:{professional.name}
           </div>
          <div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>Type:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={professional.type}/>
             </div>
           </div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>Charge($(AUS) per hour):</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={professional.charge}/>
             </div>
            </div>
            <div className="form-group row">
             <label className="col-sm-4 col-form-label"><strong>Email:</strong></label>
             <div className="col-sm-8">
               <input type="text" readOnly className="form-control-plaintext" value={professional.email}/>
             </div>
           </div>
           <hr/>
           <button href="#" className="btn btn-primary">Delete</button>
           </div>
         </div>
         </form>)
       })}
      </div>
    );
  }
}

export default connect(null,{onCancelAppoitment})(Professionals);
