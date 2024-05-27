import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer';
import authReducer from './AuthReducer';
import addTaskReducer from './AddTaskReducer';
import selectedAssigneeReducer from './SelectedAssigneeReducer';
import setLoggedInUsernameReducer from './SetLoggedInUsername';
import isUpdateReducer from './IsUpdateReducer';
import getTaskIdReducer from './GetTaskIdReducer';

const rootReducer = combineReducers({
  registerReducer,
  authReducer,
  addTaskReducer,
  selectedAssigneeReducer,
  setLoggedInUsernameReducer,
  isUpdateReducer,
  getTaskIdReducer,
});

export default rootReducer;
