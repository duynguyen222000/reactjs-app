import React from "react";
import { calculateWinner } from "../../helpers";
import Cells from "./Cell";

const Board = () => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calculateWinner(cells));
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="game__board">
      {Array(9)
        .fill(null)
        .map((cell, index) => (
          <Cells key={index} onClick={handleClick} value="TRANG NGU"></Cells>
        ))}
    </div>
  );
};

export default Board;
