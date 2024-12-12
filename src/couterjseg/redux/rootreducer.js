import { combineReducers } from "redux";
import CounterReducer from "../counterreducer";
import { formreducer } from "../../formreducer/formreducer";


export const rootreducer=combineReducers({
   counter:CounterReducer,
   form:formreducer
})