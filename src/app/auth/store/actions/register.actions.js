/* COMMON */
import authService from "app/services/authService";
/** REDUX */
import { setUserData } from "./user.actions";
import { loginSuccess } from "./login.actions";

export const REGISTER = "REGISTER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const SEND_REGISTER_ERROR = "SEND_REGISTER_ERROR";
export const SEND_REGISTER_SUCCESS = "SEND_REGISTER_SUCCESS";

export function registerSuccess(user) {
  return (dispatch) => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: user
    });
  };
}

export function registerError(error) {
  return (dispatch) => {
    dispatch({
      type: REGISTER_ERROR,
      payload: error || "Error",
    });
  };
}

// export function sendRegisterSuccess() {
//   return (dispatch) => {
//     dispatch({
//       type: SEND_REGISTER_SUCCESS,
//     });
//   };
// }

// export function sendRegisterError(error) {
//   return (dispatch) => {
//     dispatch({
//       type: SEND_REGISTER_ERROR,
//       payload: error || "Error",
//     });
//   };
// }

export function submitRegister(params) {
  return (dispatch) => {
    dispatch({
      type: REGISTER
    })

    authService
      .register(params)
      .then((user) => {
        console.log('user', user)
        dispatch(registerSuccess(user))
      })
      .catch((error) => {
        dispatch(registerError(error))
      });
  }
}

