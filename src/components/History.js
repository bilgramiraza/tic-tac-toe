const History = ({history, jumpTo}) =>{
  const moves = history.map((_squares,move)=>{
    let desc;
    if(!move) desc ="Go to Game Start";
    else desc =`Go to Move ${move}`;
    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className='game-info'>
      <ul>
        {moves}
        <li>You are at Move {moves.length}</li>
      </ul>
    </div>
  );
};

export default History;
