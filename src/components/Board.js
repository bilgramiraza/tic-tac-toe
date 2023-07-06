import calculateWinner from './helpers/calculateWinner';
import Square from './Square';

const Board = ({ currentPlayerX, squares, onPlay, size}) => {

  const winner = calculateWinner(squares, size);
  let status;
  if(winner)  status = `Winner ${winner}`;
  else status=`Current Player: ${currentPlayerX?'X':'O'}`;

  const handleClick = (index) => {
    if(calculateWinner(squares,size) || squares[index])  return;

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

export default Board;
