import { useState } from 'react';
import '../App.css';
import genWinningLines from './helpers/generateWinningLines';
import Board from './Board';
import Status from './Status';
import History from './History';

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
  
  return (
  <div className='game'>
    <Status winningLines={winningLines} currentPlayerX={currentPlayerX} squares={currentSquares}/>
    <Board winningLines={winningLines} currentPlayerX={currentPlayerX} squares={currentSquares} onPlay={handlePlay} size={size}/>
    <History history={history} jumpTo={jumpTo}/>
  </div>
  );
}

export default Game;
