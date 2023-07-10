const genWinningLines = (size) => {
  let lines = [];
  for(let i=0;i<size;i++){
    let row =[];
    let col =[];
    for(let j=0;j<size;j++){
      row.push((i*size)+j);
      col.push((j*size)+i);
    }
    lines.push(row,col);
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

export default genWinningLines;
