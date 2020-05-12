//neste arquivo, nada foi modificado, mas mesmo assim comentei para que a gente não esqueça o que cada função faz.

export function filterData(data, key, value) { //função criada para filtrar os dados que recebe o dado, a chave e o valor.
  function filter(item) { //função filtro recebe um item
    return item[key] === value; //que retorna um item entre a chave que é igual o valor.
  }
    return data.filter(filter); //retorna os dados do filtro que recebe um filtro.
}

export function filterDataOptions(data, key, attr, value) { //função criada para filtrar as opções de dados que recebe dados, chave, atributos e valor.
  function filter(item) { //função filtro recebe um item
    return item[key][attr] === value; //que retorna um item entre a chave e um atributo que é igual ao valor.
  }
    return data.filter(filter); //retorna os dados do filtro que recebe um filtro.
}

export function sortData(data, name, optionValue) { //função para classificar dados que recebe um dado, nome e a opção de valor.
  if (optionValue === "A-Z") { //se a opção de valor for igual "A-Z"
    return data.sort((a, b) => (a[name] > b[name] ? 1 : -1)); //retorna a classificação de dados que recebe a e b, gera uma arrow function que recebe o a entre nome e b entre nome
  }
    return data.sort((a, b) => (a[name] > b[name] ? -1 : 1)); //retorna a classificação de dados que recebe a e b, gera uma arrow function que recebe o a entre nome e b entre nome 

}

export function removeDuplicates(data, name) { //função para remover duplicados que recebe um dado e nome.
  return data.reduce((unique, elem) => { //função dados que subtrai numero da matriz, començando do inicio que recebe um unico elemento
    if (!unique.some((ob) => ob[name].name === elem[name].name)) { //se o elemento do array não for igual ao objeto, gera uma arrow function que susbtitui um objeto pelo outro.
      unique.push(elem); //então ele adiciona o elemento unico no array.
    }
    return unique; //retorna apenas um elemento.
  }, []);
}

export function searchName(data, name, value) { //função para a busca de nome.
    return data.filter((item) => //retorna um dado filtrado que recebe um item.
    item[name].toUpperCase().includes(value.toUpperCase()) //o item nome sem letra maíuscula ou minúscula inclui o valor sem letra maíuscula ou minúscula.
  );
}