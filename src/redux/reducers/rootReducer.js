import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { counterReducer } from './counterReducer';
import { scoreReducer } from './scoreReducer';
import { userReducer } from './userReducer';
import {cardStateReducer} from "./cardStateReducer";

export const rootReducer = combineReducers({
    questions: questionReducer,
    user: userReducer,
    counter: counterReducer,
    score: scoreReducer,
    cardState: cardStateReducer,
})
