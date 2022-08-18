const miobj = "https://japceibal.github.io/emercado-api/cats_products/101.json"

//devuelve un objeto con 2 propiedades status y data
function getJaSONData(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
//array donde se cargarán los datos recibidos:
let categoriesArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function MostrarAutos(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let auto = array[i];
        htmlContentToAppend += `
        <div onclick="setCatID(${auto.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${auto.image}" alt="imagen.auto" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${auto.name}</h4>
                        <small class="text-muted">${auto.soldCount} artículos</small>
                    </div>
                    <p class="mb-1"> ${auto.description}  Puedes obtener este vehiculo por $$${auto.cost}</p>
                </div>
            </div>
        </div>
        `;
        
        document.getElementById("aqui").innerHTML = htmlContentToAppend; 
    }
}        
           
    
           



let C101ARRAY =[];
document.addEventListener("DOMContentLoaded",function(){
    getJaSONData(miobj).then(result =>{
        if(result.status=="ok"){
            C101ARRAY = result.data.products;
            MostrarAutos(C101ARRAY)

            console.log(C101ARRAY) }
    })
})