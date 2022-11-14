
let carritoactual = [];
const listener = document.getElementById("container-carrito");
const allinputvalue = document.getElementsByName("ofvalue");
const envios = document.getElementById("listenerenvios");
const subprod = document.getElementById("totalproductos");
const precioenvios = document.getElementById("productosmasenvio");
const preciofinal = document.getElementById("enviomastotal");
const modal = document.getElementById("staticBackdrop");
const modaltarjet = document.getElementById("tarjetoption");
const modaltransfer = document.getElementById("transferenciabancariaoption");
const finalizarcompra = document.getElementById("Finalizar");



function listennertoenvios(e){
    if (e.target.id == "standard") {
    precioenvios.innerHTML = "Por envio: $$" + (gettotalproduct(carritoactual) * 0.05)
    preciofinal.innerHTML = "Total: $$" + "Total: $$" + `<strong>${(gettotalproduct(carritoactual) + gettotalproduct(carritoactual) * 0.05)}</strong>`
} else if (e.target.id == "express") {
    precioenvios.innerHTML = "Por envio: $$" + (gettotalproduct(carritoactual) * 0.07)
    preciofinal.innerHTML = "Total: $$" + `<strong>${(gettotalproduct(carritoactual) + gettotalproduct(carritoactual) * 0.07)}</strong>`
} else if (e.target.id == "premium") {
    precioenvios.innerHTML = "Por envio: $$" + (gettotalproduct(carritoactual) * 0.15)
    preciofinal.innerHTML = "Total: $$" + `<strong>${(gettotalproduct(carritoactual) + gettotalproduct(carritoactual) * 0.15)}</strong>`

}}

modal.addEventListener("click",function(e){
    if (e.target.id == "cuentabancaria"){
        document.getElementById("tarj").setAttribute("disabled","");
        document.getElementById("tarj1").setAttribute("disabled","");
        document.getElementById("tarj2").setAttribute("disabled","");
        document.getElementById("acountbank").removeAttribute("disabled","");  
    } if (e.target.id == "tarjetadecredito"){
        document.getElementById("tarj").removeAttribute("disabled","");
        document.getElementById("tarj1").removeAttribute("disabled","");
        document.getElementById("tarj2").removeAttribute("disabled","");
        document.getElementById("acountbank").setAttribute("disabled","");
    }

})
envios.addEventListener("click", function (e) {
listennertoenvios(e)
})

listener.addEventListener("input", function (e) {
    modificarcant(e.target.id, e.target.value);
    subprod.innerHTML = "Total carrito: $$ " + gettotalproduct(carritoactual);
})


function modificarcant(id, cantidad) {
    carritoactual.forEach(element => {
        if (element.id == id) { element.cantidad = cantidad }

    })
    mostrarcarrito(carritoactual);
}


function gettotalproduct(array) {
    let totaes = 0;
    array.forEach(element => {
        element.subtotal = ((element.cantidad) * (element.cost))
        totaes = totaes + element.subtotal

    })
    return totaes;
}


function mostrarcarrito(producto) {

    let newart = "";

    for (let index = 0; index < producto.length; index++) {
        const element = producto[index];

        newart += `<div class="row">
<div class="col">
<img src="${element.images[0]}" alt="imgprod" width="180" height="100"> 
</div>
<div class="col">
${element.name}
</div>
<div class="col">
${element.currency + element.cost}
</div>
<div class="col">
<input  type="number" value="${element.cantidad}"
min="1" max="10" id=${element.id} 
>
</div>
<div name="ofvalue" class="col" >
${(element.currency) + (element.cantidad) * (element.cost)}
</div>
<button  class="col btn btn-danger btn-small mt-5 mb-1">
<i class="bi bi-trash3-fill"></i>
</button>
</div>`}


    document.getElementById("container-carrito").innerHTML = newart + "<hr>"
}



function validarform(){
       //Example starter JavaScript for disabling form submissions if there are invalid fields
       (function () {
        'use strict'
      
        //Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        //Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()  
              }
      
              form.classList.add('was-validated') 
            }, false)
            
            
         
          })
      })()
      }

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("carrito")) {
        carritoactual = JSON.parse(localStorage.getItem("carrito"))

        mostrarcarrito(carritoactual)
        subprod.innerHTML = "Total carrito: $$ " + gettotalproduct(carritoactual);
       validarform()
        
     


    }

    nameuserandbuton();

})
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
 function eliminararticulo(articulo){
 console.log(articulo)
 }
 







