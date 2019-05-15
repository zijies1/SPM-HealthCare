import { combineReducers } from "redux";
import auth from "./auth.js";
// main reducers
export default combineReducers({
  auth: auth
  // your reducer here
});
