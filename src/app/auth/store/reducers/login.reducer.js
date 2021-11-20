/* LIBRARY */
import * as Actions from "../actions";

const initialState = {
  submitting: false,
  success: false,
  error: null,
  sendSuccess: false,
  sendError: null,
};

const login = function (state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN: {
      return {
        success: false,
        error: null,
        submitting: true
      };
    }
    case Actions.FORGOT_PASSWORD: {
      return {
        success: false,
        error: null,
        submitting: true
      };
    }
    case Actions.LOGIN_SUCCESS: {
      return {
        success: true,
        error: null,
        submitting: false
      };
    }
    case Actions.LOGIN_ERROR: {
      return {
        success: false,
        error: action.payload,
        submitting: false
      };
    }
    case Actions.LOGOUT: {
      return {
        submitting: false,
        success: false,
        error: null,
      };
    }
    case Actions.SEND_SUCCESS: {
      return {
        sendSuccess: true,
        sendError: null,
        submitting: false
      };
    }
    case Actions.SEND_ERROR: {
      return {
        sendSuccess: false,
        sendError: action.payload,
        submitting: false
      };
    }
    default: {
      return state;
    }
  }
};

export default login;
