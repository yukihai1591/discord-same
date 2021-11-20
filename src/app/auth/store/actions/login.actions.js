/* COMMON */
import authService from "app/services/authService";
import Error from "app/utils/error";
/** REDUX */
import { setUserData } from "./user.actions";

export const LOGIN = "LOGIN";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const SEND_ERROR = "SEND_ERROR";
export const SEND_SUCCESS = "SEND_SUCCESS";

export function loginSuccess() {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  };
}

export function loginError(error) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ERROR,
      payload: error || "Error",
    });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
}

export function submitLogin(params) {
  return (dispatch) => {
    dispatch({
      type: LOGIN
    })

    authService
      .signInWithEmailAndPassword(params)
      .then((user) => {
        dispatch(loginSuccess());
        dispatch(setUserData(user));
      })
      .catch((error) => {
        if(error && error.code === 402) {
          dispatch(loginError(Error.EMAIL_NOT_EXIST))
        } else {
          dispatch(loginError())
        }
      });
  }
}

export function sendSuccess() {
  return (dispatch) => {
    dispatch({
      type: SEND_SUCCESS,
    });
  };
}

export function sendError(error) {
  return (dispatch) => {
    dispatch({
      type: SEND_ERROR,
      payload: error || "Error",
    });
  };
}

export function submitForgotPassword({ emailAddress }) {
  return (dispatch) => {
    dispatch({
      type: FORGOT_PASSWORD
    })

    authService
      .sendForgotPassword(emailAddress)
      .then(() => dispatch(sendSuccess()))
      .catch((error) => dispatch(sendError(error)));
  }
}