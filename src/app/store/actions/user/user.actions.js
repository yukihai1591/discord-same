/* LIBRARY */
import { setUserData } from "app/auth/store/actions";
import userService from "app/services/userService";

// MAIN TYPE
export const SEARCH_USER = "SEARCH_USER";
export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const TRASH_USER = "TRASH_USER";
export const EDIT_USER = "EDIT_USER";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const UPLOAD_AVATAR_USER = "UPLOAD_AVATAR_USER";
export const CHANGE_STATUS = "CHANGE_STATUS";
// SUCCESS OR ERROR TYPE
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_ERROR = "SEARCH_USER_ERROR";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";
export const TRASH_USER_SUCCESS = "TRASH_USER_SUCCESS";
export const TRASH_USER_ERROR = "TRASH_USER_ERROR";
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR'
export const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS'
export const UPLOAD_AVATAR_ERROR = 'UPLOAD_AVATAR_ERROR'
export const CHANGE_STATUS_SUCCESS = "CHANGE_STATUS_SUCCESS"
export const CHANGE_STATUS_ERROR = "CHANGE_STATUS_ERROR"

/** For search user */
export function searchSuccess(users, count) {
  return {
    type: SEARCH_USER_SUCCESS,
    payload: { users, count },
  };
}

export function searchError(error) {
  return {
    type: SEARCH_USER_ERROR,
    payload: error,
  };
}

/** For add user */
export function addSuccess(user) {
  return {
    type: ADD_USER_SUCCESS,
    payload: user,
  };
}

export function addError(error) {
  return {
    type: ADD_USER_ERROR,
    payload: error,
  };
}

/**For trash user */
export function trashSuccess() {
  return {
    type: TRASH_USER_SUCCESS
  };
}

export function trashError(error) {
  return {
    type: TRASH_USER_ERROR,
    payload: error,
  };
}

/**For get user */

export function getUserByIdSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
}

export function getUserByIdError(error) {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
}

/**For edit user */
export function editSuccess(user) {
  return {
    type: EDIT_USER_SUCCESS,
    payload: user,
  };
}

export function editError(error) {
  return {
    type: EDIT_USER_ERROR,
    payload: error,
  };
}

/**For change password user */
export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
}

export function changePasswordError(error) {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: error,
  };
}
/** For upload Avatar*/

export function uploadAvatarSuccess(idUser, dataMedia) {
  return (dispatch) => {
    dispatch({
      type: UPLOAD_AVATAR_SUCCESS,
      payload: { idUser, dataMedia }
    });
  };
}

export function uploadAvatarError(error) {
  return (dispatch) => {
    dispatch({
      type: UPLOAD_AVATAR_ERROR,
      payload: error,
    });
  };
}

export function changeStatusSuccess(data) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_STATUS_SUCCESS,
      payload: data,
    });
  };
}

export function changeStatusError(error) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_STATUS_ERROR,
      payload: error,
    });
  };
}

/***************** */

export function submitSearchUser(params) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_USER,
    });

    userService
      .search(params)
      .then((props) => {
        return dispatch(searchSuccess(props.data, props.count));
      })
      .catch((error) => {
        return dispatch(searchError(error));
      });
  };
}

export function submitAddUser(params) {
  return (dispatch) => {
    dispatch({
      type: ADD_USER,
    });

    userService
      .add(params)
      .then((props) => {
        return dispatch(addSuccess(props));
      })
      .catch((error) => {
        return dispatch(addError(error));
      });
  };
}

export function submitChangePassword(params) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PASSWORD,
    });

    userService
      .changePassword(params)
      .then((params) => {
        return dispatch(changePasswordSuccess(params));
      })
      .catch((error) => {
        return dispatch(changePasswordError(error));
      });
  };
}

export function submitEditUser(params, id, isRegister) {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
    });

    userService
      .edit(params, id)
      .then((props) => {
        if(!isRegister) {
          dispatch(setUserData(props))
        }
        return dispatch(editSuccess(props));
      })
      .catch((error) => {
        return dispatch(editError(error));
      });
  };
}

export function getUserById(params) {
  return (dispatch) => {
    dispatch({
      type: GET_USER,
    });

    userService
      .getById(params)
      .then((props) => {
        return dispatch(getUserByIdSuccess(props));
      })
      .catch((error) => {
        return dispatch(getUserByIdError(error));
      });
  };
}

export function submitTrashUser(params) {
  return (dispatch) => {
    dispatch({
      type: TRASH_USER,
    });

    userService
      .trash(params)
      .then(() => {
        return dispatch(trashSuccess());
      })
      .catch((error) => {
        return dispatch(trashError(error));
      });
  };
}

export function changeStatusUser(params) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_STATUS,
    });
    userService
      .changeStatusUser(params)
      .then((data) => {
        return dispatch(changeStatusSuccess(data));
      })
      .catch((error) => {
        return dispatch(changeStatusError(error));
      });
  };
}
