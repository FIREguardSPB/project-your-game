import { CARD_STATE } from "../actionTypes";

export const cardStateReducer = (state = true, action) => {
    switch (action.type) {
        case CARD_STATE:
            return state = action.payload;
        default:
            return state;
    }
};