import checkWinCondition from './helpers/checkWinCondition';

const Status = ({ winningLines, currentPlayerX, squares }) =>{
  const winner = checkWinCondition( winningLines, squares);
  let status;
  if(winner)  status = `Winner ${winner}`;
  else status=`Current Player: ${currentPlayerX?'X':'O'}`;
  return (
    <div className='status'>
      {status}
    </div>
  );
};

export default Status;
