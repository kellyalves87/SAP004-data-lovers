import {generateCard} from "../card/card.js";

let currentPage = 1; 
let recordsPerPage = 10;
let currentArray = [];

export function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage, currentArray);
  }
}

export function nextPage() {
  if (currentPage < numPages()) {
    currentPage++;
    changePage(currentPage, currentArray);
  }
}

export function pagination(list){
    currentArray = list;
    changePage(currentPage, list);
}

function changePage(page, resultArray) {
  let btnNext = document.getElementById("btn-next");
  let btnPrev = document.getElementById("btn-prev");
  let root = document.getElementById("root");
  let pageSpan = document.getElementById("page");
  
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  root.innerHTML = "";

  for (let i = (page - 1) * recordsPerPage; i < (page * recordsPerPage); i++) {
    if(i == resultArray.length){
        break;
    }
    root.innerHTML += generateCard(resultArray[i], i);
  }

  pageSpan.innerHTML = page;
  pageSpan.style.visibility = "visible"; 

  if (page === 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page === numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
  }
}

export function numPages() {
  return Math.ceil(currentArray.length / recordsPerPage);
}

export function resetPage(){ // "Kelly" função criada para resetar a numeração de página toda vez que mudarmos as opções do menu
  currentPage = 1;
}