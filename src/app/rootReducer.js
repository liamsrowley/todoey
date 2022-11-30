import { combineReducers } from "redux";
import { filtersReducer } from "../features/filters/filters.slice";
import { todosReducer } from "../features/todos/todos.slice";

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
