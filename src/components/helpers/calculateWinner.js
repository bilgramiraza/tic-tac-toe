const genWinningLines = (size) => {
  const lines = [];
  for(let i=0;i<size;i++){
    let row =[];
    let col =[];
    for(let j=0;j<size;j++){
      row.push((i*size)+j);
      col.push((j*size)+i);
    }
    lines.push(row);
    lines.push(col);
  }

  let diag1=[];
  let diag2=[];
  for(let i=0;i<size ;i++){
    diag1.push((i*size)+i)
    diag2.push((i*size)+(size-i-1))
  }
  lines.push(diag1,diag2);
  return lines;
}

const calculateWinner = (squares, size) => {
  const lines = genWinningLines(size);
  for(let i=0;i<lines.length;i++){
    const line = lines[i];
    let symbol = squares[line[0]];
    let win = true;
    for(let j=0;j<line.length;j++){
      if(squares[line[j]]!== symbol){
        win = false;
        break;
      }
    }
    if(win) return symbol;
  }
  return null;
}

export default calculateWinner;
