import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Login = (props) => {

    let navigate = useNavigate();

    const { state } = useLocation();

    const { dispatch, users } = props;

    const [textUser, setTextUser] = useState("");
    const [textPassword, setTextPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleTextUserChange = (e) => {
        const text = e.target.value;
        setTextUser(text);
    };

    const handleTextPasswordChange = (e) => {
        const text = e.target.value;

        setTextPassword(text);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (users[textUser] && users[textUser].password === textPassword) {
            
            dispatch(setAuthedUser(textUser));

            navigate(state?.path || "/dashboard");

        }
        else{
            setErrorMessage("Invalid User or Password");
        }

        setTextUser("");
        setTextPassword("");

    }


    return (
        <div data-testid="login-component">
            <h3 className="center">Log In</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    User
                </div>
                <input data-testid="login-user-name" type="text"
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
                <input data-testid="login-password" type="text"
                    placeholder="Password"
                    id="optionTwo"
                    value={textPassword}
                    className="text"
                    maxLength={280}
                    onChange={handleTextPasswordChange}
                />
                <div>
                    <button data-testid="login-submit-button" className="btn" type="submit" disabled={textUser === "" || textPassword === ""}>
                        Submit
                    </button>
                </div>
                <div>
                   {errorMessage}
                </div>
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