import { combineReducers } from "redux";
import auth from "./auth.js";
import appointment from "./appointment.js";
import profile from "./profile.js";
import firebase from "./firebase";
import professional from "./professional";
// main reducers
export default combineReducers({
  auth: auth,
  appointment:appointment,
  profile:profile,
  professional:professional,
  firebase:()=>({
    firebase,
  })
});
