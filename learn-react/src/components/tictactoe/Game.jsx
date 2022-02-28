import React from "react";
import Board from "./Board";
import "./style.css";

const Game = () => {
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board></Board>
    </div>
  );
};

export default Game;
