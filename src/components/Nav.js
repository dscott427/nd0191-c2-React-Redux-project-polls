import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Nav = (props) => {

  const { dispatch, authedUser, users } = props;

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    if (authedUser !== null) {
      dispatch(setAuthedUser(null));
      navigate("/");
    }
  }

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link style={authedUser === null ? { pointerEvents: "none" } : null} to="/">Home</Link>
        </li>
        <li>
          <Link style={authedUser === null ? { pointerEvents: "none" } : null} to="/leaderboard">Leaderboard</Link>
        </li>

        <li>
          <Link style={authedUser === null ? { pointerEvents: "none" } : null} to="/question/new">New</Link>
        </li>
        <li>
          <Link onClick={handleLogout} to="/">{props.authedUser === null ? 'Login' : 'Logout'}
          </Link>
        </li>
        <li>
          <img src={props.users && authedUser ? props.users[authedUser].avatarURL : ""} alt="" className="avatarsmall" />
          {authedUser}
        </li>

      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  // loading: authedUser === null,
  authedUser,
  users
});

export default connect(mapStateToProps)(Nav);

