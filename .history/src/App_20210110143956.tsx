import React from 'react';
import CharacterApi from './core/service/characterService'

function App() {

  debugger
  const resultado = new CharacterApi().getUser;


  return (
    <>
    {resultado}
    </>
  )
}

export default App;