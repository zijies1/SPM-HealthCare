import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import Appointment from "./Appointment";
import Profile from "./Profile";
import AdminPage from "./AdminPage";
import HomeLoading from "./commons/HomeLoading";
import Loading from "./commons/Loading";
import ErrorModal from "./commons/ErrorModal";
import { createBrowserHistory } from 'history';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={createBrowserHistory}>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/appointment" component={Appointment}/>
              <Route path="/admin" component={AdminPage}/>
            </div>
        </Router>
        <Loading/>
        <ErrorModal/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading:state.auth.loading,
});

export default connect(mapStateToProps,null)(App);
