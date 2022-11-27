import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

const composedEnhancers = composeWithDevTools();

export const store = createStore(rootReducer, composedEnhancers);
