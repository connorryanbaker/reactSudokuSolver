import React from 'react';
import Tile from './tile';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.configureGrid(this.props.startString)
    };
    this.configureGrid = this.configureGrid.bind(this);
  }

  configureGrid(str) {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      let idx = i * 9;
      grid.push(str.slice(idx, idx + 9).split(""));
    }
    return grid.map(row => {
      return row.map(el => {
        return <Tile value={el} />
      });
    });
  }

  render() {
    const uls = this.state.grid.map(row => {
      return <ul className="grid-row">{row}</ul>;
    });
    return (
      <div>
        {uls}
      </div>
    )
  }
}

export default Board;