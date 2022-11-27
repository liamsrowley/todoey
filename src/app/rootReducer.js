import { combineReducers } from "redux";
import { todosReducer } from "../features/todos/todosSlice";

export const rootReducer = combineReducers({
  todos: todosReducer,
});
