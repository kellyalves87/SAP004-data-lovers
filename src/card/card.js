export function generateCard(item, index) {
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