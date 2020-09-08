import React from 'react';
import './App.css';
import {layout1} from './board.js';
import {towers} from './towers.js';

// ---------- Background Functions ----------
function Square(props){
  return(
  <button className={'square '+props.layout}>{props.layout}</button>
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

function Board(props){

  return(
    <div className="board">
      {props.layout.map(column => (
        <Column layout={column} />
      ))}
    </div>
  );
}


// ---------- Store Functions ----------
function StoreItem(props){
  return(
    <button className="storeItem">
      <p><b>{props.info[1]}</b></p>
      <p>Range: {props.info[2]}</p>
      <p>DPS: {props.info[3]}</p>
    </button>
  );
}

function Store(props){
  return(
    <div className="store">
      <h2>Store</h2>
      {props.towerList.map(tower => (
        <StoreItem info={tower} />
      ))}
    </div>
  );
}

// ---------- Enemy Control / Generation Functions ----------


// ---------- Main Container ----------
class App extends React.Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app">
        <Board layout={layout1} />
        <Store towerList={towers}/>
      </div>
    );
  }
}

export default App;
