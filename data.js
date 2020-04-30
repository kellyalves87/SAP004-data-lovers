import data from './data/rickandmorty/rickandmorty.js';

export const filtros = {
  ordenarNomes: () => {
    const personagens = data.results.map(function(item){
      return [item.name, item.image]

    })
    const ordenando = personagens.sort()
    return (personagens.sort())
  }
}

