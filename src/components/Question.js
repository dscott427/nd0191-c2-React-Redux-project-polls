import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


const Question = (props) => {


return (
    <div>
        Question
    </div>
)};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

export default connect(mapStateToProps)(Question);

