import React from "react";
import Board from "./Board";
import "./App.css";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <h1 className="heading">TIC TAC TOE</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
