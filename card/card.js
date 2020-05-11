//Neste arquivo deixei apenas a função para criar os cards.

export function generateCard(item, index) { //função criada para geração dos Cards que recebe um item e o index(dados do html).
    return `<div id="${index}"> 
        <img src="${item.image}">
        <h3>Nome: ${item.name}</h3>
        <h3>Status: ${item.status}</h3>
        <h3>Specie: ${item.species}</h3>
        <h3>Gênero: ${item.gender}</h3>
        <h3>Origem: ${item.origin.name}</h3>
        <h3>Localização:${item.location.name}</h3>
        </div>
      `;
  }

  //que nos retorna uma div com todos os itens que desejamos que apareça no card.