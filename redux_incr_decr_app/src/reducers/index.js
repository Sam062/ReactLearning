// Step-3 Combining the Actions and Reducers with Root Reducer

import { combineReducers } from "redux";
import changeNumber from "./IncrDecrReducer";

const rootReducer = combineReducers({
  changeNumber,
  //   changeBackground ...etc
});
export default rootReducer;
