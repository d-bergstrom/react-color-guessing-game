/* 
Sources Used:
    - Generate Random Color: https://css-tricks.com/snippets/javascript/random-hex-color/
*/

import React, { useState } from "react";
import Choices from "./Choices";


const Color = () => {

  //State used for all color choices
  const [colorChoices, setColorChoices] = useState(fillColorChoices);
  console.log("Color Choices: ", colorChoices);

  //Pick a random color from the colorChoices state as the answer
  const answer = colorChoices[Math.floor(Math.random() * 3)];
  console.log("Answer: ", answer);

  //Object used for inline styling display of the color answer
  const colorArea = {
    backgroundColor: `${answer}`,
    width: "500px",
    height: "400px",
  };

  //Function used to generate random hex colors
  function fillColorChoices() {
    const numberOfGuesses = 3; //Number of Button Guesses
    const generatedColors = [];
    for (let i = 0; i < numberOfGuesses; i++) {
      generatedColors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    return generatedColors;
  }

  //Create Child Elements based off how many colorChoices there are
  const buttonElements = colorChoices.map((color, index) => (
    <Choices key={index} id={index} color={color} answer={answer} checkAnswer={checkAnswer} />
  ));

  //Function to check if selected answer is correct
  function checkAnswer(selectedColor) {
    //Check if the clicked button matches the answer
    selectedColor === answer ? alert("CORRECT") : alert("WRONG WRONG WRONG");
    setColorChoices(fillColorChoices());
  }

  return (
    <div>
      {/*Color Box Area*/}
      <div className="colorArea" style={colorArea}></div>
      {/* Buttons */}
      <div className="buttonArea">{buttonElements}</div>

    </div>
  );
}

export default Color;