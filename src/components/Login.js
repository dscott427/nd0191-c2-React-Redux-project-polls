import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


const Login = (props) => {


return (
    <div>
        Leaderboard
    </div>
)};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

export default connect(mapStateToProps)(Login);