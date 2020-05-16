export function generateCard(item, index) { 
    return `<li id="${index}"> 
        <img src="${item.image}">
        <p class="paragraph-name">${item.name}</p>
        <p class="paragraph">Status: ${item.status}</p>
        <p class="paragraph">Specie: ${item.species}</p>
        <p class="paragraph">Gênero: ${item.gender}</p>
        <p class="paragraph">Origem: ${item.origin.name}</p>
        <p class="paragraph">Localização: ${item.location.name}</p>
        </li>
        `;
    }

