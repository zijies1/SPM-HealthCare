import {
  CHANGE_PROFILE_VIEW
} from '../constants/actionTypes';

const shows = ["Profile","Appointments"];
const initialstate = {
  show:shows[0],
  profile:"active"
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_VIEW:
      return {show: action.payload,[action.payload]:"active"};
    default:
      return state;
  }

  return state;
};
