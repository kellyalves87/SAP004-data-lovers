//simport {app} from './data/rickandmorty.js';
import data from './data/rickandmorty/rickandmorty.js';

/*document.getElementById('root').innerHTML = data.results.map((personagem) => 
    `<img src="${personagem.image}" id="card">
    <h3 id="container">Nome: ${personagem.name}</h3>
    <h3 id="container">Status: ${personagem.status}</h3>
    <h3 id="container">Gênero: ${personagem.gender}</h3>
    <h3 id="container">Origem: ${personagem.origin.name}</h3>
    <h3 id="container">Localização: ${personagem.location.name}</h3>`).join("")*/

    const arquivo = data.results
    const generoFiltro = document.getElementById("selec-genero")
    const statusFiltro = document.getElementById("selec-status")
    const estastistica = document.getElementById("porcentagem");

    generoFiltro.addEventListener("change", () => {
        genero() 
        estastistica.innerHTML=`aqui os pers. ${app.calcular(app.filtroG(arquivo,generoFiltro.value))} % ${generoFiltro.value}`
    })

    function genero(){
        return mostrarCartoes(app.generoFiltro(arquivo,generoFiltro.value))
    }
   window.onload=()=>{
    menuGenero(arquivo)
    mostrarCartoes(arquivo)
    menuStatus(arquivo)
   }

   function menuGenero(arquivo){
       const personagemGenero=[]
       arquivo.map(item => { 
        if (!personagemGenero.includes(item.gender)){ //includes determina se um array contém um determinado elemento, retornando true ou false.
            personagemGenero.push(item.gender)
        } else {
            return false
        }
       })
       generoFiltro.innerHTML=""
       generoFiltro.innerHTML="<option value =\"none\">Gênero</option>"
       generoFiltro.innerHTML+=personagemGenero.map(item =>
        `<option value="${item}">${item}</option>`).join("")
       }
       function mostrarCartoes(arr) {
        const cartoes = document.getElementById("root");
        let layout = "";
        arr.forEach(arquivo => {
          layout += `
              <div class ="card">
                <img src="${arquivo.image}"/>
                <h3> Nome:  ${arquivo.name}</h3>
                <h3> Gênero: ${arquivo.gender}</h3>
                <h3> Status: ${arquivo.status}</h3>
                <h3> Localização: ${arquivo.location.name}</h3>
                <h3> Origem: ${arquivo.origin.name}</h3>
              </div> `
        })
        cartoes.innerHTML = layout
      }
      
      statusFiltro.addEventListener("change", () => {
          status()
          estastistica.innerHTML=`porcentagem ${app.calcular(app.filtroS(arquivo,statusFiltro.value))} % ${statusFiltro.value} pers`
      })
      function status(){
         mostrarCartoes(app.filtroS(arquivo,statusFiltro.value))
      }
      function menuStatus(arquivo){
          const personagemStatus = []
          arquivo.map(item => {
              if (!personagemStatus.includes(item.status)){
                  personagemStatus.push(item.status)
              } else {
                  return false
              }
          })
          statusFiltro.innerHTML = "";
          statusFiltro.innerHTML = "<option value =\"none\">Status</option>";
          statusFiltro.innerHTML += personagemStatus.map(item =>
            `<option value="${item}">${item}</option>`).join("");
        }
        
