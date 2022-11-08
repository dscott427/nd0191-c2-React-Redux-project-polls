import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js'
import '@testing-library/jest-dom/extend-expect';


describe('questions', () => {
  it('Add new question and return formatted data', async () => {
    var result = await _saveQuestion(
      {
        optionOneText: "optionone",
        optionTwoText: "optiontwo",
        author: "tylermcginnis"

      });
    expect(result.author).toEqual("tylermcginnis");
    expect(result.id).toBeDefined();
  });

  it('Add new question answer and verify', async () => {
    var result = await _saveQuestionAnswer(
      {
        qid: "xj352vofupe1dqz9emx13r",
        answer: "optionTwo",
        authedUser: "tylermcginnis"

      });
    expect(result).toEqual(true);
  });


  it("Add question fails for missing data", async () => {

    expect.assertions(1)

    let response = null;
    let error = null;
    let getBadResults = async () => {
      try {
        await _saveQuestion(
          {
            optionOneText: "optionone",
            optionTwoText: "optiontwo",

          })
      }
      catch (exception) {
        error = exception;
        expect(error).toEqual("Please provide optionOneText, optionTwoText, and author");
      }
    }

    getBadResults();

  })

  it("Add question fails for missing data", async () => {

    expect.assertions(1)

    let response = null;
    let error = null;
    let getBadResults = async () => {
      try {
        await _saveQuestionAnswer(
          {
            qid: "xj352vofupe1dqz9emx13r",
            answer: "optionTwo",
          })
      }
      catch (exception) {
        error = exception;
        expect(error).toEqual("Please provide authedUser, qid, and answer");
      }
    }

    getBadResults();

  })

});