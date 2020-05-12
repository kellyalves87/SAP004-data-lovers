import data from "./data/rickandmorty/rickandmorty.js";
import { dropDown } from "./dropdown/dropdown.js";
import { removeDuplicates } from "./data.js";
import {
  onChange,
  onChangeSearchByNestedObject,
  onChangeSortData,
  onChangeSearchName,
} from "./event/event.js";
import {nextPage, prevPage} from "./pagination/pagination.js";

//neste arquivo, deixei tudo o que se relaciona a pegar os eventos do HTML (getElementById) de todas a opções do menu.

const duplicatesOrigin = removeDuplicates(data.results, "origin"); //variável criada para remover dados duplicados dos cards na opção origem do menu.
const dropDownOrigin = document.getElementById("origin"); //variável criada para o menu suspenso que é igual ao documento que recebe o elemento por identificação "origem" vindo do HTML.
dropDownOrigin.innerHTML = dropDown(duplicatesOrigin, "origin", "Origem"); //menu suspenso recebe o HTML interno que é igual ao menu suspenso que recebe a duplicação de origem, com o nome origem e apresentação como origem no menu.

const duplicatesLocation = removeDuplicates(data.results, "location"); //variável criada para remover dados duplicados dos cards na opção localização do menu.
const dropDownLocalation = document.getElementById("location"); //variável criada para o menu suspenso que é igual ao documento que recebe o elemento por identificação "localização" vindo do HTML.
dropDownLocalation.innerHTML = dropDown( //menu suspenso localização recebe o HTML interno que é igual ao menu suspenso que recebe a duplicação de localização, com o nome localização e apresentação como localização no menu.
  duplicatesLocation,
  "location",
  "Localização"
);

let abstract = document.getElementById("abstract");

const status = document.getElementById("status"); //variável criada para o status que é igual ao documento que recebe o elemento por identificação "status" vindo do HTML.
status.addEventListener("change", function () { //status recebe o evento que escuta o menu quando for trocado, 
  abstract.style.display = "none";
  onChange(data.results, "status", status.value); //a função mudança que recebe o resultado dos dados que buscamos no banco de dados, o nome status e o valor do status.
});

const gender = document.getElementById("gender"); //variável criada para o genero que é igual ao documento que recebe o elemento por identificação "genero" vindo do HTML.
gender.addEventListener("change", function () { //genero recebe o evento que escuta o menu quando for trocado,
  onChange(data.results, "gender", gender.value); //a função mudança que recebe o resultado dos dados que buscamos no banco de dados, o nome genero e o valor do genero.
});

const species = document.getElementById("species"); //variável criada para a especie que é igual ao documento que recebe o elemento por identificação "especie" vindo do HTML.
species.addEventListener("change", function () { //especie recebe o evento que escuta o menu quando for trocado,
  onChange(data.results, "species", species.value); //a função mudança que recebe o resultado dos dados que buscamos no banco de dados, o nome especie e o valor da espécie.
});

const origin = document.getElementById("origin"); //variável criada para a origem que é igual ao documento que recebe o elemento por identificação "origem" vindo do HTML.
origin.addEventListener("change", function () { //origem recebe o evento que escuta o menu quando for trocado,
  onChangeSearchByNestedObject(data.results, "origin", "name", origin.value); //a função pesquisa de alteração por objeto aninhado que recebe o resultado dos dados que buscamos no banco de dados, o nome origem, o nome e o valor da origem.
});

const location = document.getElementById("location"); //variável criada para a localização que é igual ao documento que recebe o elemento por identificação "localização" vindo do HTML.
location.addEventListener("change", function () { //localização recebe o evento que escuta o menu quando for trocado,
  onChangeSearchByNestedObject( //a função pesquisa de alteração por objeto aninhado que recebe o resultado dos dados que buscamos no banco de dados, o nome localização, o nome e o valor da localização.
    data.results,
    "location",
    "name",
    location.value
  ); 
});

const sort = document.getElementById("sort"); //variável criada para ordem alfabetica que é igual ao documento que recebe o elemento por identificação "ordem alfabetica" vindo do HTML.
sort.addEventListener("change", function () { //ordem alfabética recebe o evento que escuta o menu quando for trocado,
  const selectedIndex = sort.selectedIndex; //variável criada para a seleção do index que é igual a ordenação da seleção do index.
  onChangeSortData(data.results, "name", sort[selectedIndex].value); //alterar dados de classificação recebe o resultado dos dados, a ordenação, e o valor da seleção do index.
});

const searchText = document.getElementById("search-name"); //variável criada para a busca por nome que é igual ao documento que recebe o elemento por identificação "busca por nome" vindo do HTML.
searchText.addEventListener("keypress", function () { //status recebe o evento que escuta o menu quando começa a escrever o que deseja,
  onChangeSearchName(data.results, "name", searchText.value); //alterar dados de classificação recebe o resultado dos dados, o nome e o valor da busca do texto.
});

const nextPagination = document.getElementById("btn-next"); //variável criada para o botão next que é igual ao documento que recebe o elemento por identificação "next" vindo do HTML.
nextPagination.addEventListener("click", function () { //pŕoxima página recebe o evento que escuta o menu quando for clicado,
  nextPage(); //retorna apenas o próxima página, não é necessário receber nenhum elemento para que este evento ocorra.
});

const prevPagination = document.getElementById("btn-prev"); //variável criada para o botão prev que é igual ao documento que recebe o elemento por identificação "prev" vindo do HTML.
prevPagination.addEventListener("click", function () { //página anterior recebe o evento que escuta o menu quando for clicado,
  prevPage(); //retorna apenas o página anterior, não é necessário receber nenhum elemento para que este evento ocorra.
});
