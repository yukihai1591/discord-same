/* LIBRARY */
import { combineReducers } from "redux";
import fuse from "./fuse";
import home from './home';
import auth from "app/auth/store/reducers";
import quickPanel from "app/fuse-layouts/shared-components/quickPanel/store/reducers";

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    fuse,
    home,
    quickPanel,
    ...asyncReducers,
  });

export default createReducer;
