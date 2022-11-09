import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Questions = (props) => {

    const location = useLocation();

    const [questionStatus, setQuestionStatus] = useState("All");

    const authedUser = props.authedUser;
    const questionKeys = Object.keys(props.questions);
    const doneKeys = Object.keys(props.users[authedUser].answers);
    const newKeys = questionKeys.filter(q => !doneKeys.includes(q));

    const border = '1px solid black';



    const handleTextUserChange = (e) => {
        setQuestionStatus(e.target.value);
    };

    const handleFilterClear = () => {
        setQuestionStatus("");
    };

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
            <div>
                Filter:
                <input onClick={handleTextUserChange} type="radio" id="new" name="fav_language" value="New" />
                <label htmlFor="new">New</label>
                <input onClick={handleTextUserChange} type="radio" id="done" name="fav_language" value="Done" />
                <label htmlFor="done">Done</label>
                <span style={questionStatus !== "All" ? null : { display: "none" }}>
                    <input onClick={handleTextUserChange} type="radio" id="all" name="fav_language" value="All" />
                    <label htmlFor="all">All</label>
                </span>
            </div>

            <span style={questionStatus === "New" || questionStatus === "All" ? null : { display: "none" }}>
                <div className='center'>
                    <h3 className="center">New Questions</h3>
                    {newQuestions.map((question) => (
                        <QuestionSummary key={question.id} questionId={question.id} question={props.questions[question.id]} />
                    ))}
                </div>
            </span>
            <span style={questionStatus === "Done" || questionStatus === "All" ? null : { display: "none" }}>
                <div className='center'>
                    <h3 className="center">Done</h3>
                    {doneQuestions.map((question) => (
                        <QuestionSummary key={question.id} questionId={question.id} question={props.questions[question.id]} />
                    ))}
                </div>
            </span>
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