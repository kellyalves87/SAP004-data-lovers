export function filterData (data, key, value) {
  function filter (item) {
    return item[key] === value
  }
  return data.filter(filter)
};

export function sortData(data, name) {
    if (name === "A-Z") {
    return data.sortAsc((a, b) => (a.name > b.name ? 1 : -1));
  }
    return data.sortDesc((a, b) => (a, name > b.name ? -1 : 1));
};

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


  
