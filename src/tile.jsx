import React from 'react';
const Tile = (props) => {
  return (
    <li className={`grid-cell ${props.klass}`} key={props.idx}>
      {props.value}
    </li>
  )
}

export default Tile;