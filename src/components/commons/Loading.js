import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component {

  renderModal(){
    if(this.props.loading){
      return(
        <div className="custom-modal text-dark">
          <div className="modal-dialog" role="document">
            <div className="container text-center">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="spinner-border" style={{"width": "6rem","height": "6rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="text-center mb-2">
                  Loading...
                </div>
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
  loading:state.auth.loading,
});

export default connect(mapStateToProps,null)(Loading);
