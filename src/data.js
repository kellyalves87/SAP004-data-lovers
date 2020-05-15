export function filterData(data, key, value) {
  function filter(item) {
    return item[key] === value;
  }
  return data.filter(filter);
}

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

export function sortDataNested(data, name, value) {
  return data.sort((elem1, elem2) =>
    elem1[name][value] > elem2[name][value] ? 1 : -1
  );
}

export function removeDuplicates(data, name) {
  return data.reduce((unique, elem) => {
    if (!unique.some((ob) => ob[name].name === elem[name].name)) {
      unique.push(elem);
    }
    return unique;
  }, []);
}

export function searchName(data, name, value) {
  return data.filter((item) =>
    item[name].toUpperCase().includes(value.toUpperCase())
  );
}

export function makeStatistics(data, name, value) {
  if (!data || !name) {
    return TypeError('no data has been provided');
  }

  let typeName = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i][name].includes(value)) {
      typeName++;
    }
  }
  let finalPercentage = typeName / data.length * 100
  return finalPercentage.toFixed(2)
};