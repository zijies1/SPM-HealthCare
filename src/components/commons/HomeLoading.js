import React from 'react';

export default class HomeLoading extends React.Component {

  render() {
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
