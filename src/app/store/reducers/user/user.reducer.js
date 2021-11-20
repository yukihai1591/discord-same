/* LIBRARY */
import * as Actions from "../../actions/index";

const initialState = {
  users: [],
  user: [],
  count: 0,
  submitting: false,
  searchSuccess: false,
  searchError: null,
  addSuccess: false,
  addError: null,
  trashSuccess: false,
  trashError: null,
  editSuccess: false,
  editError: null,
  changeSuccess: false,
  changeError: null,
  uploadAvatarSuccess: false,
  uploadAvatarError: null,
  changeStatusSuccess: false,
  changeStatusError: null,
};

const user = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        user: action.payload
      }
    }
    case Actions.SEARCH_USER: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }
    case Actions.ADD_USER: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }
    case Actions.TRASH_USER: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }
    case Actions.EDIT_USER: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }

    case Actions.UPLOAD_AVATAR_USER: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }

    case Actions.CHANGE_STATUS: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }

    case Actions.CHANGE_PASSWORD: {
      return {
        ...state,
        searchSuccess: false,
        searchError: null,
        addSuccess: false,
        addError: null,
        trashSuccess: false,
        trashError: null,
        editSuccess: false,
        editError: null,
        changeSuccess: false,
        changeError: null,
        uploadAvatarSuccess: false,
        uploadAvatarError: null,
        changeStatusSuccess: false,
        changeStatusError: null,
        submitting: true,
      };
    }

    case Actions.SEARCH_USER_SUCCESS: {
      return {
        ...state,
        searchSuccess: true,
        searchError: null,
        users: action.payload.users,
        count: action.payload.count,
        submitting: false,
      };
    }
    case Actions.SEARCH_USER_ERROR: {
      return {
        ...state,
        searchSuccess: false,
        searchError: action.payload,
        submitting: false,
      };
    }

    case Actions.ADD_USER_SUCCESS: {
      return {
        ...state,
        addSuccess: true,
        addError: null,
        users: [action.payload, ...state.users],
        submitting: false,
      };
    }
    case Actions.ADD_USER_ERROR: {
      return {
        ...state,
        addSuccess: false,
        addError: action.payload,
        submitting: false,
      };
    }

    case Actions.TRASH_USER_SUCCESS: {
      return {
        ...state,
        trashSuccess: true,
        trashError: null,
        submitting: false,
      };
    }
    case Actions.TRASH_USER_ERROR: {
      return {
        ...state,
        addSuccess: false,
        addError: action.payload,
        submitting: false,
      };
    }

    case Actions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        submitting: false,
      };
    }
    case Actions.GET_USER_ERROR: {
      return {
        ...state,
        submitting: false,
      };
    }

    case Actions.EDIT_USER_SUCCESS: {
      return {
        ...state,
        editSuccess: true,
        editError: null,
        users: action.payload,
        user: action.payload,
        submitting: false,
      };
    }
    case Actions.EDIT_USER_ERROR: {
      return {
        ...state,
        editSuccess: false,
        editError: action.payload,
        submitting: false,
      };
    }

    case Actions.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        changeSuccess: true,
        changeError: null,
        submitting: false,
      };
    }

    case Actions.CHANGE_PASSWORD_ERROR: {
      return {
        ...state,
        changeSuccess: false,
        changeError: action.payload,
        submitting: false,
      };
    }

    case Actions.UPLOAD_AVATAR_SUCCESS: {
      let tmpUsers = state.users;
      let find = tmpUsers.findIndex(f => f.id === action.payload.idUser);
      if (find !== -1) tmpUsers[find].avatar = action.payload.dataMedia.avatar;

      return {
        ...state,
        users: tmpUsers,
        uploadAvatarSuccess: true,
        uploadAvatarError: null,
        submitting: false,
      };
    }

    case Actions.UPLOAD_AVATAR_ERROR: {
      return {
        ...state,
        uploadAvatarSuccess: false,
        uploadAvatarError: action.payload,
        submitting: false,
      };
    }

    case Actions.CHANGE_STATUS_SUCCESS: {
      return {
        ...state,
        changeStatusSuccess: true,
        changeStatusError: null,
        submitting: false,
      };
    }

    case Actions.CHANGE_STATUS_ERROR: {
      return {
        ...state,
        changeStatusSuccess: false,
        changeStatusError: action.payload,
        submitting: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default user;
