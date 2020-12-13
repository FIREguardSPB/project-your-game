import { ADD_COUNT } from "../actionTypes";
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.payload;

    default:
      return state;
  }
};
