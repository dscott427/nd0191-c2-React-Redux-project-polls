import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import { useState } from "react";


const QuestionCreate = ({dispatch}) => {
    const navigate = useNavigate();
    const [textOne, setTextOne] = useState("");
    const [textTwo, setTextTwo] = useState("");

    const handleTextOneChange = (e) => {
        const text = e.target.value;

        setTextOne(text);
    };

    const handleTextTwoChange = (e) => {
        const text = e.target.value;

        setTextTwo(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const question = { textOne, textTwo };

        dispatch(handleAddQuestion(question));

        setTextOne("");
        setTextTwo("");

        navigate("/");
    }


    return (
        <div>
            <h3 className="center">New Poll</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    Option One
                </div>
                <input type="text"
                    placeholder="Option One"
                    id="optionOne"
                    value={textOne}
                    className="text"
                    maxLength={280}
                    onChange={handleTextOneChange}
                />
                <div>
                    Option Two
                </div>
                <input type="text"
                    placeholder="Option Two"
                    id="optionTwo"
                    value={textTwo}
                    className="text"
                    maxLength={280}
                    onChange={handleTextTwoChange}
                />
                <div>
                <button className="btn" type="submit" disabled={textOne === "" || textTwo === ""}>
                    Submit
                </button>
                </div>
            </form>
        </div>
    );
};

export default connect()(QuestionCreate);