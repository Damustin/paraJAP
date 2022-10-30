
let infousercart = CART_INFO_URL + "25801" + EXT_TYPE;
let carritoactual = [];
const listener = document.getElementById("container-carrito");

 listener.addEventListener("input",function(e){
    modificarcant(e.target.id,e.target.value)
    
 }
 )
function modificarcant(id,cantidad){
   carritoactual.forEach(element => {
    if (element.id == id){ element.cantidad = cantidad}
   })
 
   mostrarcarrito(carritoactual)


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
<div class="col" >
${(element.currency)+(element.cantidad)*(element.cost)}
</div>
</div>`}


        document.getElementById("container-carrito").innerHTML = newart +"<hr>"
    }
    


document.addEventListener("DOMContentLoaded", function () {
        if (localStorage.getItem("carrito")) {
             carritoactual = JSON.parse(localStorage.getItem("carrito"))
             console.log(carritoactual)
             console.log(infousercart)
             mostrarcarrito(carritoactual)
        
        }
      
        nameuserandbuton();
        
    })




