
let arrayparashowpro = PRODUCT_INFO_URL + localStorage.getItem("productID") + EXT_TYPE;
let array2 = [];
let linkcomentarios = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("productID") + EXT_TYPE;
let array3 = [];
let botoncomprar = "";
let producto = "";
let cart = [];

function setproductID(id) {
  localStorage.setItem("productID", id);
  window.location = "product-info.html"
}



function showcomentarios(array) {
  let coment = "";

  for (let i = 0; i < array.length; i++) {
    let newarray = array[i];
    let scor = newarray.score
    let starok = `<span class="fa fa-star checked"></span>`
    let starnot = `<span class="fa fa-star"></span>`

    coment += `<div class="col">
      
    <h2 class="p4"> ${newarray.user}</h2><p class="mb-1">dice ${newarray.description}<br> fecha: ${newarray.dateTime} 
    puntuacion ${newarray.score}</p>
</div>
<div id"star"> 
${starok.repeat(scor)}
${starnot.repeat(5 - scor)}
</div>
    `
    document.getElementById("comentarios").innerHTML = coment;


  }
}

function showproducts(array) {
  producto = array.data
  botoncomprar = array.data.id
  let newelement = `
    <div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h1 class="mb-1">${array.data.name}</h1>
            <p class="text-muted">${array.data.soldCount} artículos</p> 
            <button id="${array.data.id}" type="button"
             class="btn btn-success btn-lg ">Comprar <i class="fas fa-shopping-cart"></i></button>
          
        </div>

        <p class="mb-1">${array.data.description}</p>
    </div>
</div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" >
      <div class="carousel-item active">
        <img src="${array.data.images[0]}" alt="imgn" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="${array.data.images[1]}" alt="imgn1" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="${array.data.images[2]}" alt="imgn2" class="d-block w-100">
      </div>
      <div class="carousel-item">
      <img src="${array.data.images[3]}" alt="imgn3" class="d-block w-100">
  </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

<div class="list-group-item list-group-item-action cursor-active">
<h1>Productos relacionados<h1>
</div>
<div onclick="setproductID(${array.data.relatedProducts[0].id})class="prodrelat" class="list-group-item list-group-item-action cursor-active">
<h1 class="mb-1">${array.data.relatedProducts[0].name}</h1>
<img src="${array.data.relatedProducts[0].image}" alt="imgn" class="img-thumbnail">
</div>
<div onclick="setproductID(${array.data.relatedProducts[1].id})class="prodrelat" "class="list-group-item list-group-item-action cursor-active">
<h1 class="mb-1">${array.data.relatedProducts[1].name}</h1>
<img src="${array.data.relatedProducts[1].image}" alt="imgn" class="img-thumbnail">
</div>      
        `
  document.getElementById("aqui").innerHTML = newelement;

  document.getElementById(botoncomprar).addEventListener("click", function () {
    if (localStorage.getItem("carrito")) {
      cart = JSON.parse(localStorage.getItem("carrito"))
      

      if (cart.some(articulo => articulo.id == producto.id)) {
        prompt("se agrego a tu carrito")
        producto.cantidad ++
       

      }
      else {
     
        cart.push(producto);
        localStorage.setItem("carrito", JSON.stringify(cart))
      }
    }

    else {
     
      cart.push(producto)
      localStorage.setItem("carrito", JSON.stringify(cart))
    }
  })
}


document.addEventListener("DOMContentLoaded", function () {
  getJSONData(arrayparashowpro).then(function (resultObj) {
    if (resultObj.status === "ok") {
      array2 = resultObj
      showproducts(array2)
    }
  })


  getJSONData(linkcomentarios).then(function (respon) {
    if (respon.status === "ok") {
      array3 = respon.data
      showcomentarios(array3)
      nameuserandbuton()

    }
  }
  )


})






