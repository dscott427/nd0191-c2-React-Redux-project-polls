import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import Question from "./Question";
import QuestionCreate from "./QuestionCreate";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Logout from "./Logout";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);



  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/question/new" element={<QuestionCreate />} />
            <Route path="/question/answer" element={<Question />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route 
            path="/logout" onClick="handleLogout" />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
 // loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
