import { connect } from "react-redux";
import Questions from "./Questions";

const Dashboard = (props) => {
  return (
    <div>
      <Questions/>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);