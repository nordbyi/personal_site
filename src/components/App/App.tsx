import React, {useState} from "react";
import "./App.css";
import GameArea from "../GameArea/GameArea";

const App: React.FC = () => {
  const [win, setWin] = useState<boolean>(false);

  return (
    <div className="App">
      <GameArea />
    </div>
  );
};

export default App;
