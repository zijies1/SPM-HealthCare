import { combineReducers } from "redux";
import auth from "./auth.js";
import firebase from "./firebase";

// main reducers
export default combineReducers({
  auth: auth,
  firebase:()=>({
    firebase,
  })
});
