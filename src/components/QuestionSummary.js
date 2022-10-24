import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


const QuestionSummary = (props) => {


return (
    <div>
        Question Summary
    </div>
)};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

export default connect(mapStateToProps)(QuestionSummary);