import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const RequireAuth = (props, ownProps) => {

  const location = useLocation();

  console.log("RequireAuth authedUser: " + props.authedUser);
  console.log("RequireAuth location: " + location.pathname);

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