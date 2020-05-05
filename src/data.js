// funções de exemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
/*const filtrar=value=>{
  return{
    image: value.image,
    name:value.name,
    status:value.status,
    species:value.species
    
  }
}*/

/*export function ordemAlf (data,name){
  if (name==="A-Z"){
    return data.sort((a, b)=>a.name > b.name ? 1 : -1)
  }
  return data.sort((a, b)=> a,name > b.name? -1 : 1)
}*/
export function filtroG(app,condition){
  return app.slice().filter(item => item.gender === condition)
}

export function filtroS(app,condition){
  return app.slice().filter(item => item.status === condition)
}
export function calcular(app) {
  return ((app.length * 100) / 493).toFixed()
}
export function ordemAlfabetica(arr, condition) {
  if (condition === "A-Z") {
    return arr.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (condition === "Z-A") {
    return arr.slice().sort((a, b) => (a.name > b.name ? -1 : 1));
  } else {
    document.location.reload(true);
  }
}
  app = {
  filtroS,
  filtroG,
  calcular,
  ordemAlfabetica,
}