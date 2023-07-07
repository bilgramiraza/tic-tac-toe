import { useState } from "react";

const Form = ({ setSize }) => {
  const [sizeInput, setSizeInput] = useState(3);

  const handleSizeInput = (e) =>{
    setSizeInput(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSize(sizeInput);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input type="number" 
        id="boardSize" 
        name="boardSize" 
        onChange={handleSizeInput} 
        value={sizeInput} 
        min={3}
      />
      <button>Set Size</button>
    </form>
  );
};

export default Form;
