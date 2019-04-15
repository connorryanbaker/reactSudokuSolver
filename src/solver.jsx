import React from 'react';
import { Board } from './board';

export class SudokuSolver extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.solver.findAllValues());
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
  }

  findValue(pos) {
    const [row, col] = pos;
    let value = this.board.grid[row][col];
    const allValues = this.board.squareOf(pos).concat(this.board.rowOf(pos)).concat(this.board.columnOf(pos));
    const takenValues = allValues.filter(v => v !== value && v > 0);
    const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(v => {
      return takenValues.indexOf(v) === -1;
    });
    return possibleValues;
  }

  findAllValues() {
    const map = {}
    this.board.unfixedCells().forEach((pos) => {
      map[pos] = this.findValue(pos);
    });
    return map;
  }

  segmentSolved(arr) {
    for (let i = 0; i < 9; i++) {
      let sorted = arr[i].sort((a, b) => a - b);
      for (let j = 0; j < 9; j++) {
        if (sorted[j] !== j + 1) {
          return false;
        }
      }

    }
    return true;
  }

  isSolved() {
    if (this.segmentSolved(this.board.rows())) {
      if (this.segmentSolved(this.board.columns())) {
        return this.segmentSolved(this.board.squares());
      }
    }
    return false;
  }
}