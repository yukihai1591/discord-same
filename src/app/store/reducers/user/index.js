/* LIBRARY */
import { combineReducers } from "redux";
import user_management from "./user.reducer";

const userReducers = combineReducers({
  user_management,
});

export default userReducers;
