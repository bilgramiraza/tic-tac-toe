import { useState } from "react";
import Form from "./components/Form";
import Game from "./components/Game";

const App = () => {
  //TODO:Setup Home Screen to select Board size and ability to Restart matches
  const [size, setSize] = useState();

  return (<div>
    {
      size ?
      <Game size={size}/> :
      <Form setSize={setSize} />
    }
  </div>);
}

export default App;
