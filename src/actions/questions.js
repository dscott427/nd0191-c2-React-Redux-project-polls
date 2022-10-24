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

    const question_1 = await saveQuestion({
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
    dispatch(addQuestionAnswer(id, authedUser, answer));

  /*   return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(toggleTweet(info));
      alert("The was an error liking the tweet. Try again.");
    }); */
  };
}
