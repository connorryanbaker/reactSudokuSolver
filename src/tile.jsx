import React from 'react';
const Tile = (props) => {
  return (
    <li className="grid-cell" key={props.key}>
      {props.value}
    </li>
  )
}

export default Tile;