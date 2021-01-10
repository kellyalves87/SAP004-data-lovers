import React from 'react';
import CharacterApi from './core/service/characterService'

function App() {

  debugger
  const resultado = new CharacterApi().getUsers().then(result => {
    console.log(result);
  });


  return (
    <>
    {resultado}
    </>
  )
}

export default App;
