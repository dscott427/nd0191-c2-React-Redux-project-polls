import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/questions";
import { handleAddUserAnswer } from "../actions/users";
import { useState, useEffect } from "react";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const Question = (props) => {

    let navigate = useNavigate();

    useEffect(() => {

    }, []);

    const { dispatch, question, authedUser, users } = props;

    const handleChoice = (e, option) => {
        e.preventDefault();

        if(userAnswer)
        {
            return;
        }

        console.log("handleQuestionAnswer option: " + option)



        dispatch(
            handleAddQuestionAnswer({
                id: props.question.id,
                authedUser,
                option
            })

        ).then(

            dispatch(
                handleAddUserAnswer({
                    id: props.question.id,
                    authedUser,
                    option
                })
            )
        );


    };

    const border = '1px solid black';

    const userAnswer = props.users[props.authedUser].answers[props.question.id] ?? props.users[props.authedUser].answers[props.question.id];

    let optionOneColor = "lightgray";
    let optionTwoColor = "lightgray";

    if (userAnswer) {
        optionOneColor = userAnswer === "optionOne" ? "lightgreen" : "white";
        optionTwoColor = userAnswer === "optionTwo" ? "lightgreen" : "white";
    }

    const optionOneVoteCount = question.optionOne.votes.length;
    const optionTwoVoteCount = question.optionTwo.votes.length;
    const totalVotes = optionOneVoteCount + optionTwoVoteCount;

    let optionOneVotePercent = 0;
    let optionTwoVotePercent = 0;

    if (totalVotes > 0) {
        optionOneVotePercent = optionOneVoteCount !== 0 ? (optionOneVoteCount / totalVotes) * 100 : 0;
        optionTwoVotePercent = optionTwoVoteCount !== 0 ? (optionTwoVoteCount / totalVotes) * 100 : 0;
    }

    return (
        <div className='center' style={{ border: border }}>
            <h2> Poll by {question.author} </h2>
            <img src={users[question.author].avatarURL} alt={`Avatar of ${question.author}`} className="avatar" />
            <h2> Would you rather?</h2>
            <div className="buttons">
                <div >
                    <div className="action_btn" style={authedUser === null ? { pointerEvents: "none" } : null}>
                        <button style={{ backgroundColor: optionOneColor }} name="submit" className="action_btn" type="submit" value="optionOne" onClick={(e) => handleChoice(e, "optionOne")}>
                            <h2>{userAnswer && userAnswer === "optionOne" ? "✓ " : ""} {props.question.optionOne.text} </h2>
                            <span style={userAnswer ? null : { display: "none" } }>
                            <div display="none" style={{ padding: 10 }}>
                                <div>
                                    Votes: {optionOneVoteCount}
                                </div>
                                <div>
                                    {optionOneVotePercent}%
                                </div>
                            </div>
                            </span>
                        </button>

                    </div>

                </div>
                <div>
                    <div className="action_btn" style={authedUser === null ? { pointerEvents: "none" } : null}>
                        <button style={{ backgroundColor: optionTwoColor }} name="submit" className="action_btn" type="submit" value="optionTwo" onClick={(e) => handleChoice(e, "optionTwo")}>
                            <h2>{userAnswer && userAnswer === "optionTwo" ? "✓ " : ""} {props.question.optionTwo.text} </h2>
                            <span style={userAnswer ? null : { display: "none" } }>
                            <div display="none" style={{ padding: 10 }}>
                                <div>
                                    Votes: {optionTwoVoteCount}
                                </div>
                                <div>
                                    {optionTwoVotePercent}%
                                </div>
                            </div>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div >
    )
};

const mapStateToProps = ({ questions, authedUser, users }, props) => {
    const { id } = props.router.params;
    const question = questions[id];
    console.log("id: " + id)


    return {
        question: questions[id],
        id,
        authedUser: authedUser,
        users
    };
};

export default withRouter(connect(mapStateToProps)(Question));

