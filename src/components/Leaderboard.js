import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


const Leaderboard = (props) => {

    const userKeys = Object.keys(props.users);

    const users = userKeys.map(key => {
        return {
            fullName: props.users[key].name,
            userName: key,
            answers: Object.keys(props.users[key].answers).length,
            created: Object.keys(props.users[key].questions).length
        }
    });

    return (
        <div>
            <table>
                <tbody>
                    <tr key="123">
                        <th>Name</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                    {users.map((user) => {
                        return (
                            <tr key={user.userName}>
                                <td>
                                    <div>
                                        {user.fullName}
                                    </div>
                                    <div>
                                        {user.userName}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {user.answers}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {user.created}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
    loading: authedUser === null,
    questions,
    users
});

export default connect(mapStateToProps)(Leaderboard);