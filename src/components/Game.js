import { useState } from 'react';
import '../App.css';
import Board from './Board';
import Status from './Status';
import History from './History';
import checkWinCondition from './helpers/checkWinCondition';
import genWinningLines from './helpers/generateWinningLines';

const Game = ({size, setSize}) => {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const [gameOver, setGameOver] = useState("");

  const currentPlayerX = currentMove%2===0;
  const currentSquares = history[currentMove];
  const winningLines = genWinningLines(size);

  const handlePlay = (nextSquares) => {
    const winner = checkWinCondition(winningLines, nextSquares);
    if(winner){
      setGameOver(winner);
    }
    if(!gameOver && !nextSquares.includes("")){
      setGameOver("Draw");
    }
    const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
    setHistory(nextHistory); 
    setCurrentMove(nextHistory.length-1);
  }

  const reset = () =>{
    setSize(null);
  };
  
  return (
  <div className='game'>
    <Status currentPlayerX={currentPlayerX} gameOver={gameOver}/>
    <Board currentPlayerX={currentPlayerX} squares={currentSquares} onPlay={handlePlay} size={size} gameOver={gameOver}/>
    <History history={history} jumpTo={setCurrentMove}/>
    {gameOver && <button onClick={reset}>Reset</button>}
  </div>
  );
}

export default Game;
