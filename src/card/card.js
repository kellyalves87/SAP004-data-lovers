export function generateCard(item, index) { 
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

