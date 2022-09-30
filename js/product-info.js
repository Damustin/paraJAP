
let arrayparashowpro = PRODUCT_INFO_URL + localStorage.getItem("productID") + EXT_TYPE
let array2 = []
let linkcomentarios = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("productID") + EXT_TYPE
let array3 = []


function showstar(scor) {
  
        if (scor === 1) {
            let star1 = "";
            star1 += ` 
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> `;
            document.getElementsByid("star").innerHTML = star1
        } else if (scor === 2) {
            let star2 = "";
            star2 += `
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> `;
            document.getElementsByid("star").innerHTML = star2
        } else if (scor === 3) {
            let star3 = "";
            star3 += `
        <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span> `;
            document.getElementsByid("star").innerHTML = star3
        } else if (scor === 4) {
            let star4 = "";
            star4 += `
        <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span> `;
            document.getElementsByid("star").innerHTML = star4
        } else if (scor === 5) {
            let star5 = "";
            star5 += `
        <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span> `;
            document.getElementsByid("star").innerHTML = star5

        }
    }






function showcomentarios(array) {
    let coment = "";

    for (let i = 0; i < array.length; i++) {
        let newarray = array[i];
        let scor = newarray.score
        let starok= `<span class="fa fa-star checked"></span>`
        let starnot= `<span class="fa fa-star"></span>`

        coment += `<div class="col">
      
    <h2 class="p4"> ${newarray.user}</h2><p class="mb-1">dice ${newarray.description}<br> fecha: ${newarray.dateTime} 
    puntuacion ${newarray.score}</p>
</div>
<div id"star"> 
${starok.repeat(scor)}
${starnot.repeat(5-scor)}
</div>
    `
        document.getElementById("comentarios").innerHTML = coment;
    

    }
}

function showproducts(array) {
    let newelement = `
<div class="row">
   
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h1 class="mb-1">${array.data.name}</h1>
            <small class="text-muted">${array.data.soldCount} artículos</small>
        </div>
        <p class="mb-1">${array.data.description}</p>
    </div>
</div>
</div class="d-flex w-100 justify-content-between">
<div  class="d-flex w-100 justify-content-between" class="col-3" >
<img src="${array.data.images[0]}" alt="imgn"  class="float" class="img-thumbnail">
<img src="${array.data.images[1]}" alt="imgn1"  class="float" class="img-thumbnail">
<img src="${array.data.images[2]}" alt="imgn2"  class="float" class="img-thumbnail">
<img src="${array.data.images[3]}" alt="imgn3" class="float" class="img-thumbnail">
</div>
<div class="list-group-item list-group-item-action cursor-active">
<h1>Productos relacionados<h1>
<h1 class="mb-1">${array.data.relatedProducts[0].name}</h1>
<img src="${array.data.relatedProducts[0].image}" alt="imgn" class="img-thumbnail">
</div>
<div>
<h1 class="mb-1">${array.data.relatedProducts[1].name}</h1>
<img src="${array.data.relatedProducts[1].image}" alt="imgn" class="img-thumbnail">
</div>      
        `
    document.getElementById("aqui").innerHTML = newelement

    console.log(typeof array3)
    console.log(linkcomentarios)
};

console.log(arrayparashowpro)

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
        }
    }
    )

})


document.getElementById("nombredeusuario").innerHTML = (localStorage.getItem("username"));

