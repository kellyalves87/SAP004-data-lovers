//Neste arquivo deixei apenas a função para criar os cards.

export function generateCard(item, index) { //função criada para geração dos Cards que recebe um item e o index(dados do html).
    return `<div id="${index}"> 
        <img src="${item.image}">
        <p class="paragrafo-nome">${item.name}</p>
        <p class="paragrafo">Status: ${item.status}</p>
        <p class="paragrafo">Specie: ${item.species}</p>
        <p class="paragrafo">Gênero: ${item.gender}</p>
        <p class="paragrafo">Origem: ${item.origin.name}</p>
        <p class="paragrafo">Localização: ${item.location.name}</p>
        </div>
        `;
    }

  //que nos retorna uma div com todos os itens que desejamos que apareça no card.