/* LIBRARY */
import _ from "@lodash";
import history from "@history";
/** COMMON */
import authService from "app/services/authService";
/** REDUX */
import { logout } from "app/auth/store/actions/login.actions";
import * as Actions from "app/store/actions";
import store from "app/store";

export const SET_USER_DATA = "[USER] SET DATA";
export const REMOVE_USER_DATA = "[USER] REMOVE DATA";
export const USER_LOGGED_OUT = "[USER] LOGGED OUT";

/** Set User Data */
export function setUserData(user) {
  console.log("user", user)
  return (dispatch) => {
    /** Set User Data */
    dispatch({
      type: SET_USER_DATA,
      payload: user,
    });
  };
}

/** Update User Settings */
export function updateUserSettings(settings) {
  return (dispatch, getState) => {
    const oldUser = getState().auth.user;
    const user = _.merge({}, oldUser, { data: { settings } });

    updateUserData(user);

    return dispatch(setUserData(user));
  };
}

/* Update User Shortcuts */
export function updateUserShortcuts(shortcuts) {
  return (dispatch, getState) => {
    const user = getState().auth.user;
    const newUser = {
      ...user,
      data: {
        ...user.data,
        shortcuts,
      },
    };

    updateUserData(newUser);

    return dispatch(setUserData(newUser));
  };
}

/** Remove User Data */
export function removeUserData() {
  return {
    type: REMOVE_USER_DATA,
  };
}

/** Logout */
export function logoutUser() {
  return (dispatch, getState) => {
    history.replace({
      pathname: "/home",
    });
    authService.logout();
    dispatch(logout())
    dispatch({
      type: USER_LOGGED_OUT,
    });
  };
}

/** Update User Data */
function updateUserData(user) {
  if (!user.role || user.role.length === 0) {
    // is guest
    return;
  }

  switch (user.from) {
    default: {
      authService
        .updateUserData(user)
        .then(() => {
          store.dispatch(
            Actions.showMessage({ message: "User data saved with api" })
          );
        })
        .catch((error) => {
          store.dispatch(Actions.showMessage({ message: error.message }));
        });
      break;
    }
  }
}
