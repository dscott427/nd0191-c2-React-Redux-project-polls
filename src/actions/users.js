export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_POLL = "ADD_USER_POLL";


export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserPoll(users) {
  return {
    type: ADD_USER_POLL,
    users,
  };
}

export function addUserAnswer({ id, authedUser, answer }) {
  return {
    type: ADD_USER_ANSWER,
    id,
    authedUser,
    answer,
  };
}

export function handleAddUserAnswer(question) {

  console.log("handleAddUserAnswer Action");
  return async (dispatch,getState) => {
    const { authedUser } = getState();

    let userAnswer = {
      id: question.id,
      authedUser: question.authedUser,
      answer: question.option,
    }

    dispatch(addUserAnswer(userAnswer));
  }
}
