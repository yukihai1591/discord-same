/* LIBRARY */
import * as Actions from "../../actions/fuse/index";

const initialState = {
  state: null,
  options: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    autoHideDuration: 2000,
    message: "Hi",
    variant: null,
  },
};

const message = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_MESSAGE: {
      return {
        state: true,
        options: {
          ...initialState.options,
          ...action.options,
        },
      };
    }
    case Actions.HIDE_MESSAGE: {
      return {
        ...state,
        state: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default message;
