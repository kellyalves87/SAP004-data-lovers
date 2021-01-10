import React from "react";
import CharacterApi from "./core/components/Character/characterService";

function App() {
  debugger;
  new CharacterApi().getUsers().then((result) => {
    console.log(result);
  });

  return <>Hello word</>;
}

export default App;
