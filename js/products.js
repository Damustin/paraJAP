const miobj = PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE;
let mincost = undefined;
let maxcost = undefined;
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";

//devuelve un objeto con 2 propiedades status y data
function getJaSONData(url) {
    let result = {};
    showSpinner();
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}

function sortproducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = a.cost;
            let bCount = b.cost;

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}
//array donde se cargarán los datos recibidos:
let categoriesArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function MostrarAutos(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let auto = array[i];
        console.log(typeof(auto.cost));

        if ((mincost == undefined && maxcost == undefined)||(auto.cost>=mincost && auto.cost<=maxcost)||
        (auto.cost>= mincost && maxcost == undefined) ||(auto.cost<= maxcost && mincost== undefined )) {


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
                    <p class="mb-1"> ${auto.description}  Puedes obtener este articulo por $$${auto.cost}</p>
                </div>
            </div>
        </div>
        `;}

        document.getElementById("aqui").innerHTML = htmlContentToAppend;
    }
    
}




let C101ARRAY = [];
document.addEventListener("DOMContentLoaded", function () {
    getJaSONData(miobj).then(result => {
        if (result.status == "ok") {
            C101ARRAY = result.data.products;
            MostrarAutos(C101ARRAY)
        }
    }

)})
document.getElementById("nombredeusuario").innerHTML = (localStorage.getItem("username"))



document.getElementById("rangeFilterCount"),addEventListener("click",function(){

if (document.getElementById("rangeFilterCountMin").value !=""){
mincost = parseInt(document.getElementById("rangeFilterCountMin").value);}
else {
    mincost = undefined;
}
if (document.getElementById("rangeFilterCountMax").value != ""){
    maxcost =  maxcost = parseInt(document.getElementById("rangeFilterCountMax").value);
} else {
    maxcost = undefined;
}


   
   (MostrarAutos(C101ARRAY))
        
    
})

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    mincost = undefined;
    maxcost = undefined;

    MostrarAutos();
});
console.log(miobj);
console.log(typeof(parseInt(document.getElementById("rangeFilterCountMin").value)))



document.getElementById("sortAsc").addEventListener("click", function(){
    sortproducts(ORDER_ASC_BY_NAME,C101ARRAY);
});

document.getElementById("sortDesc").addEventListener("click", function(){
    sortproducts(ORDER_DESC_BY_NAME,C101ARRAY);
})


