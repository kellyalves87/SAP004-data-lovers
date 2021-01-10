import React from 'react';
import CharacterApi from './core/service/characterService'

function App() {
  return (
    <>
    {new CharacterApi().getUser}
    </>
  )
}

export default App;
