import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound";
import AppointmentForm from "./components/AppointmentForm";
import Profile from "./components/Profile";



// build the router
const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/appointment" component={AppointmentForm}/>
        <Route path="/profile" component={Profile}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
);

// export
export { router };
