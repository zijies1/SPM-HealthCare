import React from "react";
import { connect } from 'react-redux';
import { onUpdateField } from "../actions/index.js";


class AppointmentrForm extends React.Component {
  // render
  render() {
    return (
      <div>hello world</div>
    );
  }
}

const mapStateToProps = state => ({ user:state.auth.user });


export default connect(mapStateToProps)(AppointmentrForm);
