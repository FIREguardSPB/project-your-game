import { LOG_USER } from "../actionTypes";
export const userReducer = (state = [], action) => {
  switch (action.type) {
    case LOG_USER:
      return [...state, action.payload];

    default:
      return state;
  }
};
