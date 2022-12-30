import {createStore, combineReducers, applyMiddleware } from "redux"

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk"
import questionsReducer from "./reducers/questionsReducer";
import choiceReducer from "./reducers/choiceReducer";

const initalState = {}

const rootReducer = combineReducers({
    ANSWERS: choiceReducer,
    QUESTIONS: questionsReducer
})
const middleware = [thunk]

const Store = createStore(
    
    rootReducer, 
    initalState,
   composeWithDevTools( applyMiddleware(...middleware))
)
export default Store;