import { useState } from 'react';
import './App.css';

function Square({ input, onSquareClick }){
  return <button className='square' onClick={onSquareClick}>{ input }</button>
}

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(index){
    const newSquares = squares.slice();
    newSquares[index] = 'X';
    setSquares(newSquares);
  }
  return <>
      <div className='board-row'>
        <Square input={squares[0]} onSquareClick={()=>{handleClick(0)}}/>
        <Square input={squares[1]} onSquareClick={()=>{handleClick(1)}}/>
        <Square input={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
      </div>
      <div className='board-row'>
        <Square input={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
        <Square input={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
        <Square input={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
      </div>
      <div className='board-row'>
        <Square input={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
        <Square input={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square input={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
      </div>
    </>;
}

function App() {
  return (
    <>
    <Board />
    </>
  );
}

export default App;
