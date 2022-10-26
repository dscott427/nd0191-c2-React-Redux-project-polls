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


  return (
    <div className='center' style={{ border: border }}>
      <h3>{question.author}</h3>
      <h2>{formatDate(props.questions[props.questionId].timestamp)}</h2>
      <Link to={`/question/${props.questionId}`}>Question Link</Link>
      <button
      onClick={(e) => toQuestion(e, props.questionId)}
      >
        Show</button>
    </div>
  )
};

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(QuestionSummary);