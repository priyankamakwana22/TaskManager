import {AUTH_LOGIN, REGISTER_USER} from './Types';

export const registerUser = userData => ({
  type: REGISTER_USER,
  payload: userData,
});

export const authLogin = authState => ({
  type: AUTH_LOGIN,
  payload: authState,
});
