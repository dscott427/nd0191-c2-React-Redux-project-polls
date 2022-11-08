import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const RequireAuth = (props, ownProps) => {

  const location = useLocation();

  if (!props.authedUser) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }

  return props.children;
  
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
  work: "123"
});

export default connect(mapStateToProps)(RequireAuth)