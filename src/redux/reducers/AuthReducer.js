import {AUTH_LOGIN, GET_TASK_ID} from '../actions/Types';

const initialState = {
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {...state, loggedIn: action.payload};
    default:
      return state;
  }
};

export default authReducer;
