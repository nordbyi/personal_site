import React from "react";
import Typing from "../Typing/Typing";
import GameTimer from "../GameTimer/GameTimer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Typing />
      <GameTimer />
    </div>
  );
};

export default App;
