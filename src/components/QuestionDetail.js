import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


const QuestionDetail = (props) => {


return (
    <div>
        Question Detail
    </div>
)};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

export default connect(mapStateToProps)(QuestionDetail);