import Square from './Square';

const Board = ({ currentPlayerX, squares, onPlay, size, gameOver}) => {

  const handleClick = (index) => {
    if( gameOver || squares[index])  return;

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
    <div className='game-board'>
      {renderedBoard}
    </div>
  );
}

export default Board;
