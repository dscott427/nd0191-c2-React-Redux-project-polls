import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
          [action.question.id]: action.question,        
      };
    case ADD_QUESTION_ANSWER:

      console.log("ADD_QUESTION_ANSWER Reducer");

      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes:
              !state[action.id][action.answer].votes.includes(action.authedUser)
                ? state[action.id][action.answer].votes.concat(action.authedUser)
                : state[action.id][action.answer].votes
          }
        }
      };
    default:
      return state;
  }
}
