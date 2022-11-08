import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js'

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

  it("Add question fails foe missing data", async () => {

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

});