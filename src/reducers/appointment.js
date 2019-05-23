import {
  UPDATE_FIELD_APPOINTMENT,
  GET_APPOINTMENTS
} from '../constants/actionTypes';


const doctors = [
  {
    type:"podiatrist",
    name:"Robert Koch",
    email:"546641464@qq.com",
    charge:"100"
  },
  {
    type:"naturopath",
    name:"Henry Gray",
    email:"546641464@qq.com",
    charge:"130"
  },
  {
    type:"chiropractor",
    name:"John Doe",
    email:"546641464@qq.com",
    charge:"80"
  },
  {
    type:"chiropractor",
    name:"Theodor Billroth",
    email:"546641464@qq.com",
    charge:"90"
  }
];
const times = [
  "9:00 to 10:00",
  "10:00 to 11:00",
  "11:00 to 12:00",
  "12:00 to 13:00",
  "13:00 to 14:00",
  "14:00 to 15:00",
  "15:00 to 16:00",
  "16:00 to 17:00"
];
const initialstate = {
  fields:{
    type:"Choose Type",
    time:times[0],
    message:""
  },
  times
};


export default (state =initialstate, action) => {
  switch (action.type) {
    case UPDATE_FIELD_APPOINTMENT:
      return { ...state,fields: {...state.fields,[action.key]: action.value}};
    // ADMIN ONLY
    case GET_APPOINTMENTS:
      return { ...state,appointments:action.appointments};
    default:
      return state;
  }

  return state;
};
