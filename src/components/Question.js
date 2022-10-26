import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};


const Question = (props) => {


return (
    <div>
        Question id : {props.id}
    </div>
)};

const mapStateToProps = ({ questions }, props) => {
    const { id } = props.router.params;
    const question = questions[id];
    console.log("id: " + id)

  
    return {
      question : question,
      id,    
    };
  };

export default withRouter(connect(mapStateToProps)(Question));

