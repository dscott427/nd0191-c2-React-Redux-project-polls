import { saveQuestion, saveQuestionAnswer, getState } from "../utils/api";
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

    return saveQuestion({
      optionOneText: question.textOne,
      optionTwoText: question.textTwo,
      author: authedUser,
    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestionAnswer({ qid, authedUser, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    id: qid,
    authedUser,
    answer,
  };
}



export function handleAddQuestionAnswer(question) {

  console.log("handleAddQuestionAnswer Action");
  return async (dispatch,getState) => {
    const { authedUser } = getState();

    let questionAnswer = {
      qid: question.id,
      authedUser: question.authedUser,
      answer: question.option,
    }

    return await saveQuestionAnswer({
      qid: question.id,
      authedUser: question.authedUser,
      answer: question.option,
    })
      .then(() => dispatch(addQuestionAnswer(questionAnswer)))
      .then(() => dispatch(hideLoading()))
      .then(console.log("handleAddQuestionAnswer Action Dispatch"))
      .catch("Error");
  };
}