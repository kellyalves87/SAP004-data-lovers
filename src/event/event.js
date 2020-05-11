//neste arquivo, deixei as funções dos eventos exportados para que cada página tenha os dados corretos a serem apresentados.

import { filterData, sortData, filterDataOptions, searchName } from "../data.js";
import { pagination } from "../pagination/pagination.js";

export function onChange(list, field, value) { //função criada para a mudança de página que recebe uma lista, um campo e um valor.
  const resultArray = filterData(list, field, value); //variável criada para o resultado do array que é igual o filtro de dados que recebe uma lista, um campo e um valor.

  pagination(resultArray); //a paginação recebe o resultado deste array.
}

export function onChangeSearchByNestedObject(list, field, nestedField, value) { //função criada para mudança de página na pesquisa de alteração por objeto aninhado, que recebe uma lista, um campo, um campo aninhado um valor.
  const resultArray = filterDataOptions(list, field, nestedField, value); //variável criada para o resultado do array que é igual ao filto de dados que recebe uma lista, um campo, um campo aninhado um valor.

  pagination(resultArray); //a paginação recebe o resultado deste array.
}

export function onChangeSortData(list, field, value) { //função criada para a classificação de dados (ordenação alfabética) de dados que recebe uma lista, campo e valor.
  const resultArray = sortData(list, field, value); //variável criada para o resultado do array que é igual a classificação de dados que recebe uma lista, campo e valor.

  pagination(resultArray); //a paginação recebe o resultado deste array.
}

export function onChangeSearchName(list, field, value) { //função criada para a busca por nome que recebe uma lista, campo e valor.
  const resultArray = searchName(list, field, value); //variável criada para o resultado do array que é igual a busca por nome que recebe a lista, campo e valor.

  pagination(resultArray); //a paginação recebe o resultado deste array.
}
