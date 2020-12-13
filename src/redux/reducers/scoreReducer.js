import {COUNT_SCORE} from "../actionTypes";

export const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNT_SCORE:
            // console.log(action.payload)

            return state + action.payload;

        default:
            return state;
    }
};
