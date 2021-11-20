/* LIBRARY */
import * as Actions from "../actions";

const initialState = {
  role: [],
  data: null,
};

const user = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        data: action.payload,
        role: [],
      };
    }
    case Actions.REMOVE_USER_DATA: {
      return {
        ...initialState,
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default user;
