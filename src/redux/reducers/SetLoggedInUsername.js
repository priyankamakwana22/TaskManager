import {LOGGED_IN_USERNAME} from '../actions/Types';

const initialState = {
  loggedInUsername: '',
};

const setLoggedInUsernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USERNAME:
      return {loggedInUsername: (state.loggedInUsername = action.payload)};
    default:
      return state;
  }
};

export default setLoggedInUsernameReducer;
