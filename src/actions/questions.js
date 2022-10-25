import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    const question_1 = saveQuestion({
      question,
      author: authedUser,
    });
    dispatch(addQuestion(question_1));
    return dispatch(hideLoading());
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestionAnswer({ id, authedUser, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    id,
    authedUser,
    answer,
  };
}

export function handleAddQuestionAnswer(id, answer, getState) {
  return (dispatch) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
      id,
      author: authedUser,
      answer,
    })
      .then((questionAnswer) => dispatch(addQuestionAnswer(questionAnswer)))
      .then(() => dispatch(hideLoading()));
  };
}