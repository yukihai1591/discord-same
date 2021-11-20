/* LIBRARY */
import * as Actions from "../actions";

const initialState = {
  submitting: false,
  user: null,
  success: false,
  error: null,
  sendSuccess: false,
  sendError: null,
};

const register = function (state = initialState, action) {
  switch (action.type) {
    case Actions.REGISTER: {
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
    case Actions.REGISTER_SUCCESS: {
      return {
        success: true,
        error: null,
        user: action.payload,
        submitting: false
      };
    }
    case Actions.REGISTER_ERROR: {
      return {
        success: false,
        error: action.payload,
        user: null,
        submitting: false
      };
    }
    case Actions.SEND_REGISTER_SUCCESS: {
      return {
        sendSuccess: true,
        sendError: null,
        submitting: false
      };
    }
    case Actions.SEND_REGISTER_ERROR: {
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

export default register;
