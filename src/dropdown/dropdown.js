export function dropDown(list, name, label) {
    let optionArray = [
      `<option value="${name}-menu" selected disabled>${label}</option>`,
    ];
  
    const optionMap = list.map(
      (item) => ` <option value="${item[name].name}">${item[name].name}</option>`
    );
  
    const arr = optionArray.concat(optionMap);
  
    return arr;
  }