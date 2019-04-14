import React from 'react';
import Tile from './tile';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.configureGrid(this.props.startString)
    };
    this.configureGrid = this.configureGrid.bind(this);
    this.rows = this.rows.bind(this);
    this.columns = this.columns.bind(this);
    this.squares = this.squares.bind(this);
  }

  configureGrid(str) {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      let idx = i * 9;
      grid.push(str.slice(idx, idx + 9).split(""));
    }
    return grid.map(row => {
      return row.map(el => {
        return parseInt(el);
      });
    });
  }

  columns() {
    const columns = Array.from(this.state.grid, () => new Array(9));
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        columns[j][i] = this.state.grid[i][j];
      }
    }
    return columns;
  }

  rows() {
    return this.state.grid;
  }

  squares() {
    const squares = Array.from(this.state.grid, () => []);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (j < 3) {
          if (i < 3) {
            squares[0].push(this.state.grid[i][j]);
          } else if (i < 6) {
            squares[3].push(this.state.grid[i][j]);
          } else {
            squares[6].push(this.state.grid[i][j]);
          };
        } else if (j < 6) {
          if (i < 3) {
            squares[1].push(this.state.grid[i][j]);
          } else if (i < 6) {
            squares[4].push(this.state.grid[i][j]);
          } else {
            squares[7].push(this.state.grid[i][j]);
          };
        } else {
          if (i < 3) {
            squares[2].push(this.state.grid[i][j]);
          } else if (i < 6) {
            squares[5].push(this.state.grid[i][j]);
          } else {
            squares[8].push(this.state.grid[i][j]);
          };
        }
      }
    }
    return squares;
  }

  render() {
    console.log(this.columns());
    const uls = this.state.grid.map((row, i) => {
      return <ul className="grid-row">{row.map((el, idx) => <Tile value={el} key={idx * (i + 1)}/>)}</ul>;
    });
    return (
      <div>
        {uls}
      </div>
    )
  }
}

export default Board;