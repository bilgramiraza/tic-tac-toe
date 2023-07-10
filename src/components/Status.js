const Status = ({ currentPlayerX, gameOver}) =>{
  let status;
  const currentPlayer = currentPlayerX?'X':'O';
  if(gameOver)  status = `Winner ${gameOver}`;
  else status=`Current Player: ${currentPlayer}`;
  return (
    <div className='status'>
      {status}
    </div>
  );
};

export default Status;
