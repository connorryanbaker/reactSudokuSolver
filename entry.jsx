import React from 'react';
import ReactDOM from 'react-dom';
import { PojoBoard, Board } from './src/board';
import { SudokuSolver, PojoSolver } from './src/solver';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const str = "040000179002008054006005008080070910050090030019060040300400700570100200928000060";
  const board = new PojoBoard(str);
  const solver = new PojoSolver(board);
  ReactDOM.render(<SudokuSolver solver={solver} />, root);
});