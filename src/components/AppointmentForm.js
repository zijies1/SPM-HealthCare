import React from "react";
import { connect } from 'react-redux';
import { onUpdateField } from "../actions/index.js";


class AppointmentrForm extends React.Component {
  // render
  render() {
    return (
      <form className="needs-validation mt-500" novalidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label for="validationTooltip01">First name</label>
            <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required/>
            <div className="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationTooltip02">Last name</label>
            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required/>
            <div className="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationTooltipUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              </div>
              <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required/>
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationTooltip03">City</label>
            <input type="text" className="form-control" id="validationTooltip03" placeholder="City" required/>
            <div className="invalid-tooltip">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationTooltip04">State</label>
            <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required/>
            <div className="invalid-tooltip">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationTooltip05">Zip</label>
            <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required/>
            <div className="invalid-tooltip">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ user:state.auth.user });


export default connect(mapStateToProps)(AppointmentrForm);
