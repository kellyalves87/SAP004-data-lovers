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

const status = document.getElementById("status");
status.addEventListener("change", function () { 
  abstract.style.display = "none"; 
  onChange(data.results, "status", status.value);
  const percentage = makeStatistics(data.results, "status", status.value);

  let result = document.getElementById("statistics");
  result.innerHTML = `${percentage}% dos personagens estão no status: ${status.value}`;
});

const gender = document.getElementById("gender"); 
gender.addEventListener("change", function () { 
  onChange(data.results, "gender", gender.value);
  const percentageGender = makeStatistics(data.results, "gender", gender.value);

  let result = document.getElementById("statistics");
  result.innerHTML = `${percentageGender}% dos personagens estão no gênero: ${gender.value}`;
});

const species = document.getElementById("species"); 
species.addEventListener("change", function () { 
  onChange(data.results, "species", species.value);
  const percentageSpecies = makeStatistics(data.results, "species", species.value);

  let result = document.getElementById("statistics");
  result.innerHTML = `${percentageSpecies}% dos personagens estão nas espécies: ${species.value}`;
   
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

