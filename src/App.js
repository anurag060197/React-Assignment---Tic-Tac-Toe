import React, { useState } from "react";
import "./App.css";
import GridRow from "./GridRow";

function App() {
  const [gameState, setGameState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [gameState1D, setGameState1D] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setTurn] = useState("X");
  const winningCondition = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ])[0];
  const [active, setActive] = useState(true);

  const handleClick = (rowIndex, colIndex) => {
    let copyGameState = [...gameState];
    if (copyGameState[rowIndex][colIndex] === "" && active) {
      copyGameState[rowIndex][colIndex] = turn;
      setGameState(copyGameState);

      let copyGameState1D = [...gameState1D];
      copyGameState1D[rowIndex * 3 + colIndex] = turn;
      setGameState1D(copyGameState1D);

      turn == "X" ? setTurn("0") : setTurn("X");

      for (let j = 0; j < winningCondition.length; j++) {
        let flag = true;
        let arr = winningCondition[j];
        for (let i = 0; i < arr.length; i++) {
          if (copyGameState1D[arr[i]] != turn) {
            flag = false;
          }
        }
        if (flag) {
          let msg =
            turn === "X"
              ? "congratulation ! player 1 wins"
              : "congratulation ! player 2 wins";
          alert(msg);
          setActive(false);
          break;
        }
      }
      if (copyGameState1D.indexOf('') === copyGameState1D.lastIndexOf('')) {
        alert("Match Draw");
        setActive(false);
      }
    }
  };

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      {gameState.map((row, rowIndex) => (
        <GridRow
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          turn={turn}
          handleClick={handleClick}
        />
      ))}
      ;
      <div id="turn">Turn : {turn}</div>
    </div>
  );
}

export default App;
