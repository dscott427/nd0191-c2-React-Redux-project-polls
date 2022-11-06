import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { useState, useEffect } from "react";


const Login = (props) => {

    let navigate = useNavigate();

    const { dispatch, authedUser } = props;

    useEffect(() => {
        if(authedUser !== null)
        {
            navigate("/dashboard");
        }
      }, []);
    
    const [textUser, setTextUser] = useState("");
    const [textPassword, setTextPassword] = useState("");

    const handleTextUserChange = (e) => {
        const text = e.target.value;

        setTextUser(text);
    };

    const handleTextPasswordChange = (e) => {
        const text = e.target.value;

        setTextPassword(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const question = { textUser, textPassword };

        dispatch(setAuthedUser(textUser));

        setTextUser("");
        setTextPassword("");

        navigate("/dashboard");

    }


    return (
        <div>
            <h3 className="center">Log In</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    User
                </div>
                <input type="text"
                    placeholder="User"
                    id="optionOne"
                    value={textUser}
                    className="text"
                    maxLength={280}
                    onChange={handleTextUserChange}
                />
                <div>
                    Password
                </div>
                <input type="text"
                    placeholder="Password"
                    id="optionTwo"
                    value={textPassword}
                    className="text"
                    maxLength={280}
                    onChange={handleTextPasswordChange}
                />
                <button className="btn" type="submit" disabled={textUser === "" || textPassword === ""}>
                    Submit
                </button>
            </form>
        </div>
    );
};


const mapStateToProps = ({ authedUser, users }) => ({
 //   loading: authedUser === null,
    users,
    authedUser
});

export default connect(mapStateToProps)(Login);