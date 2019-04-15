import React from 'react';
import { Board } from './board';

class SudokuSolver extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.board.squareOf([5,6]));
    return (
      <div>
        <Board board={this.props.board} />
      </div>
    )
  }
}

export default SudokuSolver;