import data from "./data/rickandmorty/rickandmorty.js";
import { filterData, sortData } from "./data.js";


function generateCard(list) {
  return list.map(
    (item) =>
      `<img src="${item.image}">
    <h3>Nome: ${item.name}</h3>
    <h3>Status: ${item.status}</h3>
    <h3>Gênero: ${item.gender}</h3>
    <h3>Origem: ${item.origin.name}</h3>
    <h3>Localização:${item.location.name}</h3>`
  );
}

function dropDown(list){
  return list.map(
    (item) => 
    ` <option value="${item.origin.name}">${item.origin.name}</option>
    `
  );
}

const dropDownOrigin = document.getElementById("origin");
dropDownOrigin.innerHTML=dropDown(data.results);

const status = document.getElementById("status");
status.addEventListener("change", function(){
  document.getElementById("root").innerHTML= generateCard(filterData(data.results, "status", status.value))
});

const gender = document.getElementById("gender");
gender.addEventListener("change", function(){
  document.getElementById("root").innerHTML=generateCard(filterData(data.results, "gender", gender.value))
});

const species = document.getElementById("species");
species.addEventListener("change", function(){
  document.getElementById("root").innerHTML=generateCard(filterData(data.results, "species", species.value))
});

const location = document.getElementById("location");
location.addEventListener("change", function(){
  document.getElementById("root").innerHTML=generateCard(filterData(data.results, "location", location.value))
});


const searchButton = document.getElementById("search-name").value;
searchButton.addEventListener("click");
