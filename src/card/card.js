//Neste arquivo deixei apenas a função para criar os cards.

export function generateCard(item, index) { //função criada para geração dos Cards que recebe um item e o index(dados do html).
    return `<div id="${index}"> 
        <img src="${item.image}">
        <p class="pnome">${item.name}</p>
        <p class="parag">Status: ${item.status}</p>
        <p class="parag">Specie: ${item.species}</p>
        <p class="parag">Gênero: ${item.gender}</p>
        <p class="parag">Origem: ${item.origin.name}</p>
        <p class="parag">Localização: ${item.location.name}</p>
        </div>
        `;
    }

  //que nos retorna uma div com todos os itens que desejamos que apareça no card.