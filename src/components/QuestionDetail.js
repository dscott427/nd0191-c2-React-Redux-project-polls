import { connect } from "react-redux";

const QuestionDetail = (props) => {

return (
    <div>
        Question Detail
    </div>
)};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
  });

export default connect(mapStateToProps)(QuestionDetail);