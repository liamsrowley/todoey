import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todos: (state = {}, action) => state,
});
