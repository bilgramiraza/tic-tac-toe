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

function Board({ currentPlayerX, squares, onPlay, size}){

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

  let renderedBoard=[];
  for(let i =0;i<size;i++){
    let row=[];
    for(let j =0;j<size;j++){
      const index = (i*size)+j;
      row.push(<Square key={index} input={squares[index]} onSquareClick={()=>{handleClick(index)}}/>);
    }
    renderedBoard.push(<div className='board-row' key={i}>{row}</div>);
  }
  return (
    <>
      <div className='status'>{status}</div>
      {renderedBoard}
    </>
  );
}

function Game ({size}){
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
    if(move===history.length-1) desc = `You are at Move ${move+1}`;
    else if(move>0) desc = (<button onClick={()=> jumpTo(move)}>{`Go to Move ${move}`}</button>);
    else desc = (<button onClick={()=> jumpTo(move)}>Go to Game Start</button>);

    return (
      <li key={move}>
        {desc}  
      </li>
    );
  });
  return (
  <div className='game'>
    <div className='game-board'>
      <Board currentPlayerX={currentPlayerX} squares={currentSquares} onPlay={handlePlay} size={size}/>
    </div>
    <div className='game-info'>
      <ol>{moves}</ol>
    </div>
  </div>
  );
}

function App() {
  const size = 3;
  return (<Game size={size}/>);
}

export default App;
