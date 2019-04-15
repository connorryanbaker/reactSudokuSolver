import React from 'react';
import Board from './board';

class SudokuSolver extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.board}
      </div>
    )
  }
}

export default SudokuSolver;