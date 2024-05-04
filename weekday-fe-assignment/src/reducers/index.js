import { combineReducers } from "redux";
import getJobReducer from "./getJobDataReducer";
const rootReducer = combineReducers({
  getJobReducer: getJobReducer,
});

export default rootReducer;
