import {UPDATE_TASK} from '../actions/Types';

const initialState = {
  update: false,
};

const updateTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      return {...state, update: action.payload};
    default:
      return state;
  }
};

export default updateTaskReducer;
