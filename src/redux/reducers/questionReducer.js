import { INIT_QUESTION } from "../actionTypes";

export const questionReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_QUESTION:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
