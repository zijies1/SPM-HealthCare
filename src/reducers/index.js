import { combineReducers } from "redux";
import auth from "./auth.js";
import appointment from "./appointment.js";
import firebase from "./firebase";

// main reducers
export default combineReducers({
  auth: auth,
  appointment:appointment,
  firebase:()=>({
    firebase,
  })
});
