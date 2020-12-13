import { INIT_QUESTION, LOG_USER, ADD_COUNT, COUNT_SCORE, CARD_STATE } from "./actionTypes";

export const initQuestionAC = (payload) => ({
  type: INIT_QUESTION,
  payload,
});

export const logUserAC = (payload) => ({
  type: LOG_USER,
  payload,
});

export const addCountAC = (payload) => ({
  type: ADD_COUNT,
  payload,
});

export const countScoreAC = (payload) => ({
  type: COUNT_SCORE,
  payload,
});
export const cardStateAC = (payload) => ({
  type: CARD_STATE,
  payload,
})