import React from 'react';
import './App.css';
import {layout1} from './board.js';

function Square(props){
  return(
  <div className={'square '+props.layout}>{props.layout}</div>
  );
}

function Column(props){
  return(
    <div className="column">
      {props.layout.map(square => (
        <Square layout={square} />
      ))}
    </div>
  );
}

//builds columns
function Board(props){
  return(
    <div className="board">
      {props.layout.map(column => (
        <Column layout={column} />
      ))}
    </div>
  );
}

//representation of board
//0 is empty placeable space
//1 is track
//board = [[0,0,0],[1,1,1],[2,2,2]]
//  translates to:
//  0 1 2
//  0 1 2
//  0 1 2

//loads board
function App() {
  return (
    <div className="App">
      <Board layout={layout1} />
    </div>
  );
}

export default App;
