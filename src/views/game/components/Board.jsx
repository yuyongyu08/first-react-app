import { useState, useMemo } from "react";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const rows = 3;
  const columns = 3;

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }


  // 为什么写在这里，而不是handleClick中？
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const rowItems = useMemo(() => {
    return Array(rows)
      .fill(null)
      .map((row, i) => (
        <div className="board-row" key={i}>
          {Array(columns)
            .fill(null)
            .map((column, j) => {
              let index = i * columns + j;
              return <Square key={j} value={squares[index]} onSquareClick={() => handleClick(index)} />;
            })}
        </div>
      ));
  }, [squares]);

  return (
    <>
      <div className="status">{status}</div>
      {rowItems}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
