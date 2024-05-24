import {ADD_TASK} from '../actions/Types';

const initialState = {
  taskData: [],
};

const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {...state, taskData: action.payload};
    default:
      return state;
  }
};

export default addTaskReducer;
