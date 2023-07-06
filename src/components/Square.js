const Square = ({ input, onSquareClick }) => {
  return <button className='square' onClick={onSquareClick}>{ input }</button>
}

export default Square;
