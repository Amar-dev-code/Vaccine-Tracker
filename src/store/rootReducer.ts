import { combineReducers } from "redux";

import { vaccineReducer } from "../VaccineTracker/store/vaccineTracker.reducer";

export const rootReducer = combineReducers({
  vaccineTracker: vaccineReducer,
});
