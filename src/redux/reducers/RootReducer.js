import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer';
import authReducer from './AuthReducer';
import addTaskReducer from './AddTaskReducer';
import selectedAssigneeReducer from './SelectedAssigneeReducer';

const rootReducer = combineReducers({
  registerReducer,
  authReducer,
  addTaskReducer,
  selectedAssigneeReducer,
});

export default rootReducer;
