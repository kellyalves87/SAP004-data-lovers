export function filterData (data, key, value) {
  function filter (item) {
    return item[key] === value
  }
  return data.filter(filter)
};

/*results.sort(function(a ,b ){
  return (a.name > b.name)?1:((b.name > a.name) ? -1 : 0)
})*/
/*export function sortData(data, name) {
    if (name === "A-Z") {
    return data.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
    return data.sort((a, b) => (a, name > b.name ? -1 : 1));
};*/

export function statusCharacters(data, name, value) {
    return data.filterData(data, name, value);
};

export function genderCharacters (data, name, value) {
    return data.filterData(data, name, value);
};

export function specieCharacters (data, name, value) {
    return data.filterData(data, name, value);
};

export function originCharacters (data, name, value) {
    return data.filterData(data, name, value);
};

export function locationCharacters (data, name, value) {
    return data.filterData(data, name, value);
};
export function calcular(data){
  return(data.length * 100 / 493).toFixed()
}

  
