import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/questions";
import { handleAddUserAnswer } from "../actions/users";

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

    const handleChoice = (e, option) => {
        e.preventDefault();

        console.log("handleQuestionAnswer option: " + option)

        const { dispatch, tweet, authedUser } = props;

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
            ).then(
                navigate('/')
            ));


    };

    const border = '1px solid black';

    const userAnswer = props.users[props.authedUser].answers[props.question.id] ?? props.users[props.authedUser].answers[props.question.id];

    let optionOneColor = "lightgray";
    let optionTwoColor = "lightgray";

    if (userAnswer) {
        optionOneColor = userAnswer === "optionOne" ? "green" : "white";
        optionTwoColor = userAnswer === "optionTwo" ? "green" : "white";
    }

    console.log("userAnswer: " + userAnswer);

    return (
        <div className='center' style={{ border: border }}>
            <h2> Poll by {props.question.author} </h2>
            <h2> Would you rather?</h2>
            <div className="buttons">
                <div className="action_btn">
                    <button style={{ backgroundColor: optionOneColor }} name="submit" className="action_btn" type="submit" value="optionOne" onClick={(e) => handleChoice(e, "optionOne")}>
                        {props.question.optionOne.text}</button>
                    <button style={{ backgroundColor: optionTwoColor }} name="submit" className="action_btn" type="submit" value="optionTwo" onClick={(e) => handleChoice(e, "optionTwo")}>
                        {props.question.optionTwo.text}</button>
                </div>

            </div>
        </div>
    )
};

const mapStateToProps = ({ questions, authedUser, users }, props) => {
    const { id } = props.router.params;
    const question = questions[id];
    console.log("id: " + id)


    return {
        question: question,
        id,
        authedUser: authedUser,
        users
    };
};

export default withRouter(connect(mapStateToProps)(Question));

