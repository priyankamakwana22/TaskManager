import {GET_TASK_ID} from '../actions/Types';

const initialState = {
  id: '',
};

const getTaskIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_ID:
      return {...state, id: (state.id = action.payload)};
    default:
      return state;
  }
};

export default getTaskIdReducer;
