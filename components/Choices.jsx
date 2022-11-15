import React from "react";

const Choices = (props) => {
    return (
        <button
            className="choiceButton"
            onClick={() => props.checkAnswer(props.color)}
        > {props.color}</button>
    )
}

export default Choices;