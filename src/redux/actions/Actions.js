import {
  ADD_TASK,
  AUTH_LOGIN,
  GET_TASK_ID,
  IS_UPDATE,
  LOGGED_IN_USERNAME,
  OPEN_MODAL,
  REGISTER_USER,
  SELECTED_ASSIGNEE,
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

export const setSelectedAssignee = selectedValue => ({
  type: SELECTED_ASSIGNEE,
  payload: selectedValue,
});

export const setLoggedInUsername = loggedInUsername => ({
  type: LOGGED_IN_USERNAME,
  payload: loggedInUsername,
});

export const isUpdate = status => ({
  type: IS_UPDATE,
  payload: status,
});

export const getTaskId = id => ({
  type: GET_TASK_ID,
  payload: id,
});
