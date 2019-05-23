import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button} from 'react-bootstrap';
import {
  onModal,
  onAddProfessional,
  onUpdateFieldProfessional
} from '../../actions';

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.changeName = ev => this.props.onUpdateFieldProfessional(ev.target.value,"name");
    this.changeType = ev => this.props.onUpdateFieldProfessional(ev.target.value,"type");
    this.changeEmail = ev => this.props.onUpdateFieldProfessional(ev.target.value,"email");
    this.changeCharge = ev => this.props.onUpdateFieldProfessional(ev.target.value,"charge");
    this.submitForm = () => ev =>{
      ev.preventDefault();
      this.props.onAddProfessional(this.props.newProfessional);
      window.location.reload();
    };
  }

  handleClose(){
    this.props.onModal({key:"showModalProfessional",value: false});
  }

  handleShow() {
    this.props.onModal({key:"showModalProfessional",value: true });
  }

  showLoading(){
    if(this.props.loading){
      return(
        <input type="submit" value="Submit" className="btn btn-outline-light disabled"/>
      )
    }else{
      return(
        <input type="submit" value="Submit" className="btn btn-outline-light"/>
      )
    }
  }

  renderModal(){
    const types = this.props.types;
    if(this.props.showModal){
      return(
        <div className="custom-modal text-dark">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Add New Professional
                <button type="button" className="close" onClick={this.handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body py-4">
                <form onSubmit={this.submitForm()}>
                  <div className="form-group">
                    <input
                      type="email" className="form-control form-control-lg"
                      placeholder="Email"
                      value={this.props.newProfessional.email} onChange={this.changeEmail}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      placeholder="Name"
                      value={this.props.newProfessional.name} onChange={this.changeName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control" value={this.props.newProfessional.type} onChange={this.changeType} required>
                      {types.map(type =>{
                        return (<option key={type}>{type}</option>)
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      placeholder="charge"
                      value={this.props.newProfessional.charge} onChange={this.changeCharge}
                      required
                    />
                  </div>
                  {this.showLoading()}
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showModal:state.professional.showModalProfessional,
  loading:state.auth.loading,
  newProfessional:state.professional.newProfessional,
  types:state.professional.types
});

export default connect(mapStateToProps,{onModal,onAddProfessional,onUpdateFieldProfessional})(ProfessionalForm);
