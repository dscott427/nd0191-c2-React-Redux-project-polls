import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { useEffect} from "react";


const Logout = (props) => {
    
    const {dispatch} = props;

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setAuthedUser(null));
        navigate("/");
      }, []);
    
};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

export default connect(mapStateToProps)(Logout);