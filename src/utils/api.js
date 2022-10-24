import {
  _getUsers,
  _get_getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    tweets,
  }))
}

export function _saveQuestion (info) {
  return _saveQuestion(info)
}

export function _saveQuestionAnser (info) {
  return _saveQuestionAnswer(info)
}