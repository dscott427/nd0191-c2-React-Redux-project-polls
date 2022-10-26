import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";

const QuestionSummary = (props, ownProps) => {
  const border = '1px solid black';
  const question = props.questions[props.questionId];

  return (
    <div className='center' style={{ border: border }}>
      <h3>{question.author}</h3>
      <h2>{formatDate(props.questions[props.questionId].timestamp)}</h2>
      <button>Show</button>
    </div>
  )
};

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(QuestionSummary);