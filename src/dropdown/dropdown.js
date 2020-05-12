//neste arquivo, deixei a função que gera o dropdown para origem e localização.

export function dropDown(list, name, label) { //função criada para o menu suspenso que recebe uma lista, nome e um rótulo.
    let optionArray = [ //variavel criada para a opção de array que recebe
      `<option value="${name}-menu" selected disabled>${label}</option>`, //o Dom no HTML com a option.Fizemos isto para que todo o conteúdo que precisavamos aparecesse nesta função.
    ];
  
    const optionMap = list.map( //variável criada para opção de mapeamento que é igual a lista que recebe o mapeamento.
      (item) => ` <option value="${item[name].name}">${item[name].name}</option>` //item que recebe uma aéro function do DOM no HTML com a option. Fizemos isto para que todo o conteúdo fosse mapeado para a função.
    );
  
    const arr = optionArray.concat(optionMap); //variável criada para o array que é igual a opção do array que concatena com a opção de mapeamento.
  
    return arr; //que nos retorna este array.
  }