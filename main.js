import data from "./data/rickandmorty/rickandmorty.js";
import {
  filterData,
  sortData,
  removeDuplicates,
  filterDataOptions,
  searchName,
} from "./data.js";

function generateCard(item, index) {
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

function dropDown(list, name, label) {
  let optionArray = [
    `<option value="${name}-menu" selected disabled>${label}</option>`,
  ];

  const optionMap = list.map(
    (item) => ` <option value="${item[name].name}">${item[name].name}</option>`
  );

  const arr = optionArray.concat(optionMap);

  return arr;
}

const dropDownOrigin = document.getElementById("origin");
const duplicatesOrigin = removeDuplicates(data.results, "origin");
dropDownOrigin.innerHTML = dropDown(duplicatesOrigin, "origin", "Origem");

const dropDownLocalation = document.getElementById("location");
const duplicatesLocation = removeDuplicates(data.results, "location");
dropDownLocalation.innerHTML = dropDown(
  duplicatesLocation,
  "location",
  "Localização"
);

const status = document.getElementById("status");
status.addEventListener("change", function () {
  document.getElementById("root").innerHTML = filterData(
    data.results,
    "status",
    status.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const gender = document.getElementById("gender");
gender.addEventListener("change", function () {
  document.getElementById("root").innerHTML = filterData(
    data.results,
    "gender",
    gender.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const species = document.getElementById("species");
species.addEventListener("change", function () {
  document.getElementById("root").innerHTML = filterData(
    data.results,
    "species",
    species.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const origin = document.getElementById("origin");
origin.addEventListener("change", function () {
  document.getElementById("root").innerHTML = filterDataOptions(
    data.results,
    "origin",
    "name",
    origin.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const location = document.getElementById("location");
location.addEventListener("change", function () {
  document.getElementById("root").innerHTML = filterDataOptions(
    data.results,
    "location",
    "name",
    location.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const sort = document.getElementById("sort");
sort.addEventListener("change", function () {
  document.getElementById("root").innerHTML = sortData(
    data.results,
    "sort",
    "name",
    sort.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const searchText = document.getElementById("search-name");
searchText.addEventListener("keypress", function () {
  document.getElementById("root").innerHTML = searchName(
    data.results,
    "search-name",
    "name",
    searchText.value
  )
    .map((item, index) => generateCard(item, index))
    .join("");
});

const nextPagination = document.getElementById("btn-next");
nextPagination.addEventListener("click", function () {
  nextPage();
});

const prevPagination = document.getElementById("btn-prev");
prevPagination.addEventListener("click", function () {
  prevPage();
});

let currentPage = 1;
let recordsPerPage = 10;

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
}

function nextPage() {
  if (currentPage < numPages()) {
    currentPage++;
    changePage(currentPage);
  }
}

function changePage(page) {
  var btnNext = document.getElementById("btn-next");
  var btnPrev = document.getElementById("btn-prev");
  var root = document.getElementById("root");
  var pageSpan = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  root.innerHTML = "";

  for (let i = (page - 1) * recordsPerPage; i < page * recordsPerPage; i++) {
    root.innerHTML += generateCard(data.results[i], i);
  }
  pageSpan.innerHTML = page;

  if (page == 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil(data.results.length / recordsPerPage);
}
