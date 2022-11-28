import { combineReducers } from "redux";
import { filtersReducer } from "../features/filters/filtersSlice";
import { todosReducer } from "../features/todos/todosSlice";

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
