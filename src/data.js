export function filterData(data, key, value) {
  function filter(item) {
    return item[key] === value;
  }
  return data.filter(filter);
}


/*export function calcular(data){
  return(data.length * 100 / 493).toFixed()
  }*/

export function filterDataOptions(data, key, attr, value) {
  function filter(item) {
    return item[key][attr] === value;
  }
  return data.filter(filter);
}

export function sortData(data, name, optionValue) {
  if (optionValue === "A-Z") {
    return data.sort((a, b) => (a[name] > b[name] ? 1 : -1));
  }
  return data.sort((a, b) => (a[name] > b[name] ? -1 : 1));

}

export function statusCharacters(data, name, value) {
  return data.filterData(data, name, value);
}

export function genderCharacters(data, name, value) {
  return data.filterData(data, name, value);
}

export function specieCharacters(data, name, value) {
  return data.filterData(data, name, value);
}

export function originCharacters(data, name, value) {
  return data.filterData(data, name, value);
}

export function locationCharacters(data, name, value) {
  return data.filterData(data, name, value);
}

export function removeDuplicates(data, name) {
  return data.reduce((unique, elem) => {
    if (!unique.some((ob) => ob[name].name === elem[name].name)) {
      unique.push(elem);
    }
    return unique;
  }, []);
}

export function searchName(data, name) {
  return data.filter((item) =>
    item.name.toUpperCase().includes(name.toUpperCase())
  );
}
