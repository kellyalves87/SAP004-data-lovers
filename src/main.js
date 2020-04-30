import {} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

export const elements = {
  status: document.getElementById("status"),
  statusVivo: document.getElementById("vivo"),
  statusMorto: document.getElementById("morto"),
  statusDesconhecido: document.getElementById("desconhecido"),
  genero: document.getElementById("genero"),
  generoFem: document.getElementById("feminino"),
  generoMas: document.getElementById("masculino"),
  generoSemGen: document.getElementById("sem-genero"),
  generoIndef: document.getElementById("indefinido"),
  especie: document.getElementById("especie"),
  especieHum: document.getElementById("humano"),
  especieHumanoide: document.getElementById("humanoide"),
  especieAlien: document.getElementById("Alien"),
  especieAnimal: document.getElementById("animal"),
  temporadas: document.getElementById("temporadas"),
  temporadaUm: document.getElementById("temp-um"),
  temporadaDois: document.getElementById("temp-dois"),
  temporadaTres: document.getElementById("temp-tres"),
  temporadaQuatro: document.getElementById("temp-quatro"),
  botaoBusca: document.getElementById("busca"),
}

const characters = data.results.map((item) => `<div>
<img src="${item.image}" alt="${item.name}">
<div> ${item.name}</div>
`)

document.getElementById('root').innerHTML = characters.join("");
