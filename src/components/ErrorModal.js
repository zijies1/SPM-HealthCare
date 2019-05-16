import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button} from 'react-bootstrap';
import { onModal } from '../actions';

class ErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.props.onModal({ show: false });
  }

  handleShow() {
    this.props.onModal({ show: true });
  }

  renderModal(){
    console.log(this.props);
    if(this.props.showModal){
      return(
        <div className="custom-modal text-dark">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" onClick={this.handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.error}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.handleClose}>
                  Close
                </button>
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
  error:state.auth.error,
  showModal:state.auth.showModal
});

export default connect(mapStateToProps,{onModal})(ErrorModal);
