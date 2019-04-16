import React from 'react';
import { Board } from './board';

export class SudokuSolver extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.solver.solve();
  }

  render() {
    return (
      <div>
        <Board board={this.props.solver.board} />
      </div>
    )
  }
}

export class PojoSolver {
  constructor(board) {
    this.board = board;
    this.solvedStack = [];
    this.unsolvedStack = this.board.unfixedCells().reverse();
  }

  currentCell() {
    let idx = this.unsolvedStack.length - 1;
    return this.unsolvedStack[idx];
  }

  findValue(pos) {
    const [row, col] = pos;
    let temp = this.board.grid[row][col] + 1;
    while (temp < 10) {
      if (this.legalValue(pos, temp)) {
        this.board.updateTile(pos, temp);
        this.printRows();
        return true;
      } else {
        temp++;
      }
    } 
    return false;
  }

  backtrack() {
    if (this.findValue(this.currentBacktrackCell())) {
      return;
    } else {
      this.unsolvedStack.push(this.solvedStack.pop());
      this.printRows();
      this.board.updateTile(this.currentCell(), 0);
      this.printRows();
      return this.backtrack();
    }
  }

  currentBacktrackCell() {
    return this.solvedStack[this.solvedStack.length - 1];
  }

  solve() {
    while (!this.isSolved()) {
      if (this.findValue(this.currentCell())) {
        this.solvedStack.push(this.unsolvedStack.pop());
      } else {
        this.backtrack();
      }
    }
  }

  printRows() {
    this.board.grid.forEach(row => console.log(row.join(" ")));
    console.log("***");
  }

  legalValue(pos, val) {
    const bool = !this.board.rowOf(pos).includes(val) &&
      !this.board.columnOf(pos).includes(val) &&
        !this.board.squareOf(pos).includes(val);
    return bool;
  }

  segmentSolved(arr) {
    for (let i = 0; i < 9; i++) {
      for (let j = 1; j < 10; j++) {
        let count = 0;
        for (let k = 0; k < 9; k++) {
          if (arr[i][k] == j) count++;
        }
        if (count != 1) return false;
      }
    }
    return true;
  }

  isSolved() {
    if (this.segmentSolved(this.board.rows())) {
      if (this.segmentSolved(this.board.columns())) {
        if (this.segmentSolved(this.board.squares())) {
          return true;
        }
      }
    }
    return false;
  }
}