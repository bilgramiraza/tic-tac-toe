import { useState } from 'react';
import './App.css';

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i = 0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a]&&(squares[a]===squares[b]&&squares[a]===squares[c]))
      return squares[a];
  }
  return null;
}

function Square({ input, onSquareClick }){
  return <button className='square' onClick={onSquareClick}>{ input }</button>
}

function Board({ currentPlayerX, squares, onPlay }){

  const winner = calculateWinner(squares);
  let status;
  if(winner)  status = `Winner ${winner}`;
  else status=`Current Player: ${currentPlayerX?'X':'O'}`;

  function handleClick(index){
    if(calculateWinner(squares) || squares[index])  return;

    const copySquares = squares.slice();
    
    if(currentPlayerX)  copySquares[index] = 'X';
    else copySquares[index] = 'O';

    onPlay(copySquares);
  }
  return <>
      <div className='status'>{status}</div>
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

function Game (){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentPlayerX = currentMove%2===0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
    setHistory(nextHistory); 
    setCurrentMove(nextHistory.length-1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }
  const moves = history.map((_squares,move)=>{
    let desc;
    
    if(move>0) desc=`Go to Move ${move}`;
    else desc='Go to game Start';

    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
  <div className='game'>
    <div className='game-board'>
      <Board currentPlayerX={currentPlayerX} squares={currentSquares} onPlay={handlePlay}/>
    </div>
    <div className='game-info'>
      <ol>{moves}</ol>
    </div>
  </div>
  );
}

function App() {
  return (
    <>
    <Game/>
    </>
  );
}

export default App;
