import { connect } from "react-redux";
import { useEffect } from "react";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


const Questions = (props) => {

    const authedUser = props.authedUser;
    const questionKeys = Object.keys(props.questions);
    const answerKeys = Object.keys(props.users[authedUser].answers);
    const doneKeys = questionKeys.filter(q => !answerKeys.includes(q));


    return (
        <div>
            <div>
                <h3 className="center">New Questions</h3>
                <ul>
                    {doneKeys.map((key) => (
                        <li key={key}>
                            {key}
                        </li>
                    ))}

                </ul>
            </div>
            <div>
                <h3 className="center">Done</h3>
                <ul>
                    {answerKeys.map((key) => (
                        <li key={key}>
                            {key}
                        </li>
                    ))}

                </ul>
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