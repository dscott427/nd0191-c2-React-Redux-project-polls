import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import Question from "./Question";
import QuestionCreate from "./QuestionCreate";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Nav from "./Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import { useNavigate, Link } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/login"
              element={
                <Login />
              }
            />
            <Route path="/add"
              element={
                <RequireAuth>
                  <QuestionCreate />
                </RequireAuth>
              }
            />
            <Route path="/answer"
              element={
                <RequireAuth>
                  <Question />
                </RequireAuth>
              }
            />
            <Route path="/questions/:id"
              element={
                <RequireAuth>
                  <Question />
                </RequireAuth>
              }
            />
            <Route path="/leaderboard"
              element={
                <RequireAuth>
                  <Leaderboard />
                </RequireAuth>
              }
            />
            <Route path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/logout" onClick="handleLogout"
            />
            <Route path='*'
              element={
                <RequireAuth>
                  <NotFound />
                </RequireAuth>
              } />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(App);
