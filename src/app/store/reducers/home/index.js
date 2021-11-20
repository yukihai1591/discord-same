/* LIBRARY */
import { combineReducers } from "redux";
import home_management from "./home.reducer";

const homeReducers = combineReducers({
    home_management,
});

export default homeReducers;