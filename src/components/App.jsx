import React, { useState } from "react";
import Color from "./Color";

function App() {
  const [colorChoices, updateColorChoices] = useState([]);
  const numberOfGuesses = 3; //Number of Button Guesses

  for (let i = 0; i < numberOfGuesses; i++) {
    //Generate Random Hex Colors and fill colorChoices array
    colorChoices.push(Math.floor(Math.random() * 16777215).toString(16));
  }

  return (
    <div className="App">
      <div className="container">
        <h1>{colorChoices[0]} {colorChoices[1]} {colorChoices[2]}</h1>
        <div className="colorArea"></div>
      </div>
    </div >
  );
}

export default App