import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";

const Questions = (props) => {

    const authedUser = props.authedUser;
    const questionKeys = Object.keys(props.questions);
    const doneKeys = Object.keys(props.users[authedUser].answers);
    const newKeys = questionKeys.filter(q => !doneKeys.includes(q));

    const border = '1px solid black';

    const newQuestions = newKeys.map(key => {
        return {
            id: key,
            timestamp: props.questions[key].timestamp,
        }
    });

    const doneQuestions = doneKeys.map(key => {
        return {
            id: key,
            timestamp: props.questions[key].timestamp,
        }
    });

    newQuestions.sort(function (b, a) { return a.timestamp - b.timestamp });

    doneQuestions.sort(function (b, a) { return a.timestamp - b.timestamp });

    return (
        <div>
            <div className='center'>
                <h3 className="center">New Questions</h3>
                {newQuestions.map((question) => (
                    <QuestionSummary key={question.id} questionId={question.id} question={props.questions[question.id]} />
                ))}
            </div>
            <div className='center'>
                <h3 className="center">Done</h3>
                {doneQuestions.map((question) => (
                    <QuestionSummary key={question.id} questionId={question.id} question={props.questions[question.id]} />
                ))}
            </div>
        </div >
    )
};

const mapStateToProps = ({ authedUser, users, questions }) => {

    return {
        authedUser,
        users,
        questions,
    };
};

export default connect(mapStateToProps)(Questions);