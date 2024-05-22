import {REGISTER_USER} from '../actions/Types';

const initialState = {
  registerData: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {...state, registerData: action.payload};
  }
  return state;
};

export default registerReducer;
