import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import MainContainer from "./MainContainer";
import Login from "./Login";
import NotFound from "./NotFound";
import Appointment from "./Appointment";
import Profile from "./Profile";
import AdminPage from "./AdminPage";
import Loading from "./Loading";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/appointment" component={Appointment}/>
              <Route path="/admin" component={AdminPage}/>
            </div>
        </Router>
        <Loading/>
      </div>
    );
  }
}

// <Route path="/login" component={Login}/>
// <Route path="/appointment" component={AppointmentForm}/>
// <Route path="/profile" component={Profile}/>
// <Route path="*" component={NotFound}/>
