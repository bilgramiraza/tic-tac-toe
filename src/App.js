import { useState } from "react";
import Form from "./components/Form";
import Game from "./components/Game";

const App = () => {
  const [size, setSize] = useState(null);

  return (<div>
    {
      size ?
      <Game size={size} setSize={setSize}/> :
      <Form setSize={setSize} />
    }
  </div>);
}

export default App;
