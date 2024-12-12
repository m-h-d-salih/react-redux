import { createStore } from "redux";
import CounterReducer from "../counterreducer";
import { rootreducer } from "./rootreducer";

const store=createStore(rootreducer);
export default store;