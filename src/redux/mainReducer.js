import {combineReducers} from "redux";
import { testReducer } from "./testComp.Reducer";

export const mainReducer = combineReducers({
    testReducer : testReducer});