import data from "./data/rickandmorty/rickandmorty.js";
import { dropDown } from "./dropdown/dropdown.js";
import { removeDuplicates, sortDataNested, makeStatistics } from "./data.js";
import {
  onChange,
  onChangeSearchByNestedObject,
  onChangeSortData,
  onChangeSearchName,
} from "./event/event.js";
import {nextPage, prevPage} from "./pagination/pagination.js";

const duplicatesOrigin = removeDuplicates(data.results, "origin"); 
const dropDownOrigin = document.getElementById("origin");
dropDownOrigin.innerHTML = dropDown(sortDataNested(duplicatesOrigin, "origin", "name"), "origin", "Origem");
const duplicatesLocation = removeDuplicates(data.results, "location"); 
const dropDownLocalation = document.getElementById("location");
dropDownLocalation.innerHTML = dropDown(sortDataNested(duplicatesLocation, "location", "name"), "location", "Localização");

let abstract = document.getElementById("abstract");
let iframe = document.getElementById("video"); // "Kelly" variável criada para esconder os vídeos nas opções do menu

const status = document.getElementById("status");
status.addEventListener("change", function () { 
  abstract.style.display = "none";
  iframe.style.display = "none"; // "Kelly" ação criada para esconder os vídeos nas opções do menu
  onChange(data.results, "status", status.value);
  const percentage = makeStatistics(data.results, "status", status.value);

  let result = document.getElementById("statistics");
  result.innerHTML = `${percentage}% of characters in status are: ${status.value}`;
});

const gender = document.getElementById("gender"); 
gender.addEventListener("change", function () { 
  onChange(data.results, "gender", gender.value);
  const percentageGender = makeStatistics(data.results, "gender", gender.value);

  let result = document.getElementById("statistics");
  result.innerHTML = `${percentageGender}% the gender of the characters are: ${gender.value}`;
});

const species = document.getElementById("species"); 
species.addEventListener("change", function () { 
  onChange(data.results, "species", species.value);
  const percentageSpecies = makeStatistics(data.results, "species", species.value);

  let result = document.getElementById("statistics");
  result.innerHTML = `${percentageSpecies}% of species of the characters are: ${species.value}`;   
});

const origin = document.getElementById("origin"); 
origin.addEventListener("change", function () {
  onChangeSearchByNestedObject(data.results, "origin", "name", origin.value); 
});

const location = document.getElementById("location");
location.addEventListener("change", function () {
  onChangeSearchByNestedObject( 
    "location",
    "name",
    location.value
  ); 
});

const sort = document.getElementById("sort"); 
sort.addEventListener("change", function () { 
  const selectedIndex = sort.selectedIndex; 
  onChangeSortData(data.results, "name", sort[selectedIndex].value);
});

const searchText = document.getElementById("search-name"); 
searchText.addEventListener("keypress", function () {
  onChangeSearchName(data.results, "name", searchText.value);
});

const nextPagination = document.getElementById("btn-next"); 
nextPagination.addEventListener("click", function () { 
  nextPage();
});

const prevPagination = document.getElementById("btn-prev");
prevPagination.addEventListener("click", function () {
  prevPage();
});

