import {IS_UPDATE} from '../actions/Types';

const initialState = {
  status: false,
};

const isUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_UPDATE:
      return {status: (state.status = action.payload)};
    default:
      return state;
  }
};

export default isUpdateReducer;
