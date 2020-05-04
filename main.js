import data from "./data/rickandmorty/rickandmorty.js";
import {filterData, sortData} from './data.js';

document.getElementById("root").innerHTML = generateCard(data.results);

function generateCard(list) {
  return list.map((item) => 
  `<img src="${item.image}">
    <h3>Nome: ${item.name}</h3>
    <h3>Status: ${item.status}</h3>
    <h3>Gênero: ${item.gender}</h3>
    <h3>Origem: ${item.origin.name}</h3>
    <h3>Localização:${item.location.name}</h3>`)
}