import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_POLL } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_POLL:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions:
            !state[action.authedUser].questions.includes(action.id)
              ? state[action.author].questions.concat(action.id)
              : state[action.author].questions
        },
      };
    case ADD_USER_ANSWER:

      console.log("ADD_USER_ANSWER Reducer");

      let userAnswer = {
        [action.qid]: action.answer,
      }

      console.log("User Answer" + state[action.authedUser].answers.toString());

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
