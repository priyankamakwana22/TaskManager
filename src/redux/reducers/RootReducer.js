import {combineReducers} from 'redux';
import registerReducer from './RegisterReducer';
import authReducer from './AuthReducer';
import addTaskReducer from './AddTaskReducer';
import setLoggedInUsernameReducer from './SetLoggedInUsername';

const rootReducer = combineReducers({
  registerReducer,
  authReducer,
  addTaskReducer,
  setLoggedInUsernameReducer,
});

export default rootReducer;
