import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())