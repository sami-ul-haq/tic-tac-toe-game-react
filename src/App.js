import React from "react";
import Game from "./Components/Game";

const style = {
  textAlign: 'center'
}

const App = () => {
  return (
    <>
      <h1 style={style}>Tic Tac Toe Game </h1>
      <Game />
    </>
  );
};

export default App;
