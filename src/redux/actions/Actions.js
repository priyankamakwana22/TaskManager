import {ADD_TASK, AUTH_LOGIN, REGISTER_USER, SELECTED_ASSIGNEE} from './Types';

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
