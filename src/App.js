import Game from "./components/Game";

const App = () => {
  //TODO:Setup Home Screen to select Board size and ability to Restart matches
  //Cleanup-TODO: Seperate consts to different modules for maintainability
  //Later TODO: Look into using trees to store match history
  //GIGA-TODO: AI Bot?
  const size = 4;
  return (<Game size={size}/>);
}

export default App;
