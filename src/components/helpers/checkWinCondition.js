const checkWinCondition = (winningLines, board) => {
  for(let i=0;i<winningLines.length;i++){
    const line = winningLines[i];
    let symbol = board[line[0]];
    let win = true;
    for(let j=0;j<line.length;j++){
      if(board[line[j]]!== symbol){
        win = false;
        break;
      }
    }
    if(win) return symbol;
  }
  return null;
}

export default checkWinCondition;
