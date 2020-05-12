//neste arquivo deixei a função que faz a quantidade de páginas por tela.

import {generateCard} from "../card/card.js";

let currentPage = 1; //variável criada para determinar a quantidade de páginas que queremos mostrar por vez.
let recordsPerPage = 10; //variável criada para determinar quantos cards queremos que apareça por página.
let currentArray = []; // criei esta const para que qdo houver menos de 10 cards em determinado elemento do menu o código ñ quebrar.

export function prevPage() { //função criada para paginação anterior.
  if (currentPage > 1) { //se a página atual for maior que 1.
    currentPage--; // então a página atual tem um decremento(volta uma).
    changePage(currentPage, currentArray); //a troca de página recebe a página atual e os elementos do array q constam no BD.
  }
}

export function nextPage() { //função criada para próxima páginação.
  if (currentPage < numPages()) { //se a página atual for menor que o numero de páginas.
    currentPage++; //então a página atual tem um acréscimo (pula para a pŕoxima página).
    changePage(currentPage, currentArray); //a troca de página recebe a página atual e os elementos do array q constam no Banco de dados.
  }
}

export function pagination(list){ //função criada para a paginação que recebe uma lista.
    currentArray = list; //a página atual é igual a lista (que temos em nosso Banco de dados).
    changePage(currentPage, list); //a troca de pagina recebe a página atual e a lista.
}

function changePage(page, resultArray) { //função criada para a troca de página que recebe a página e o resultado do Array que temos em nosso banco de dados.
  let btnNext = document.getElementById("btn-next"); //variável para buscarmos o evento de botão no HTML.
  let btnPrev = document.getElementById("btn-prev"); //variável para buscarmos o evento de botão no HTML.
  let root = document.getElementById("root"); //variável para receber o elemento raiz do HTML.
  let pageSpan = document.getElementById("page"); //variável para buscarmos o evento de página no HTML.

  // Validate page
  if (page < 1) page = 1; //se a página for menor que 1, a página nos tras a primeira página.
  if (page > numPages()) page = numPages(); //se a página for maior que o número de páginas, a página nos trás mais uma página.

  root.innerHTML = ""; //elemento raiz do HTML nos tras uma string vazia para que a paginação possa ser preenchida.

  for (let i = (page - 1) * recordsPerPage; i < (page * recordsPerPage); i++) { //aqui é a conta que fazemos para que nos traga a quantidade de cards por página.
    if(i == resultArray.length){ //se i for igual ao resultado do tamanho do nosso resultado de array.
        break; //ele para de executar. (para os casos que um elemento do menu tiver menos de 10 cards).
    }
    root.innerHTML += generateCard(resultArray[i], i); //elemento raiz do HTML é somado e atribuido ao generate Card que recebe o resultado do nosso array, mais a conta do lenght.
  }
  pageSpan.innerHTML = page; //perído de paginas mais o HTML interno é igual páginas.

  if (page === 1) { //se o número de páginas for igual a 1.
    btnPrev.style.visibility = "hidden"; //o botão de página anterior é escondida, pois não existe outra página antes da primeira.
  } else { //se não
    btnPrev.style.visibility = "visible"; //o botão de página anterior é exibida para que possa seguir o seu fluxo para as próximas páginas.
  }

  if (page === numPages()) { //se a página for igual ao numero total de páginas.
    btnNext.style.visibility = "hidden"; //o pŕoximo botão é escondido, pois não existe outras páginas depois da última.
  } else { //se não
    btnNext.style.visibility = "visible"; //o próximo botão é exibido para que possa seguir o seu fluxo para as pŕoximas páginas.
  }
}

export function numPages() { //função criada para que o número de páginas retorne um valor inteiro maior ou igual ao argumento.
  return Math.ceil(currentArray.length / recordsPerPage); //o argumento recebido no caso é o tamanho que determinamos no nosso array e a quantidade por página.
}