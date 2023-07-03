import { useState } from 'react';
import './App.css';

function Square({ input }){
  const [value, setValue] = useState('');
  function handleClick(){
    setValue(input);
  }
  return <button className='square' onClick={handleClick}>{ value }</button>
}

function Board(){
  return <>
      <div className='board-row'>
        <Square input='1'/>
        <Square input='2'/>
        <Square input='3'/>
      </div>
      <div className='board-row'>
        <Square input='4'/>
        <Square input='5'/>
        <Square input='6'/>
      </div>
      <div className='board-row'>
        <Square input='7'/>
        <Square input='8'/>
        <Square input='9'/>
      </div>
    </>;
}

function App() {
  return (
    <>
    <Board />
    </>
  );
}

export default App;
