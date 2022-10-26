import { connect } from "react-redux";
import { useEffect } from "react";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";
import QuestionSummary from "./QuestionSummary";

const Questions = (props) => {

    const authedUser = props.authedUser;
    const questionKeys = Object.keys(props.questions);
    const answerKeys = Object.keys(props.users[authedUser].answers);
    const doneKeys = questionKeys.filter(q => !answerKeys.includes(q));

    const border = '1px solid black';

    return (
        <div>
            <div className='center'>
                <h3 className="center">New Questions</h3>
                {answerKeys.map((key) => (
                    <QuestionSummary key={key} questionId={key} question={props.questions[key]} />
                ))}               
            </div>
            <div className='center'>
                <h3 className="center">Done</h3>
                {doneKeys.map((key) => (
                    <QuestionSummary key={key} questionId={key} question={props.questions[key]} />
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