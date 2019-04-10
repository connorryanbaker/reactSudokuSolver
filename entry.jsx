import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './src/tile';
import Board from './src/board';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const str = "040000179002008054006005008080070910050090030019060040300400700570100200928000060";
  ReactDOM.render(<Board startString={str}/>, root);
});