import React from 'react';
import Tile from './tile';
export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.configureGrid(this.props.board.startString),
      ogGrid: this.configureGrid(this.props.board.startString)
    };
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
  updateTile(pos, val) {
    const [row, col] = pos;
    const newGrid = this.state.grid;
    newGrid[row][col] = val;
    return this.setState({
      grid: newGrid
    });
  }


  render() {
    const uls = this.state.grid.map((row, i) => {
      return <ul key={i} className="grid-row">{row.map((el, idx) => {
        return <Tile value={el} idx={idx * (i + 1)}/>;
      })
      }</ul>;
    });
    return (
      <div>
        {uls}
      </div>
    )
  }
}


export class PojoBoard {
  constructor(startString) {
    this.grid = this.configureGrid(startString);
    debugger
    this.ogGrid = this.configureGrid(startString);
    this.startString = startString;
    debugger
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
    const columns = Array.from(this.grid, () => new Array(9));
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        columns[j][i] = this.grid[i][j];
      }
    }
    return columns;
  }

  rows() {
    return this.grid;
  }

  squares() {
    const squares = Array.from(this.grid, () => []);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (j < 3) {
          if (i < 3) {
            squares[0].push(this.grid[i][j]);
          } else if (i < 6) {
            squares[3].push(this.grid[i][j]);
          } else {
            squares[6].push(this.grid[i][j]);
          };
        } else if (j < 6) {
          if (i < 3) {
            squares[1].push(this.grid[i][j]);
          } else if (i < 6) {
            squares[4].push(this.grid[i][j]);
          } else {
            squares[7].push(this.grid[i][j]);
          };
        } else {
          if (i < 3) {
            squares[2].push(this.grid[i][j]);
          } else if (i < 6) {
            squares[5].push(this.grid[i][j]);
          } else {
            squares[8].push(this.grid[i][j]);
          };
        }
      }
    }
    return squares;
  }

  rowOf(pos) {
    return this.rows()[pos[0]];
  }

  columnOf(pos) {
    return this.columns()[pos[1]];
  }

  squareOf(pos) {
    const [i,j] = pos;
    let squares = this.squares();
    let square;
    if (j < 3) {
      if (i < 3) {
        square = squares[0];
      } else if (i < 6) {
        square = squares[3];
      } else {
        square = squares[6];
      };
    } else if (j < 6) {
      if (i < 3) {
        square = squares[1];
      } else if (i < 6) {
        square = squares[4];
      } else {
        square = squares[7];
      };
    } else {
      if (i < 3) {
        square = squares[2];
      } else if (i < 6) {
        square = squares[5];
      } else {
        square = squares[8];
      };
    }
    return square;
  }

  fixedCells() {
    let fixed = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.ogGrid[i][j] > 0) {
          fixed.push([i, j]);
        }
      }
    }
    return fixed;
  }

  unfixedCells() {
    const cells = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.ogGrid[i][j] === 0) {
          cells.push([i,j]);
        } 
      }
    }
    return cells;
  }

  updateTile(pos, val) {
    debugger
    const [row, col] = pos;
    this.grid[row][col] = val;
  }
}
