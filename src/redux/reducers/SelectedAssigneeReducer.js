import {SELECTED_ASSIGNEE} from '../actions/Types';

const initialState = {
  selectedValue: '',
};

const selectedAssigneeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ASSIGNEE:
      return {selectedValue: state.selectedValue + action.payload};
    default:
      return state;
  }
};

export default selectedAssigneeReducer;
