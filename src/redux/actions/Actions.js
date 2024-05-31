import {
  ADD_TASK,
  AUTH_LOGIN,
  GET_TASK_ID,
  IS_UPDATE,
  LOGGED_IN_USERNAME,
  OPEN_MODAL,
  REGISTER_USER,
  SELECTED_ASSIGNEE,
  UPDATE_TASK,
} from './Types';

export const registerUser = userData => ({
  type: REGISTER_USER,
  payload: userData,
});

export const authLogin = authState => ({
  type: AUTH_LOGIN,
  payload: authState,
});

export const addTask = taskData => ({
  type: ADD_TASK,
  payload: taskData,
});

export const setLoggedInUsername = loggedInUsername => ({
  type: LOGGED_IN_USERNAME,
  payload: loggedInUsername,
});

export const getTaskId = id => ({
  type: GET_TASK_ID,
  payload: id,
});
