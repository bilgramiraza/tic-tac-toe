import { useState } from 'react';
import '../App.css';
import genWinningLines from './helpers/generateWinningLines';
import Board from './Board';
import Status from './Status';

const Game = ({size}) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentPlayerX = currentMove%2===0;
  const currentSquares = history[currentMove];
  const winningLines = genWinningLines(size);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
    setHistory(nextHistory); 
    setCurrentMove(nextHistory.length-1);
  }

  const jumpTo = (nextMove) => {
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
    <Status winningLines={winningLines} currentPlayerX={currentPlayerX} squares={currentSquares}/>
    <Board winningLines={winningLines} currentPlayerX={currentPlayerX} squares={currentSquares} onPlay={handlePlay} size={size}/>
    <div className='game-info'>
      <ul>{moves}</ul>
    </div>
  </div>
  );
}

export default Game;
