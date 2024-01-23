// Step-4 Creating a Store using Root reducer

import rootReducer from "./reducers/index";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
