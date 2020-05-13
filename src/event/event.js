import { filterData, sortData, filterDataOptions, searchName } from "../data.js";
import { pagination } from "../pagination/pagination.js";

export function onChange(list, field, value) {
  const resultArray = filterData(list, field, value);

  pagination(resultArray);
}

export function onChangeSearchByNestedObject(list, field, nestedField, value) {
  const resultArray = filterDataOptions(list, field, nestedField, value);

  pagination(resultArray);
}

export function onChangeSortData(list, field, value) {
  const resultArray = sortData(list, field, value);

  pagination(resultArray);
}

export function onChangeSearchName(list, field, value) {
  const resultArray = searchName(list, field, value);

  pagination(resultArray);
}
