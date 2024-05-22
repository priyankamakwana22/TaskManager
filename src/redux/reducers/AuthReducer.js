import {AUTH_LOGIN} from '../actions/Types';

const initialState = {
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {loggedIn: (state.loggedIn = action.payload)};
    default:
      return false;
  }
};

export default authReducer;
