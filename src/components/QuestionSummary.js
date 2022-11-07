import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";

const QuestionSummary = (props, ownProps) => {
  const border = '1px solid black';
  const question = props.questions[props.questionId];

  const navigate = useNavigate();

  const toQuestion = (e, id) => {
    e.preventDefault();

    navigate(`/question/${id}`);
  };

  console.log("avatarUrl: " + props.users[question.author].avatarUrl)


  return (
    <div className='center' style={{ border: border }}>
      <h3>{question.author}</h3>
      <img src={props.users[question.author].avatarURL} alt={`Avatar of ${question.author}`} className="avatar" />
      <h2>{formatDate(props.questions[props.questionId].timestamp)}</h2>
      <div>
        <button
          onClick={(e) => toQuestion(e, props.questionId)}
        >
          Show</button>
      </div>
    </div>
  )
};

const mapStateToProps = ({ questions, users }) => ({
  questions,
  users
});

export default connect(mapStateToProps)(QuestionSummary);